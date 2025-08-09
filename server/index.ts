import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Minimal CORS for Render backend; set CORS_ORIGIN to your Netlify URL (comma-separated allowed)
app.use((req, res, next) => {
  const allowed = (process.env.CORS_ORIGIN || "").split(/[,\s]+/).filter(Boolean);
  const origin = req.headers.origin as string | undefined;

  const isAllowedOrigin = (o?: string) => {
    if (!o || allowed.length === 0) return false;
    return allowed.some((pattern) => {
      if (pattern === o) return true; // exact match
      if (pattern.includes("*")) {
        // convert wildcard to regex, escape dots
        const esc = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\*/g, ".*");
        const re = new RegExp(`^${esc}$`);
        return re.test(o);
      }
      return false;
    });
  };

  if (isAllowedOrigin(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin!);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Headers",
      (req.headers["access-control-request-headers"] as string) || "Content-Type, Authorization",
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      (req.headers["access-control-request-method"] as string) || "GET,POST,PUT,PATCH,DELETE,OPTIONS",
    );
  }

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    const shouldServeStatic = process.env.SERVE_STATIC === "true";
    if (shouldServeStatic) {
      try {
        // only serve static if dist/public exists
        const distPublic = new URL("./public", import.meta.url).pathname.replace(/\/server\/$/, "/server/");
        if (fs.existsSync(new URL("./public", import.meta.url))) {
          serveStatic(app);
        }
      } catch {
        // ignore if not present
      }
    }
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
