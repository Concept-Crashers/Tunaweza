# Tunaweza platform — software requirements

**Status:** Draft for stakeholder review  
**Date:** 13 November 2026  
**Scope:** Discovery and planning only; implementation is pending approval.

## 1. Product goals

The platform will present Tunaweza Children's Centre's verified identity,
services, programmes, approved stories, and ways to get involved. It will give
authorised staff a separate CMS for maintaining public content and handling
enquiries. The platform is not a clinical, educational, or case-management
system.

Success means that a visitor can understand what the organisation currently
offers, find accurate contact information, and submit an appropriate enquiry;
staff can safely review and publish content; and the migration preserves
valuable search traffic without carrying forward unreviewed content or media.

## 2. Audience and user needs

| Audience | Need |
|---|---|
| Parents and caregivers | Understand verified services and programmes, how to enquire, and where to find practical resources. |
| Children and young people | Encounter respectful, inclusive content and accessible navigation. |
| Donors and partners | Understand the organisation, its verified work, and approved ways to help. |
| Educators and professionals | Find verified service information, resources, and partnership contacts. |
| Public visitors and media | Find current news, events, contact details, and approved organisational information. |
| Content editors | Draft and submit content without being able to publish beyond their permissions. |
| Publishers and administrators | Review, approve, publish, archive, and audit content. |

## 3. Proposed sitemap

### Public website

- **Home**
  - Introduction and mission (approved copy only)
  - Featured services and programme
  - Approved stories/news, partners, impact, and get-involved links
- **About**
  - Overview, history, mission, vision, values
  - Leadership, board, team, partnerships (approved profiles only)
- **Services**
  - Service overview
  - Individual service pages (only confirmed offerings)
- **Programmes**
  - Day programme and any other currently verified programmes
- **Parents & caregivers**
  - How to access services, FAQs, family resources
- **Our impact**
  - Verified statistics, approved stories, reports
- **News & events**
  - News index, article details, event listings and details
- **Stories**
  - Approved stories and testimonials, with attribution/consent controls
- **Gallery**
  - Approved albums and media only
- **Resources**
  - Searchable documents, newsletters, annual reports, and guides
- **Get involved**
  - Donate, volunteer, partner, internships/placements, equipment/materials
- **Contact**
  - Confirmed address, phone, email, hours, map, WhatsApp/social links, forms
- **Legal and safeguarding**
  - Privacy, terms, child safeguarding, media consent, accessibility

The final navigation labels, page boundaries, and hierarchy require stakeholder
approval. No live donation processing is included unless separately approved.

### Administrative CMS

- Sign-in and account recovery
- Dashboard
- Pages, services, programmes, articles, events
- Team, partners, stories/testimonials
- Gallery and media library
- Resources, menus, SEO metadata, website settings
- Enquiries and newsletter subscriptions
- Users, roles/permissions, audit log

## 4. Functional requirements

### Public experience

1. Publish only approved and published content through public pages and APIs.
2. Provide responsive navigation, page search where applicable, pagination, and
   clearly labelled actions.
3. Offer separate, minimal-data forms for general, service, enrolment,
   volunteer, internship, and partnership enquiries, subject to client approval.
4. Confirm receipt to submitters and notify authorised staff through the
   configured email provider.
5. Provide accessible image alternatives, captions, document metadata, and
   clear links to downloadable resources.
6. Show only confirmed contact, donation, schedule, service, impact, and event
   information; display an explicit content state in the CMS when a fact needs
   verification.

### CMS and publishing

1. Enforce roles and permissions on the API, not only in the UI.
2. Support draft, pending review, approved, published, and archived states.
3. Keep revision history and record who changed, reviewed, and published
   content.
4. Support preview, SEO fields, media metadata, and scheduled publishing if
   confirmed as a launch requirement.
5. Validate uploads by type and size; capture alt text and consent/approval
   status for child-related media; permit authorised removal/unpublishing.
6. Allow staff to triage, assign, and record status for enquiries without
   collecting diagnoses or detailed medical histories.
7. Provide audit events for authentication, permission changes, publication,
   media consent changes, and destructive operations.

### Roles

Proposed roles are Super Administrator, Administrator, Content Editor,
Publisher, and Communications Staff. Role-to-permission mappings and the
separation between approval and publishing must be agreed with Tunaweza.

## 5. Non-functional requirements

- **Accessibility:** Target WCAG 2.2 AA, including keyboard use, focus,
  contrast, forms, dialogs, zoom/reflow, reduced motion, and screen-reader
  semantics.
- **Privacy and safeguarding:** Minimise collection and retention of personal
  data; do not expose private child/family or medical information; publish
  child-related content only after documented consent and organisational
  approval.
- **Security:** Secure cookie-based authentication, password hashing, API
  validation, least privilege, rate limits, upload controls, secure secrets,
  backups, logging, and documented incident/recovery procedures.
- **Performance:** Responsive and usable on mobile devices and variable
  connections; optimise media and fonts, lazy-load below-fold media, paginate
  APIs, and monitor Core Web Vitals.
- **SEO:** Preserve useful URLs, redirect retired URLs, create sitemap,
  canonical and social metadata, and use structured data only where accurate.
- **Maintainability:** TypeScript across frontend applications and backend;
  modular code, documented APIs, automated tests, separate environments.
- **Browser support:** Current major desktop and mobile browsers, to be agreed
  before acceptance testing.

## 6. Acceptance criteria

1. Visitors can reach the approved public pages and submit an enquiry.
2. Public endpoints never return draft, pending, rejected, or archived content.
3. An editor cannot approve or publish without the relevant permission.
4. A publisher can review and publish only through the defined workflow.
5. Uploaded media cannot be publicly exposed before approval; child-related
   media has a recorded consent/approval state.
6. Staff can track enquiry status without the platform acting as a patient
   record.
7. Core journeys work by keyboard and on mobile; accessibility checks have no
   unresolved critical blockers.
8. Redirects are tested against the approved old-to-new URL map before cutover.
9. Content, statistics, profiles, legal policies, contact details, and images
   have designated organisational approvers.

## 7. Decisions required before implementation

- Confirm scope, audience priorities, and sitemap.
- Confirm current services, programme schedule, contacts, team, partners,
  donation instructions, and approved impact evidence.
- Approve the consent, retention, privacy, safeguarding, and publishing
  policies, including ownership of consent records.
- Approve public forms and minimal fields, notification recipients, spam
  controls, and retention periods.
- Choose hosting, MongoDB provider, media storage, transactional email, domain
  topology, analytics, and backups.
- Confirm whether newsletter integration, scheduled publishing, live events,
  payment processing, and admin subdomain are in scope.
- Approve the proposed mixed UI stack and its CSS-isolation approach in
  [UI/UX and design system](./ui-ux-design.md).

## 8. Discovery evidence and limitations

The repository was empty at discovery (no tracked files or commits). The live
site's sitemap and a sample of public pages were inspected on the date above.
The sitemap lists existing organisation, team, services, contact, gallery,
news, event, donation, and legacy commerce/account URLs. It also lists legacy
articles from 2015 onward and newer material through 2025. This is an initial
inventory, not a full content audit or verification of what Tunaweza currently
offers. See the [migration plan](./content-migration.md).

The root URL returned a family story rather than a conventional landing page
during this inspection. This may reflect a site configuration/content issue;
confirm expected homepage and current production state with the organisation.

Some publicly accessible stories contain identifiable child/family or health
details. Their presence on the existing site is not evidence of current consent
or approval for republication. Treat them as restricted pending review.
