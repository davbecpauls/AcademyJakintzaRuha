# AcademyJakintzaRuha – Deploy


Local dev

```bash
npm run dev        # Express + Vite middleware on port 5000
# or
npm run build && PORT=5000 NODE_ENV=production npm run start
```

Health check
- Express: `GET /api/health` -> `{ ok: true, db: true }`
