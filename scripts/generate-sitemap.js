#!/usr/bin/env node
// Sitemap generator for Jëftech
// Run with: node scripts/generate-sitemap.js

import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://jeftech.dev';
const TODAY = new Date().toISOString().split('T')[0];

// Define all public URLs
const urls = [
  {
    url: BASE_URL + '/',
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: 1.0,
  },
  // Service pages (planned - will be created as separate pages or anchor sections)
  {
    url: BASE_URL + '/services',
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: BASE_URL + '/services/developpement-web',
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: BASE_URL + '/services/applications-web',
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: BASE_URL + '/services/applications-mobiles',
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: BASE_URL + '/services/logiciels-sur-mesure',
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: BASE_URL + '/services/transformation-digitale',
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.7,
  },
  // Other main pages
  {
    url: BASE_URL + '/a-propos',
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: BASE_URL + '/realisations',
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    url: BASE_URL + '/blog',
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: 0.7,
  },
  {
    url: BASE_URL + '/contact',
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    url: BASE_URL + '/rendez-vous',
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.6,
  },
];

function generateSitemap() {
  const urlEntries = urls.map(({ url, lastmod, changefreq, priority }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;

  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  console.log(`✅ Sitemap generated at ${outputPath}`);
  console.log(`📄 ${urls.length} URLs included`);
}

generateSitemap();