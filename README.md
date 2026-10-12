# Orange Cat Media

Site for Orange Cat Media, an independent software studio. The design is a sheet of sticker-cut cards on warm cream: thick ink outlines, hard offset shadows, halftone dots, and the studio's cartoon stickers, set in Fredoka + DM Sans.

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

- `studio.ts`: name, **legal name**, domain, location, email, proof stats, marquee words
- `why.ts`: "Why clients pick Orange Cat" cards
- `work.ts`: featured project, client cards, and the studio-apps card
- `services.ts`: "What we build"
- `process.ts`: "How a project runs"
- `brief.ts`: options for the project brief form (project types, budgets, timelines, fit checklist)
- `faq.ts`: FAQ

The hero, studio bio, and section intros are written inline in their components under `src/components/`. Shared design tokens and primitives (buttons, tags, pills, section headings) live in `src/styles/tokens.css`.

Pages with their own copy:

- `src/pages/privacy.tsx`: privacy policy (bump `LAST_UPDATED` when it changes)
- `src/pages/support.tsx`: support page for app users

Stickers live in `src/assets/stickers/`. The share image is `public/og.png`.

## Contact form

The "Tell us about your project" section is a four-step brief (project, details, budget, you). It saves a draft in the visitor's browser as they go, and the last step posts everything to `POST /api/contact`.

`/api/contact` emails the brief to `CONTACT_TO_EMAIL` via [Resend](https://resend.com), with reply-to set to the visitor. It has a honeypot field (`website`) and a 5-messages-per-hour-per-IP limit, and returns 503 until all three `RESEND_*`/`CONTACT_*` variables are set.

`onboarding@resend.dev` only delivers to the email on your Resend account. Once `orangecatmedia.dev` is verified in Resend (see [Email](#email)), send from an address on the domain, e.g. `Orange Cat Media <website@orangecatmedia.dev>`.

## Railway deploy

1. Create a Railway project from this repo. Railway picks up `railway.toml` and builds the root `Dockerfile`.
2. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`.
3. Deploy. The health check is `/api/health`.
4. Attach `orangecatmedia.dev` to the service under **Settings → Networking**. The domain is registered through Railway, so Railway creates the web records itself.

Canonical and Open Graph tags use `studio.siteUrl` (`https://orangecatmedia.dev`). Set `NEXT_PUBLIC_SITE_URL` only to override it, e.g. on a staging service; it's read at build time.

## Email

Mail for `orangecatmedia.dev` is hosted on Google Workspace. The contact form sends through Resend from a separate `send.` subdomain, so the two don't conflict. All records go in the domain's DNS table in Railway (**Workspace → Domains → orangecatmedia.dev**).

Don't turn on Railway's own email forwarding for the domain: it's reported to block third-party MX records while any forwarding address exists.

### Google Workspace (receive and send as `hello@`)

| Type | Name | Value | Notes |
| --- | --- | --- | --- |
| TXT | `@` | `google-site-verification=…` | Copy from the Workspace setup wizard |
| MX | `@` | `smtp.google.com` (priority `1`) | Google's single-record MX |
| TXT | `@` | `v=spf1 include:_spf.google.com ~all` | Keep exactly one SPF record at `@` |
| TXT | `google._domainkey` | `v=DKIM1; k=rsa; p=…` | Generate in Admin console → Apps → Google Workspace → Gmail → Authenticate email, then click **Start authentication** |
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:hello@orangecatmedia.dev` | Monitor first; tighten to `p=quarantine` once reports look clean |

One paid seat is enough: make the user account `kailee@orangecatmedia.dev` and add `hello@orangecatmedia.dev` as a free alias.

### Resend (contact form)

Add `orangecatmedia.dev` under Resend → **Domains** and copy the records it shows: an MX and an SPF TXT on the `send` subdomain, and a DKIM TXT at `resend._domainkey`. Once Resend shows the domain as verified, set on Railway:

- `CONTACT_TO_EMAIL=hello@orangecatmedia.dev`
- `CONTACT_FROM_EMAIL=Orange Cat Media <website@orangecatmedia.dev>`

Run the production image locally:

```bash
docker build -t orangecatmedia .
docker run --rm -p 3000:3000 --env-file .env.local orangecatmedia
```

## Apple Developer Program checklist

- `studio.legalName` in `src/content/studio.ts` matches the legal entity name on your D-U-N-S record exactly.
- The site is live at `https://orangecatmedia.dev`. Apple checks for a public website associated with the organization.
- `hello@orangecatmedia.dev` receives mail before the site goes live. It's shown on the site, the privacy policy, and the support page.
- App Store Connect asks for a **Privacy Policy URL** and a **Support URL** for every app: `https://orangecatmedia.dev/privacy` and `https://orangecatmedia.dev/support`.

## Stack

- Next.js 16 (pages router, `output: "standalone"`), React 19, TypeScript
- CSS Modules + global tokens in `src/styles/tokens.css`
- Fonts are self-hosted from `@fontsource-variable`, so there are no third-party font requests
- Contact email via the Resend HTTP API
