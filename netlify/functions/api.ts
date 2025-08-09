import { neon } from "@neondatabase/serverless";
import { insertUserSchema } from "../../shared/schema";
import { z } from "zod";

// Simple router for /api/*
export const handler = async (event: any) => {
  const path: string = event.path || "/";
  const method: string = (event.httpMethod || "GET").toUpperCase();
  const query: Record<string, string | undefined> = event.queryStringParameters || {};
  try {
    // Health check at /api/health
    if (path.endsWith("/health")) {
      const hasDb = Boolean(process.env.DATABASE_URL);
      if (hasDb) {
        const sql = neon(process.env.DATABASE_URL!);
        await sql`select 1`;
      }
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ok: true, db: Boolean(process.env.DATABASE_URL) }),
      };
    }

    // Users routes
    // Helper to extract subpath after /api
    const subPath = (() => {
      const idx = path.indexOf("/api");
      return idx >= 0 ? path.slice(idx + 4) || "/" : path;
    })();

    // POST /api/users -> create user
    if (method === "POST" && subPath === "//users".replace("//", "/")) {
      if (!process.env.DATABASE_URL) {
        return {
          statusCode: 500,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "DATABASE_URL not configured" }),
        };
      }

      const bodyText = event.body || "{}";
      const json = JSON.parse(bodyText);
      const parsed = insertUserSchema.safeParse(json);
      if (!parsed.success) {
        return {
          statusCode: 400,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "Invalid input", issues: parsed.error.issues }),
        };
      }

      const { username, password } = parsed.data;
      const sql = neon(process.env.DATABASE_URL);
      try {
        const rows = (await sql`
          insert into users (username, password)
          values (${username}, ${password})
          returning id, username
        `) as any[];

        const user = rows[0];
        return {
          statusCode: 201,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        };
      } catch (e: any) {
        // Unique violation
        if (e?.code === "23505") {
          return {
            statusCode: 409,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Username already exists" }),
          };
        }
        throw e;
      }
    }

    // GET /api/users/:id -> fetch user by id
    const usersIdMatch = subPath.match(/^\/users\/(.+)$/);
    if (method === "GET" && usersIdMatch) {
      if (!process.env.DATABASE_URL) {
        return {
          statusCode: 500,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "DATABASE_URL not configured" }),
        };
      }
      const id = usersIdMatch[1];
      const sql = neon(process.env.DATABASE_URL);
  const rows = (await sql`
        select id, username from users where id = ${id} limit 1
  `) as any[];
      const user = rows[0];
      if (!user) {
        return {
          statusCode: 404,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "User not found" }),
        };
      }
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      };
    }

    // GET /api/users?username=... -> fetch by username
    if (method === "GET" && subPath === "/users" && query.username) {
      if (!process.env.DATABASE_URL) {
        return {
          statusCode: 500,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "DATABASE_URL not configured" }),
        };
      }
      const sql = neon(process.env.DATABASE_URL);
  const rows = (await sql`
        select id, username from users where username = ${query.username} limit 1
  `) as any[];
      const user = rows[0] || null;
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      };
    }

  // 404 for unhandled routes
    return {
      statusCode: 404,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Not found" }),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: err?.message || "Internal Error" }),
    };
  }
};
