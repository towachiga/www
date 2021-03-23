const fs = require("fs");
const path = require("path");
const { format } = require("date-fns");
const { exec } = require("child_process");

const slug = process.argv[2];
if (!slug) {
  console.log("No slug input: use date as filename");
}

const date = new Date();
const yaml = `---
date: "${format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx")}"
title: ""
---
`;
const filename = slug
  ? `${slug}.md`
  : `${format(new Date(), "yyyyMMdd-HHmmss")}.md`;
const dest = path.join(process.cwd(), "posts", filename);
fs.writeFileSync(dest, yaml);
exec(`open ${dest}`);