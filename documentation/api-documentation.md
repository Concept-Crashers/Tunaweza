# Tunaweza platform — REST API specification

**Status:** Proposed contract; endpoint names and payloads require review.

Base path: `/api/v1`. JSON is UTF-8. Admin authentication uses secure
HttpOnly cookies as described in [architecture](./architecture.md).

## 1. Response conventions

Success:

```json
{
  "data": {},
  "meta": { "requestId": "opaque-id" }
}
```

Paginated success:

```json
{
  "data": [],
  "meta": {
    "page": 1,
    "pageSize": 20,
    "totalItems": 0,
    "totalPages": 0,
    "requestId": "opaque-id"
  }
}
```

Error:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request could not be processed.",
    "fieldErrors": {},
    "requestId": "opaque-id"
  }
}
```

Do not return stack traces, secrets, private notes, password hashes, consent
evidence, or internal moderation fields. Use `400` for malformed/invalid input,
`401` for missing/invalid authentication, `403` for insufficient permission,
`404` for inaccessible/missing records, `409` for conflicts, `429` for rate
limits, and appropriate `5xx` responses for server failures.

List routes use bounded `page`/`pageSize` (proposed maximum 100), allowlisted
filters and sort fields, and stable ordering. Search parameters are length
limited and sanitized.

## 2. Public routes

Public routes expose published/approved content only.

| Method and path | Purpose |
|---|---|
| `GET /pages` / `GET /pages/:slug` | Published page index and detail |
| `GET /services` / `GET /services/:slug` | Published services |
| `GET /programmes` / `GET /programmes/:slug` | Published programmes |
| `GET /articles` / `GET /articles/:slug` | Published news/stories with pagination and approved filters |
| `GET /events` / `GET /events/:slug` | Published events |
| `GET /team` | Approved public team profiles |
| `GET /testimonials` | Approved, consent-cleared testimonials |
| `GET /partners` | Published partner entries |
| `GET /galleries` / `GET /galleries/:slug` | Approved gallery metadata/media |
| `GET /resources` / `GET /resources/:slug` | Published resource metadata/download links |
| `GET /menus/:key` | Public navigation for an allowlisted key |
| `GET /settings/public` | Allowlisted public contact/SEO settings only |
| `POST /enquiries` | Submit an allowed enquiry type |
| `POST /newsletter/subscriptions` | Request subscription using approved consent flow |
| `POST /newsletter/unsubscribe` | Unsubscribe using a safe verification token |

`POST /enquiries` accepts only the fields needed for the selected form type;
must not accept diagnosis, detailed medical history, or arbitrary staff/status
fields. Apply rate limits, server-side validation, spam controls, and clear
consent/purpose text. Email recipients are configured server-side.

Newsletter double opt-in and unsubscribe token design require provider and
privacy-policy approval.

## 3. Authentication routes

| Method and path | Purpose |
|---|---|
| `POST /auth/login` | Authenticate and set session cookie |
| `POST /auth/logout` | Revoke session and clear cookie |
| `GET /auth/me` | Return current user's safe profile and permission keys |
| `POST /auth/forgot-password` | Start rate-limited recovery |
| `POST /auth/reset-password` | Complete single-use, expiring reset |
| `POST /auth/refresh` | Only if a refresh flow is approved |

Prevent user enumeration in recovery responses. Login and recovery responses
must not disclose whether an email belongs to an account. Apply CSRF protection
to cookie-authenticated state-changing requests.

## 4. Admin routes

All routes below require an authenticated user plus the named permission.
Resource modules support `GET` list/detail, `POST` create, `PATCH` update, and
workflow actions as shown. Delete should default to archive/unpublish rather
than hard deletion.

| Resource | Route | Permission / notes |
|---|---|---|
| Pages | `/admin/pages` | `pages.read`, `pages.create`, `pages.update` |
| Services | `/admin/services` | `services.*` |
| Programmes | `/admin/programmes` | `programmes.*` |
| Articles | `/admin/articles` | `articles.*` |
| Events | `/admin/events` | `events.*` |
| Team | `/admin/team` | `team.*`; credentials must be verified |
| Testimonials | `/admin/testimonials` | `testimonials.*`; require consent clearance |
| Partners | `/admin/partners` | `partners.*` |
| Galleries | `/admin/galleries` | `galleries.*`; only approved media may publish |
| Resources | `/admin/resources` | `resources.*` |
| Media | `/admin/media` | `media.read`, `media.upload`, `media.update`, `media.remove` |
| Enquiries | `/admin/enquiries` | `enquiries.read`, `enquiries.assign`, `enquiries.update`; notes private |
| Subscribers | `/admin/newsletter/subscriptions` | `newsletter.read`, `newsletter.export` if approved |
| Menus/settings | `/admin/menus`, `/admin/settings` | `menus.*`, `settings.*` |
| Users/roles | `/admin/users`, `/admin/roles`, `/admin/permissions` | `users.*`, `roles.*`; restricted to authorised administrators |
| Audit | `/admin/audit-logs` | `audit.read`; filters and pagination required |
| Dashboard | `/admin/dashboard` | `dashboard.read`; aggregate data only |

Common workflow actions:

| Method and path | Action |
|---|---|
| `POST /admin/:resource/:id/submit-review` | Submit draft for review |
| `POST /admin/:resource/:id/approve` | Approve; publisher/reviewer permission required |
| `POST /admin/:resource/:id/publish` | Publish an approved version |
| `POST /admin/:resource/:id/unpublish` | Immediately remove public exposure |
| `POST /admin/:resource/:id/archive` | Archive from public listings |
| `GET /admin/:resource/:id/revisions` | Read revision history |
| `POST /admin/:resource/:id/revisions/:revisionId/restore` | Restore as a new draft/revision |

Implement only the action routes needed for each resource; every state change
must validate the current state and permission server-side and append an audit
record.

## 5. Upload routes

Prefer a private upload-authorisation flow:

1. `POST /admin/media/upload-intents` validates declared type, size, category,
   and uploader permission; returns a short-lived provider upload instruction.
2. Client uploads directly to approved storage.
3. `POST /admin/media/:id/confirm` verifies provider metadata and actual file
   properties, then leaves the asset private pending any required review.
4. `PATCH /admin/media/:id` records alt text, caption, category, and approved
   consent state.

Exact provider signatures, allowed MIME types, size limits, malware scanning,
and image transformations are deployment decisions. Do not trust a filename
or browser MIME declaration alone.

## 6. Validation and versioning requirements

- Use Zod (or the selected equivalent) at the HTTP boundary; reject unknown
  privileged fields rather than silently accepting them.
- Sanitize rich-text input on write and render from a safe, allowlisted format.
- Public API serialization is explicit and independently tested.
- Use optimistic concurrency/version fields on CMS edits to avoid overwriting
  another editor's changes.
- Add idempotency protection where retrying a form submission could create
  duplicates.
- Publish an OpenAPI document and examples with the implementation and test
  every documented status/permission rule.
