# Tunaweza platform — phased development plan

**Status:** Revised for frontend-first delivery; this sequence remains a
proposal and content/design approval gates still apply.

## Phase 1 — Discovery and approval

- Confirm organizational stakeholders, current operations, required approvals,
  policies, and project success measures.
- Complete the live URL/content/media inventory and safeguarding review.
- Approve the requirements, sitemap, architecture, data model, API outline,
  migration rules, and hosting/integration decisions in this package.

**Exit gate:** Named content owners and approvers; unresolved assumptions
recorded; scope and data-protection decisions signed off.

## Phase 2 — UX and design

- Verify brand assets and photography rights.
- Produce desktop/mobile wireframes and user journeys.
- Define tokens, accessibility patterns, and component inventory.
- Prototype Bootstrap and locally owned shadcn-pattern components; confirm the
  styling, accessibility, and responsive behavior.

**Exit gate:** Stakeholder-approved wireframes and design system; no unresolved
global CSS/reset strategy.

## Phase 3 — Frontend-only foundation

- Build the public website and admin dashboard as separate React/TypeScript
  frontends.
- Establish design tokens, responsive shells, reusable interactions, route
  structures, frontend validation, and local build/test/lint workflows.
- Use isolated static preview data and a typed API boundary; do not implement
  a server, database, authentication backend, or live form delivery in this
  phase.
- Keep unapproved copy, contact information, schedules, profiles, stories, and
  metrics visibly marked as draft or pending verification.

**Exit gate:** Both frontends build independently; user journeys and responsive
states are reviewed; no form claims to have been delivered or saved.

## Phase 4 — Frontend feature completion

- Complete the public page templates and approved content presentation.
- Complete the CMS frontend for editorial workflows, permissions-aware views,
  media review, enquiries, and settings using non-sensitive preview fixtures.
- Confirm accessibility, brand, CSS/library coexistence, and content approval
  before connecting real data.

**Exit gate:** Stakeholder-approved frontends; accessibility checks pass;
preview data is identified and replaceable; frontend forms remain disconnected.

## Phase 5 — Backend foundation and integration

- Create the Express API, environment validation, logging, request validation,
  centralized errors, rate limits, CORS, and OpenAPI documentation.
- Configure MongoDB, authentication/session and CSRF strategy, authorization,
  audit logging, and secure file handling.
- Connect approved frontends to the versioned API; implement public content,
  CMS workflow, media, enquiries, and newsletter integrations according to
  approved requirements.

**Exit gate:** API contracts, security controls, and frontend/API integrations
are tested; public endpoints expose only approved, published content.

## Phase 6 — Content migration and integrations

- Configure approved email, media, maps/WhatsApp/social, and newsletter
  providers.
- Import approved content/media with reconciliation reports.
- Apply and test redirects, canonicals, metadata, and search-engine settings.

**Exit gate:** Import counts reconcile; consent approvals are verified;
redirects, backups, and rollback are tested.

## Phase 7 — Verification and launch readiness

- Run unit, integration, end-to-end, permission, safeguarding, accessibility,
  security, and performance tests.
- Test restore from backup, error monitoring, log redaction, alert ownership,
  and staff procedures.
- Train staff and approve CMS guide, privacy/legal pages, launch checklist, and
  cutover/rollback plan.

**Exit gate:** Tunaweza accepts the release; no open critical/high risk
findings; production credentials and operational owners are in place.

## Phase 8 — Launch and handover

- Launch in a controlled window with rollback available.
- Monitor errors, forms, media, redirects, uptime, and search coverage.
- Hand over source, deployment configuration, API/database documentation, CMS
  guide, backup/recovery steps, and known limitations.

**Exit gate:** Production behavior verified and named staff own content,
permissions, support, and data-retention operations.

## Cross-phase quality gates

- Keep all content factual, approved, and respectful.
- Keep personal/child information out of logs, fixtures, and public responses.
- Test mobile, keyboard, screen-reader, contrast, form errors, and reduced
  motion.
- Update API, database, deployment, and user documentation with implementation
  changes.
- Treat payment processing, medical records, and new sensitive data collection
  as out of scope unless re-approved.
