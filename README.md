# Orange Cat Media

Site for Orange Cat Media, an independent software studio. It shares its design with Kailee's portfolio site: same palette, Fredoka + DM Sans, stickers, and marquees, with orange in the lead.

Next.js (pages router) + TypeScript + CSS Modules. Every page is pre-rendered to static HTML; the only server routes are the contact form and a health check. Deploys to Railway as a standalone Docker image.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Before pushing:

```bash
npm run lint
npm run build      # also type-checks
```

Copy `.env.example` to `.env.local` to try the contact form locally.

## Content edits

Typed modules in `src/content/`:

- `studio.ts`: name, **legal name**, location, email, hero roles, stats
- `principles.ts`: "How we work"
- `services.ts`: "What we build"
- `work.ts`: portfolio rows (`kind: "client" | "studio"`)
- `faq.ts`: FAQ

Pages with their own copy:

- `src/pages/privacy.tsx`: privacy policy (bump `LAST_UPDATED` when it changes)
- `src/pages/support.tsx`: support page for app users

Stickers live in `src/assets/stickers/`. The share image is `public/og.png`.

## Contact form

`POST /api/contact` sends submissions to `CONTACT_TO_EMAIL` via [Resend](https://resend.com), with reply-to set to the visitor. It has a honeypot field and a 5-messages-per-hour-per-IP limit, and returns 503 until all three `RESEND_*`/`CONTACT_*` variables are set. This is the same setup the portfolio site uses.

`onboarding@resend.dev` only delivers to the email on your Resend account. To send from your own address, verify the studio's domain in Resend and change `CONTACT_FROM_EMAIL`.

## Railway deploy

1. Create a Railway project from this repo. Railway picks up `railway.toml` and builds the root `Dockerfile`.
2. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`.
3. Deploy. The health check is `/api/health`. The site runs on the Railway-provided URL until a custom domain is added.

Once the studio's domain is bought:

1. Add it under the service's **Settings → Networking** and create the DNS records Railway shows you.
2. Set `NEXT_PUBLIC_SITE_URL` to the full URL (`https://` plus the domain) and redeploy. It's baked in at build time for canonical and Open Graph tags; until it's set, those tags are left out.

Run the production image locally:

```bash
docker build -t orangecatmedia .
docker run --rm -p 3000:3000 --env-file .env.local orangecatmedia
```

## Apple Developer Program checklist

- `studio.legalName` in `src/content/studio.ts` matches the legal entity name on your D-U-N-S record exactly.
- The site is live on the organization's own domain. Apple checks for a public website associated with the organization.
- App Store Connect asks for a **Privacy Policy URL** and a **Support URL** for every app. Use `/privacy` and `/support`.
- Swap `studio.email` to an address on the studio's domain once it exists. It's shown on the site, the privacy policy, and the support page.

## Stack

- Next.js 16 (pages router, `output: "standalone"`), React 19, TypeScript
- CSS Modules + global tokens in `src/styles/tokens.css`
- Fonts are self-hosted from `@fontsource-variable`, so there are no third-party font requests
- Contact email via the Resend HTTP API
