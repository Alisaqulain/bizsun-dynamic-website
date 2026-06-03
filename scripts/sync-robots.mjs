import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const site = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.bizsuncreative.com").replace(
  /\/$/,
  ""
);

const content = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${site}/sitemap.xml
`;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
writeFileSync(join(root, "public", "robots.txt"), content, "utf8");
console.log(`Wrote public/robots.txt (Sitemap: ${site}/sitemap.xml)`);
