import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const previewMode = process.env.BASE44_PREVIEW_MODE === '1';
const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN;

// The preview proxy reaches the dev server as `<port>-<sandbox id>.<sandbox domain>`.
// Extend the host allowlist only inside the sandbox (BASE44_PREVIEW_MODE === "1");
// with the flag unset Vite keeps its own default allowlist.
const allowedHosts = [];
if (previewMode && sandboxDomain) {
  allowedHosts.push(`.${sandboxDomain}`);
}
for (const host of (process.env.__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS || '').split(',')) {
  const trimmed = host.trim();
  if (trimmed) allowedHosts.push(trimmed);
}

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: allowedHosts.length ? allowedHosts : undefined,
    // Bind-mounted source: native file events are unreliable, so poll.
    watch: { usePolling: true, interval: 300 },
  },
});
