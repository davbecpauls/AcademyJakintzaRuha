import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// If DATABASE_URL is not set, consumers should avoid importing db/sql
export const sql = process.env.DATABASE_URL
  ? neon(process.env.DATABASE_URL)
  : undefined;

export const db = sql ? drizzle(sql) : undefined;
