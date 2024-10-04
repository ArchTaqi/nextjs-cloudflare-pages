# Next.js (App Router) on Cloudflare Pages

```
pnpm create next-app
pnpm run dev
pnpm add @cloudflare/next-on-pages
pnpm add @cloudflare/workers-types
pnpm add wrangler
touch wrangler.toml
```
add below content to `wrangler.toml`

```bash
name="nextjs-cloudflare"
compatibility_flas = ["nodejs_compat"]
```
then 

```bash
pnpm run dev
pnpm run build
pnpm exec next-on-pages
pnpm exec wrangler pages deploy .vercel/output/static
```

> You must manually add the `nodejs_compat` compatibility flag from yhe Cloudflare Dashboard (Workers & Pages > [your app] > Settings > Functions > Compatibility flags) and deploy your app again.

## Add Database

```bash
pnpm exec wrangler d1 create next_cloudflare_db
pnpm exec wrangler d1 execute next_cloudflare_db --file init.sql --local
pnpm exec wrangler d1 execute next_cloudflare_db --file init.sql --remote
```

> After you first deploy the app, you must manually bind the D1 database from the Cloudflare Dashboard (Workers & Pages > [your app] > Settings > Functions > D1 Database).

> Development is done via pnpm run dev; the development environment is not the same as the production environment, deploy frequently to detect issues early.
> next-on-pages is still early stage and might have breaking changes or unexpected behavior.
> Cloudflare Pages only supports the edge runtime. You must export const runtime = "edge" from all your page.tsx files.


## References

Step-by-step Video (in English + subtitles): <https://www.youtube.com/watch?v=Fcp-Mbvh424>

Talk (in Italian): <https://www.youtube.com/watch?v=wESngFYjQWA>

Slides: <https://docs.google.com/presentation/d/1UQnAhO4VKu9hst9BBbbsT9LAz_duuJgOVVVvttYHQvI/edit?usp=sharing>

Documentation: <https://b6f0a2e0.cloudflare-docs-7ou.pages.dev/pages/framework-guides/>

Demo: <https://pollo-4.pages.dev/>

Support Channel: <https://discord.com/invite/cloudflaredev>