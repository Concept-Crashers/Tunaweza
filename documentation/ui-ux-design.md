# Tunaweza platform — UI/UX design specification

**Status:** Design direction for review; no visual mockups or approved brand
assets have been supplied.

**Implementation note:** The first public-site frontend slice currently uses
Bootstrap 5 for layout and locally owned shadcn-pattern components built with
Radix UI, CVA, and Lucide React. It uses project CSS rather than Tailwind
utilities to avoid introducing a second global utility/reset layer alongside
Bootstrap; this CSS strategy should be reviewed before expanding the component
system. The palette and wordmark are provisional, and the site displays a
visible design-preview notice.

## 1. Design principles

- Warm, welcoming, credible, and calm; make the organisation's work clear
  without pity-led or deficit framing.
- Prioritise families' next steps and verified information over decorative
  content.
- Use real, approved Tunaweza photography only; do not invent impact claims or
  represent generated imagery as real beneficiaries.
- Give public and CMS interfaces a shared visual language, but optimise each
  for its distinct audience and task.
- Design for WCAG 2.2 AA and lower-bandwidth mobile use from the beginning.

## 2. Brand and visual direction

- Inspect the current logo and obtain the official brand guide before finalising
  tokens or color contrast. Existing brand colors must not be guessed.
- Retain Poppins as the proposed primary typeface from the brief, subject to
  license and performance review; define a system-font fallback.
- Use a restrained palette based on approved brand colors, neutral surfaces,
  clear borders, and a distinct focus color. Verify text and non-text contrast.
- Prefer simple spacing, hierarchy, and photography to excessive gradients,
  decoration, motion, and oversized elements.
- Define tokens for color, type scale, spacing, radii, shadow, focus ring,
  z-index, and motion before building page templates.

## 3. Requested UI stack and coexistence plan

- **Bootstrap 5:** primary responsive grid and selected layout utilities; avoid
  using Bootstrap for every control.
- **shadcn/ui:** selected accessible React primitives, with component source
  owned in the project; use Radix-backed behavior where provided.
- **Icons:** Lucide React is the recommended primary icon set used by the
  shadcn ecosystem. Keep icon style, stroke, size, and accessible naming
  consistent; decorative icons are hidden from assistive technology.
- **Tailwind CSS:** needed for shadcn/ui's standard styling workflow. Scope it
  to those components or agreed utility usage; do not let its reset and global
  styles unintentionally override Bootstrap.

Before full UI implementation, build a small CSS-compatibility spike covering
Bootstrap grid, a shadcn dialog, dropdown, inputs, focus ring, breakpoints, and
production build. Explicitly decide reset/preflight behavior and import order.
Do not load Bootstrap JavaScript for controls already owned by React. Add
Font Awesome only if the organization identifies a need not met by Lucide.

## 4. Public site journeys

1. **New family:** Home → Services → service detail → how to access/enquiry →
   confirmation and contact options.
2. **Caregiver research:** Parents & caregivers → approved FAQ/resource →
   relevant service → contact.
3. **Donor/partner:** Home/About → verified impact or report → Get involved →
   confirmed instructions or partnership enquiry.
4. **Returning reader:** News & events → article/event → related approved
   service/programme or contact.

The home page should provide a concise value proposition and clear Explore
Services and Contact CTAs, then verified programme/service highlights, approved
stories/news, partners, ways to help, and accessible footer navigation.

## 5. Page templates and components

Reusable public components:

- Skip link, accessible header/navigation/mobile menu, breadcrumb
- Page title/intro, CTA, service/programme card, article/event card
- Approved quote/story, statistics (only when verified), partner strip
- Accessible pagination/search/filter, resource download
- Alert/validation/empty/error/loading states, contact form, footer

Reusable admin components:

- Responsive sidebar/top bar, breadcrumbs, page title/action area
- Data table with search/filter/pagination, status badge, empty/error states
- Form field/help/error components, editor/preview, media picker
- Review/publish panel, confirmation dialog, revision history, audit table

Avoid publishing placeholder statistics, testimonials, contact data, schedules,
or profiles. Empty public modules should be omitted until they contain approved
content; CMS empty states should explain the next action.

## 6. CMS interaction and safety

- Make save-draft, submit-for-review, approve, publish, unpublish, archive, and
  restore distinct actions with clear state feedback.
- Show current status and the actor/time for the last change; prevent
  unauthorized actions server-side.
- Use accessible, keyboard-operable confirmation dialogs for destructive or
  public-facing actions.
- Clearly distinguish internal notes from public copy.
- Display media consent/approval state and block publication when required
  review is incomplete.
- Preview public content before publication and show revision conflicts rather
  than silently overwriting.

## 7. Accessibility and responsive requirements

- Semantic landmarks, logical headings, skip link, keyboard-operable navigation,
  visible focus, labels/instructions, announced validation, and no
  color-only status.
- Dialog focus management and return-to-trigger behavior.
- Reduced-motion support and no essential hover-only interactions.
- Responsive layouts at narrow phone, tablet, laptop, and wide desktop widths;
  no horizontal page scroll at standard zoom.
- Meaningful alt text for informative approved images; empty alt for decorative
  images; captions and transcripts where appropriate.
- Test high zoom/reflow, touch target size, contrast, screen readers, and
  keyboard-only workflows.

## 8. Design approval gates

1. Verify logo, brand guide, photography rights, and language preferences.
2. Approve sitemap, navigation labels, and key family/donor journeys.
3. Review low-fidelity desktop/mobile wireframes for home, service detail,
   article, contact, and CMS dashboard.
4. Approve tokens and high-fidelity design samples.
5. Approve the Bootstrap + shadcn/Tailwind compatibility spike before
   expanding the component library.
