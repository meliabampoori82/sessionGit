# Apex Motors — working notes

Premium automotive dealership site. React + Vite single-page app. Vehicle data lives
in `src/data/vehicles.js` and site copy/nav in `src/data/site.js` — both are the
single source of truth (swap them for an API later without touching components).

## Running it

```bash
docker compose -f docker-compose.base44.yml up -d --build
docker compose -f docker-compose.base44.yml logs -f web
```

Web entry point: host port **3000** (`vite dev`). Healthcheck probes `/` with `fetch`.

## Things that are easy to get wrong

- **Dependencies install at container start**, from the bind-mounted source tree
  (`npm install` in the compose `command:`), not in the image. There is no repo
  Dockerfile. Adding a dependency means editing `package.json` and restarting the
  service — not rebuilding an image by hand.
- **`node_modules/` lives in the bind mount.** It is gitignored; do not delete it
  while the container is running, and do not run two installers concurrently.
- **Host allowlisting is sandbox-gated.** `vite.config.js` appends
  `.${BASE44_SANDBOX_HOST_DOMAIN}` to `server.allowedHosts` only when
  `BASE44_PREVIEW_MODE === '1'`; with the variable unset Vite keeps its own default
  allowlist. The compose file passes `BASE44_PREVIEW_MODE`,
  `BASE44_SANDBOX_HOST_DOMAIN` and `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` through.
  Do not hardcode a resolved host into any file.
- **File watching uses polling** (`server.watch.usePolling`) because bind mounts do
  not deliver native file events reliably.
- **HMR plus `hidden` attributes.** The mobile menu and the modals are mounted with
  the `hidden` attribute; `.mobile-menu` sets `display: flex`, so the
  `.mobile-menu[hidden] { display: none }` rule in `components.css` is load-bearing.
  Removing it makes the menu cover the whole site.
- After a batch of file additions/deletions, Vite's HMR can end up with a stale
  module graph (context providers and their consumers in different instances, which
  throws "must be used within FavoritesProvider"). A full page reload fixes it — it
  is not an application bug.
- `funaction.js`, `main_js.js`, `main_js2.js` and `JS-Function1.pdf` are unrelated
  JavaScript exercise material that predates the site. They are not part of the app
  and are not served.

## Client-side state

There is no backend in this project. Everything is local and the UI says so:

- Saved vehicles: `localStorage['apex:favorites']` (array of vehicle ids).
- Test drive requests: `localStorage['apex:test-drives']` — the confirmation states
  plainly that nothing was sent to a dealership and no appointment was booked.
- Contact enquiries: `localStorage['apex:enquiries']` — same honest wording.

These are the seams to replace with a real backend (POST endpoint + tables). Forms
and cards already go through single helper components, so swapping the storage calls
is enough.

## Demo content

Inventory, prices, specifications, team and contact details are sample content
(`inventoryNote` in `src/data/vehicles.js`, `site.demoNotice` in `src/data/site.js`).
Do not present them as real availability. Photography is served from
`images.unsplash.com` and is illustrative, not a photograph of each exact car.

## Verifying a change

1. `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/` → `200`.
2. Confirm live source, not a prebuilt bundle: `curl -s http://localhost:3000/src/main.jsx`
   should return Vite-transformed JSX, and `/@vite/client` should be present in `/`.
3. SPA routes are served by Vite's history fallback, so deep links like
   `/inventory/porsche-911-carrera` return `200` on a hard load.
4. There is no test suite and no linter configured.
