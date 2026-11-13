# Tunaweza platform — system architecture

**Status:** Proposed architecture for review

## 1. Architectural shape

Use a TypeScript monorepo with three independently buildable applications and
a shared, small set of non-sensitive contracts:

```text
client/
  public-website/     React + TypeScript + Vite + React Router
  admin-dashboard/    React + TypeScript + Vite + React Router
server/
  src/
    config/
    middleware/
    modules/
    routes/
    services/
    utils/
documentation/
```

The server is a modular monolith: one Express REST API, one MongoDB deployment,
and modules grouped by domain. Keep public site, admin UI, and API separable at
build/deployment time; do not split into microservices.

## 2. Runtime boundaries

```text
Public browser ── public routes ──┐
                                 ├── Express /api/v1 ── MongoDB
Admin browser ── admin routes ───┘                 ├── media provider
                                                   └── email provider
```

- Public routes read published, approved records only.
- Admin routes require authentication and a server-enforced permission.
- Media binaries live in approved object/media storage; MongoDB stores metadata
  and provider identifiers, not image/PDF binary payloads.
- Email is an outbound notification/delivery integration; the API does not
  trust client-supplied recipient addresses.
- No clinical records or patient-management functionality is in scope.

## 3. Frontend choices

- React, TypeScript, Vite, and React Router for the two browser applications.
- TanStack Query for API/server state; React Hook Form and Zod for forms and
  client validation. The server independently validates all requests.
- Bootstrap 5 for the grid and selected layout utilities/components.
- shadcn/ui for selected accessible primitives (for example dialogs, dropdown
  menus, tabs, and form controls), with their Radix-based behavior and
  project-owned component source.
- Lucide React for icons. shadcn/ui commonly uses Lucide; there is no separate
  official “shadcn icons” library. Avoid adding Font Awesome unless a confirmed
  asset/content need justifies a second icon set.

Bootstrap and shadcn/ui/Tailwind have overlapping styles. To avoid a fragile
two-framework UI, use Bootstrap selectively for layout rather than recreating
each shadcn primitive with Bootstrap. Establish explicit CSS import order,
scoped component classes, and a tested Tailwind preflight/reset strategy before
building shared UI. Avoid loading Bootstrap JavaScript when React components
own interaction state. The implementation spike must validate dialogs, forms,
focus styles, breakpoints, and production CSS output.

## 4. Backend modules

Proposed Express modules:

- `auth`: sign-in/out, session lifecycle, password recovery, account status
- `users` and `access`: users, roles, permissions
- `content`: pages, services, programmes, articles, events, resources
- `people`: team, partners, approved stories/testimonials
- `media`: metadata, upload authorization, consent and approval state
- `enquiries`: form intake, assignment, internal notes, status
- `newsletter`: subscriber consent and unsubscribe
- `navigation` and `settings`: menus and public settings
- `audit`: append-only security and content activity events

Each module owns schema/model, validation, service, controller, and routes where
appropriate. Controllers handle HTTP concerns; services implement business
rules; shared middleware handles validation, authentication, authorization,
rate limits, and error mapping.

## 5. Authentication and authorization

- Use server-issued JWTs in `HttpOnly`, `Secure` (production), appropriately
  `SameSite` cookies. Keep token material inaccessible to browser JavaScript.
- Confirm access-token lifetime, refresh/session strategy, CSRF defenses, and
  production cookie domain with the deployment owner before implementation.
- Hash passwords with Argon2id or bcrypt using maintained parameters.
- Apply deny-by-default API authorization and explicit permission checks to
  every admin operation.
- Protect state-changing cookie-authenticated requests against CSRF; use strict
  CORS allowlists, rate limiting, account throttling, and session revocation.
- Re-authenticate for sensitive account/role changes if approved.
- Maintain audit entries without recording passwords, tokens, private form
  contents, or unnecessary child data.

## 6. Data and content policy

MongoDB stores content and metadata as described in
[database design](./database-design.md). Public queries must filter to the
approved/published state in the data-access layer, not rely on UI filtering.
Use references for independent reusable objects and bounded embedded snapshots
only where historical display consistency is needed.

Child media requires explicit approval and an auditable consent status before
publishing. The CMS should store only the minimum consent evidence/reference
approved by the organisation; it is not a repository for detailed medical or
family case files. Deletion, retention, and backup-expiry requirements require
policy review before launch.

## 7. Cross-cutting concerns

- Environment schemas validate required configuration at process startup and
  fail clearly if values are missing.
- Use structured logs with correlation/request IDs and privacy-safe fields.
- Add centralized error responses, request IDs, body size limits, secure
  headers, upload scanning/verification, and database query limits.
- Generate OpenAPI from or alongside validated route contracts and keep it in
  sync with integration tests.
- Separate development, staging, and production configuration and data.
- Backups, restore tests, media lifecycle, monitoring, and incident ownership
  are launch requirements, not post-launch nice-to-haves.

## 8. Deployment proposal

Deploy the public website and admin dashboard as separate static frontend
builds, and the API as a separately hosted Node service. Use managed MongoDB,
approved object storage (Cloudinary or equivalent), and a configured
transactional email provider. Proposed public domain is `tunaweza.co.ug`;
`admin.tunaweza.co.ug` is an option, not a decision. Confirm DNS, TLS, CORS,
cookie scope, backups, and hosting region/provider with the organisation.

## 9. Architecture decisions to approve

1. Monorepo and independently deployable SPAs.
2. Bootstrap layout plus selectively used shadcn/ui and Tailwind.
3. Lucide as the primary icon set.
4. Cookie-based JWT session details and CSRF strategy.
5. Hosting, storage, email, analytics, and operational owners.
6. Whether content approval is single- or multi-step, and who can publish.
