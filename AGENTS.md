# Horizon Properties — working notes

React + Vite single-page site. Property data lives in `src/data/properties.js`
(single source of truth; swap it for an API later without touching components).

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
- `funaction.js`, `main_js.js`, `main_js2.js` and `JS-Function1.pdf` are unrelated
  JavaScript exercise material that predates the site. They are not part of the app
  and are not served.

## Client-side state

- Saved properties: `localStorage['horizon:favorites']` (array of property ids).
- Enquiries from the contact / viewing forms: `localStorage['horizon:inquiries']`.
  These are the seams to replace with a real backend (POST endpoint + table) — the
  form and card components already call them through single helpers.

## Verifying a change

1. `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/` → `200`.
2. Confirm live source, not a prebuilt bundle: `curl -s http://localhost:3000/src/main.jsx`
   should return Vite-transformed JSX, and `/@vite/client` should be present in `/`.
3. SPA routes are served by Vite's history fallback, so deep links like
   `/properties/lakeside-modern-villa` return `200` on a hard load.
4. There is no test suite and no linter configured.
