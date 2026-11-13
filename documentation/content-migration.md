# Tunaweza platform — content discovery and migration

**Status:** Initial public-web review; full inventory and migration mapping
require organisational access and approval.

## 1. Initial discovery

The live `sitemap_index.xml` was inspected on 13 November 2026. It links page,
post, attachment, category, tag, and author sitemaps. The page sitemap exposes
legacy URLs including `/about/`, `/services/`, `/contact/`, `/gallery/`,
`/our-team/`, `/board-members/`, `/volunteers/`, service detail pages, `/news/`,
`/news-events/`, `/events/`, `/donate/`, enrollment, and resources/content
pages. It also includes test/sample pages, event booking pages, and
shop/cart/checkout/account/donor pages. Do not assume every indexed URL is
current, intentional, or approved for migration.

The post sitemap includes stories/news from 2015 through material last modified
in 2025, including historical stories, events, sensory-break content,
newsletters, and autism-related posts. The sitemap's last-modified date is not
proof that facts, services, or links remain current.

The root page returned a family story during this review rather than a standard
home page. Several guessed common paths returned 404, while `/about/`,
`/services/`, and `/contact/` appear in the sitemap. A full crawl should use
the sitemap and actual internal links, record response codes/canonical targets,
and reconcile conflicting or orphaned pages.

## 2. Content inventory and disposition workflow

Create a controlled spreadsheet or CMS import staging dataset with one record
per URL:

`oldUrl`, `httpStatus`, `canonicalUrl`, `contentType`, `title`, `lastModified`,
`owner`, `proposedNewUrl`, `decision`, `approvalStatus`, `mediaReferences`,
`consentReview`, `notes`.

Allowed decisions: migrate as-is after fact check; rewrite; merge into a new
page; redirect to a relevant page; noindex temporarily; retire with an
approved response. Assign a Tunaweza owner for every item. Store private
consent evidence outside public content and restrict access.

## 3. Safeguarding and quality checks

- Public availability is not permission to republish. Review child/family
  stories, photographs, names, diagnoses, school details, and testimonials for
  current documented consent and organisational approval.
- Existing stories may be anonymised, shortened, withheld, or removed based on
  consent and safeguarding review; a technical migration must not make these
  choices automatically.
- Verify services, programmes, schedules, staff, qualifications, partners,
  addresses, donation instructions, statistics, and policy language with
  designated owners.
- Treat legacy health claims and dated advice as editorial-review items.
- Verify image ownership, consent, alt text, captions, and whether the asset
  should remain publicly accessible.
- Do not migrate WordPress admin, transaction, account, checkout, or personal
  subscriber data into the new platform without explicit scope, lawful basis,
  and secure migration approval.

## 4. URL and SEO migration

1. Crawl all sitemap and discovered internal URLs; capture status, title,
   canonical, indexability, and inbound/internal link destinations.
2. Agree a canonical destination for each useful URL; preserve slugs when
   sensible and avoid duplicate pages created by old CMS variants.
3. Produce an old-to-new redirect map. Use one-hop permanent (301) redirects
   for moved content; avoid sending unrelated URLs to the home page.
4. Retire sample/test, booking, commerce, and account URLs according to their
   actual use, search value, and legal/transaction obligations.
5. Preserve metadata and valuable inbound links where accurate; create new
   titles/descriptions and canonical tags.
6. Generate and validate XML sitemap and robots rules for each environment.
7. Test every old URL class, redirect chain, 404, canonical, and sitemap before
   launch. Keep the existing site and a verified backup available until the
   cutover is approved and rollback has been rehearsed.
8. Monitor Search Console, analytics (if approved), 404s, and redirect errors
   after launch; assign an owner for corrections.

## 5. Evidence sources reviewed

- Tunaweza public site: <https://tunaweza.co.ug/>
- Tunaweza sitemap index: <https://tunaweza.co.ug/sitemap_index.xml>
- A sample of currently listed articles, including the founding story,
  sensory-break article, and August 2025 newsletter.
- Reference organisations were reviewed for high-level patterns, not for
  copying content, branding, layouts, or imagery: Able Child Africa, Sense
  International, Alleviate Child Initiative, Enduring Trust Africa, Nabasa
  Children's Therapy Centre, and Ithemba Communities Uganda.

This is not a legal review, a full crawl, or confirmation of Tunaweza's current
services. External reference sites change over time; final design research
should be repeated during approved discovery.
