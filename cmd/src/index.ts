#!/usr/bin/env tsx

import fetch from "node-fetch";
import { execSync } from "child_process";
import "dotenv/config";

const apiKey = process.env.COMMITGEN_API_KEY;

if (!apiKey) {
  console.error("❌ Missing COMMITGEN_API_KEY");
  process.exit(1);
}

const diff = execSync("git diff", { encoding: "utf-8" });

const res = await fetch("https://git-fit-one.vercel.app/api/commit", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ diff }),
});

const data = await res.json();
console.log("💡 Commit:", data);
