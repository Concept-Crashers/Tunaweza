# Tunaweza platform — MongoDB data model

**Status:** Logical model for review; schemas and indexes are not implemented.

## 1. Shared conventions

Use Mongoose schemas with strict field allowlists, timestamps, and explicit
validation. MongoDB `_id` is the primary identifier. Store dates as UTC. Use
references for independently managed entities and bounded arrays only when
they are naturally owned by their parent. Do not put media binaries in MongoDB.

Reusable fields:

- `createdAt`, `updatedAt`
- `createdBy`, `updatedBy` (user references where applicable)
- `status`: domain-specific enum; content uses `draft`, `pending_review`,
  `approved`, `published`, `archived`
- `publishedAt`, `archivedAt` where relevant
- `deletedAt` only where recoverable soft deletion is required; legal retention
  and final purge policy must be approved

Public queries must explicitly select `status: published` and, for workflow
content, an approved review state. Never expose private/internal fields by
serializing whole Mongoose documents.

## 2. Collections

| Collection | Proposed fields and relationships | Important indexes |
|---|---|---|
| `users` | `email`, `passwordHash`, `displayName`, `roleIds[]`, `status`, `lastLoginAt`, recovery/session metadata | unique normalized `email`; `status` |
| `roles` | `name`, `description`, `permissionIds[]`, `systemRole` | unique `name` |
| `permissions` | stable `key`, `description`, `resource`, `action` | unique `key` |
| `pages` | `title`, unique `slug`, `summary`, sanitized editor document, `seo`, `status`, revision/reviewer metadata | unique `slug`; `status + publishedAt` |
| `services` | `title`, `slug`, `summary`, `purpose`, `details`, `audience`, `delivery`, `relatedResourceIds[]`, `mediaIds[]`, `seo`, workflow fields | unique `slug`; status index |
| `programmes` | `title`, `slug`, `overview`, `objectives`, `activities`, `participants`, optional approved schedule, `mediaIds[]`, workflow fields | unique `slug`; status index |
| `articles` | `title`, `slug`, `excerpt`, sanitized body, `categoryIds[]`, `tagIds[]`, `featuredMediaId`, `authorId`, `publishedAt`, `seo`, workflow fields | unique `slug`; `status + publishedAt`; text/search strategy |
| `categories` | `name`, `slug`, `description`, optional parent | unique `slug` |
| `tags` | `name`, `slug` | unique `slug` |
| `events` | `title`, `slug`, `summary`, `details`, venue, optional start/end dates, registration URL only if approved, `status`, media, SEO | unique `slug`; `status + startAt` |
| `teamMembers` | approved `name`, `position`, `biography`, optional verified credentials, approved `mediaId`, display order, status | slug if detail pages are used; `status + order` |
| `testimonials` | approved title/body, contributor attribution rules, related service/programme, optional media, consent approval reference/status, workflow fields | `status + publishedAt` |
| `partners` | approved name, description, website, logo media, display order, status | `status + order` |
| `galleries` | `title`, `slug`, description, ordered media references, category, status | unique `slug`; status index |
| `media` | provider, provider asset ID, MIME type, size, dimensions, checksum, alt text, caption, category, uploader, visibility, consent/approval status/reference, removal state | unique provider + asset ID; `visibility + status`; category |
| `resources` | `title`, `slug`, description, media/document reference, type, language, publication date, status, SEO | unique `slug`; status index |
| `enquiries` | type, necessary contact fields, message, consent notice/version, status, assignee, internal notes, timestamps, retention/delete-after date | `status + createdAt`; `assignee + status`; TTL only after retention approval |
| `newsletterSubscribers` | normalized email, consent timestamp/source/policy version, confirmation state, unsubscribe timestamp | unique normalized email; state index |
| `menus` | menu key, ordered items, labels, links, visibility, updatedBy | unique menu key |
| `settings` | allowlisted key/value structures for approved public contact and SEO settings | unique key |
| `auditLogs` | actor, action, resource type/id, timestamp, request ID, minimal before/after summary | `createdAt`; `actorId + createdAt`; resource index |
| `contentRevisions` | resource type/id, revision number, snapshot, author, reason, timestamp | unique resource + revision; resource + date |

## 3. Workflow and media rules

- A content record is publicly queryable only after its approved publication
  transition. Keep reviewer, approver, publisher, and timestamps distinct when
  governance requires it.
- Media upload begins private. It becomes publicly addressable only when
  validated, approved, and referenced by published content.
- For child-related media, persist an approved consent status, approver, date,
  and a minimal protected evidence reference if the organisation authorizes
  it. Do not store consent documents publicly or include them in normal API
  responses.
- Removal must unpublish content references and revoke or invalidate the
  provider asset according to the agreed retention/backup policy.
- For revision snapshots, define limits and exclude secrets, enquiry data, and
  unnecessary personal information.

## 4. Validation and index policy

- Normalize emails before uniqueness checks.
- Enforce slug uniqueness and format at both application and database layers.
- Validate all references and reject invalid workflow transitions.
- Add compound indexes from actual query patterns; verify them with
  representative explain plans before production.
- Use pagination and bounded projections; do not return unbounded galleries,
  audit logs, or revision histories.
- Search should use an explicitly selected MongoDB text/search capability and
  indexed fields; do not promise language-quality full-text search until
  provider and relevance requirements are confirmed.
- Prefer archive/status fields over hard deletes for content where required.
  Final data-retention periods, deletion rights, and backup expiry need policy
  approval.

## 5. Seed data policy

Development seeds may include generic roles, permissions, categories, and
clearly marked placeholder pages. They must not contain fabricated staff,
partners, testimonials, child stories, impact figures, real contact details, or
production credentials. A designated administrator account must be created
through a secure setup flow, not a committed password.
