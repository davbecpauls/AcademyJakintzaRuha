# AcademyJakintzaRuha – Deploy

Frontend: Netlify (static)
- Build command: `npm run build`
- Publish directory: `dist/public`
- Functions directory: `netlify/functions` (routes `/api/*` to functions in Netlify-only deployments)

Backend: Render (Node/Express)
- Start command: `npm run start`
- Environment:
  - `NODE_ENV=production`
  - `PORT` (Render sets it automatically)
  - `DATABASE_URL` (Neon Postgres connection string)
  - `CORS_ORIGIN` (comma-separated list; e.g. `https://<your-netlify-site>.netlify.app,https://<your-domain>`)
  - `SERVE_STATIC=false` (Render backend only; Netlify serves static assets)

Local dev
```bash
npm run dev        # Express + Vite middleware on port 5000
# or
npm run build && PORT=5000 NODE_ENV=production npm run start
```

Health check
- Express: `GET /api/health` -> `{ ok: true, db: true }`
- Netlify Functions: `GET /.netlify/functions/api/health` or `/api/health` via redirect on Netlify
