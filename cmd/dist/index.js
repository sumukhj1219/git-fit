#!/usr/bin/env node

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
if (!diff.trim()) {
  console.error("\u26A0\uFE0F  No changes detected. Nothing to commit.");
  process.exit(0);
}
var res = await fetch("https://git-fit-one.vercel.app/api/trpc/cmd.generateCommit", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ input: { diff } })
});
var data = await res.json();
console.log("\u{1F4A1} Commit:", data);
