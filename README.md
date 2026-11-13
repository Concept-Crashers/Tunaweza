# Tunaweza platform

## Planning documents

- [Software requirements and sitemap](./documentation/requirements.md)
- [System architecture](./documentation/architecture.md)
- [MongoDB data model](./documentation/database-design.md)
- [REST API specification](./documentation/api-documentation.md)
- [UI/UX and design system](./documentation/ui-ux-design.md)
- [Existing-content and migration plan](./documentation/content-migration.md)
- [Phased development plan](./documentation/development-plan.md)

## Frontend preview

The public-site frontend is the first implementation slice. It is intentionally
not connected to an API: form submissions are not sent or stored, and all
contact, service, policy, story, and impact details that require organisational
verification are visibly marked as pending. Do not deploy this preview as the
production site.

```sh
npm install
npm run dev:public
npm run build:public
npm run lint:public
```

The initial app is in [`client/public-website`](./client/public-website). The
admin frontend and backend are not implemented yet.

## Deploying the public website to Vercel

Set the Vercel project's **Root Directory** to `client/public-website`. Vercel
will use that app's `vercel.json` to serve the SPA entry point for direct visits
and refreshes on React Router routes.

All project content and design decisions remain subject to Tunaweza review.
Never add production credentials, private child/family information, or
unapproved media to this repository.
