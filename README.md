# Interactive Workers – Landing Services

A single [Next.js](https://nextjs.org) application that serves **5 landing sites**, one per subdomain. Each subdomain targets a different industry (or the general services offering) and is routed to its own folder inside `app/`.

## Services & Subdomains

| # | Subdomain | Internal route | Description |
|---|-----------|----------------|-------------|
| 1 | `services` | `app/services` | General services landing page and "Who we are" page |
| 2 | `homecare` | `app/homecare` | Landing for home care agencies |
| 3 | `insurance` | `app/insurance` | Landing for insurance agencies |
| 4 | `lawfirms` | `app/lawfirms` | Landing for law firms |
| 5 | `privatesecurity` | `app/privatesecurity` | Landing for private security companies |

Examples:

- `homecare.interactiveworkers.com`
- `homecare.iw-services.vercel.app`

The industry sites (`homecare`, `insurance`, `lawfirms`, `privatesecurity`) each include:

- `page.tsx` – the main landing page
- `how-it-works/page.tsx` – the "How it works" page
- `layout.tsx` and `colors.css` – the layout and color theme for that service

## How Subdomain Routing Works

Routing is handled by [proxy.ts](proxy.ts):

1. The subdomain is read from the request host (e.g. `homecare` from `homecare.interactiveworkers.com`).
2. If it is one of the 5 allowed subdomains, the request is internally rewritten to `/<subdomain>/<path>`.
3. The root domain and any unknown subdomain are rewritten to the not-found page.
4. Next.js internals (`/_next`), `/api` routes and static files are ignored.

To add a new service, create a new folder in `app/`, then add its name to `ALLOWED_SUBDOMAINS` in [proxy.ts](proxy.ts).

## Shared Code

- `components/` – components shared across all services
- `app/faq.ts`, `app/reviews.ts` – shared FAQ and reviews data
- `app/api/stream` – API route (not subdomain-routed)
