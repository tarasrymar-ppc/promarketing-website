# PRO Marketing# Production Checklist

## GitHub

- [ ] Confirm `.env` is ignored and not committed.
- [ ] Confirm `.env.example` is committed with variable names only.
- [ ] Run `git status --short` and review changed files before commit.
- [ ] Commit the website changes to `main`.
- [ ] Push `main` to `origin` (`tarasrymar-ppc/promarketing-website`).

## Vercel

- [ ] Import `tarasrymar-ppc/promarketing-website` from GitHub.
- [ ] Keep Framework Preset as Next.js.
- [ ] Keep Root Directory as repository root because this repo already points to the `website` folder.
- [ ] Add the production environment variables before first production deploy.
- [ ] Deploy and open the generated Vercel URL before connecting the final domain.

## Environment

- [ ] Add `TELEGRAM_BOT_TOKEN` to hosting environment variables.
- [ ] Add `TELEGRAM_CHAT_ID` to hosting environment variables.
- [ ] Add `NEXT_PUBLIC_GTM_ID=GTM-5NC4V5B3` to hosting environment variables.
- [ ] Confirm `.env` is not committed and secrets are only stored in hosting settings.

## Domain And HTTPS

- [ ] Connect `promarketing-agency.com.ua` to the hosting provider.
- [ ] Enable HTTPS certificate.
- [ ] Configure redirect from `http://` to `https://`.
- [ ] Decide whether `www.promarketing-agency.com.ua` redirects to the non-www domain.
- [ ] Test `/uk`, `/en`, `/sitemap.xml`, `/robots.txt`, and `/api/leads` on production.

## Telegram Leads

- [ ] Submit a test lead from homepage.
- [ ] Submit a test lead from `/uk/contact`.
- [ ] Submit a test lead from `/uk/services/google-ads`.
- [ ] Submit a test lead from `/uk/services/meta-ads`.
- [ ] Submit a test lead from `/uk/services/smm`.
- [ ] Confirm every lead arrives in the correct Telegram chat.

## Google Tag Manager

- [ ] Open GTM Preview mode for the production domain.
- [ ] Accept cookies on `/uk` and confirm the GTM container loads only after consent.
- [ ] Reject cookies on `/en` and confirm the GTM container does not load.
- [ ] Confirm `form_submitted` fires after successful lead submission.
- [ ] Confirm `form_submission_failed` fires if submission fails.
- [ ] Confirm click events fire: `cta_clicked`, `phone_clicked`, `email_clicked`, `social_clicked`, `map_clicked`, `service_link_clicked`.
- [ ] In GTM, create GA4/Facebook/Google Ads tags using these dataLayer events.
- [ ] Publish the GTM container after preview validation.

## SEO

- [ ] Confirm canonical URLs use `https://promarketing-agency.com.ua`.
- [ ] Confirm `/uk` canonical points to `/uk` and `/en` canonical points to `/en`.
- [ ] Submit `https://promarketing-agency.com.ua/sitemap.xml` in Google Search Console.
- [ ] Inspect `/uk`, `/en`, `/uk/contact`, and service pages in Search Console URL Inspection.
- [ ] Run Google Rich Results Test for `/uk/faq` and service pages.
- [ ] Confirm `robots.txt` references the production sitemap.

## Legal And Trust

- [ ] Review `/uk/privacy` and `/en/privacy` copy before launch.
- [ ] Confirm footer privacy link works.
- [ ] Confirm the cookie consent banner appears on first visit in Ukrainian and English.
- [ ] Confirm the cookie choice can be reopened from `/uk/privacy` and `/en/privacy`.
- [ ] Confirm contact phone, email, and address are correct.

## Final Build

- [ ] Run `npm run build`.
- [ ] Run `npm audit --audit-level=low`.
- [ ] Deploy only after both checks pass.
