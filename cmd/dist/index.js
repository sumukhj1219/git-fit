#!/usr/bin/env tsx

// src/index.ts
import fetch from "node-fetch";
import { execSync } from "child_process";
import "dotenv/config";
var apiKey = process.env.COMMITGEN_API_KEY;
if (!apiKey) {
  console.error("\u274C Missing COMMITGEN_API_KEY");
  process.exit(1);
}
var diff = execSync("git diff", { encoding: "utf-8" });
var res = await fetch("https://git-fit-one.vercel.app/api/commit", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ diff })
});
var data = await res.json();
console.log("\u{1F4A1} Commit:", data);
