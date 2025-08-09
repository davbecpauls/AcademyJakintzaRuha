import type { Express } from "express";
import { createServer, type Server } from "http";
import { activeStorage as storage } from "./storage";
import { insertUserSchema } from "@shared/schema";
import { db } from "./db";
import { sql as dsql } from "drizzle-orm";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api
  app.post("/api/users", async (req, res, next) => {
    try {
      const parsed = insertUserSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid input", issues: parsed.error.issues });
      }
      const user = await storage.createUser(parsed.data);
      res.status(201).json({ id: user.id, username: user.username });
    } catch (e) {
      next(e);
    }
  });

  app.get("/api/users/:id", async (req, res, next) => {
    try {
      const user = await storage.getUser(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json({ id: user.id, username: user.username });
    } catch (e) {
      next(e);
    }
  });
  app.get("/api/health", async (_req, res) => {
    try {
      let dbStatus = false;
      let errorMsg = undefined;
      if (db) {
        try {
          await db.execute(dsql`select 1`);
          dbStatus = true;
        } catch (err: any) {
          errorMsg = err?.message || String(err);
        }
      }
      res.json({ ok: true, db: dbStatus, error: errorMsg });
    } catch (e: any) {
      res.status(500).json({ ok: false, message: e?.message || "health check failed" });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
