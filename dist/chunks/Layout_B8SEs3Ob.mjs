import { b as createAstro, c as createComponent, e as addAttribute, j as renderHead, a as renderTemplate, m as maybeRenderHead, k as renderScript, r as renderComponent, d as renderSlot } from './astro/server_CJcIwMiN.mjs';
/* empty css                         */
import { C as CONFIG } from './config_7a9XyD5R.mjs';

const $$Astro$2 = createAstro("https://brad.nexusseven.com");
const $$HeadContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeadContent;
  const { title = CONFIG.site_title, description = CONFIG.description } = Astro2.props;
  return renderTemplate`<head><!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="apple-mobile-web-app-title" content="{CONFIG.site_title}"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#ffe6d8"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${CONFIG.author} | ${title}</title><meta name="title" content="{CONFIG.author} | {title}"><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title" content="{CONFIG.author} | {title}"><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL("/og-default.jpg", Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title" content="{CONFIG.author} | {title}"><meta property="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(new URL("/og-default.jpg", Astro2.url), "content")}><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml">${renderHead()}</head>`;
}, "/home/brad/projects/glyptodon/src/components/HeadContent.astro", void 0);

const $$Astro$1 = createAstro("https://brad.nexusseven.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { activeNav } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <div class="logo" data-astro-cid-3ef6ksr2> <a href="/" id="home" data-astro-cid-3ef6ksr2> <img src="/nexus7logo.svg" alt="logo" width="24" height="24" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2>
&nbsp;&gt;&nbsp;Home
</span> </a> </div> <nav class="nav" data-astro-cid-3ef6ksr2> <ul class="menu" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="/now/" data-astro-cid-3ef6ksr2>
Now
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/about/" data-astro-cid-3ef6ksr2>
About
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/posts/" data-astro-cid-3ef6ksr2>
Posts
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/finds/" data-astro-cid-3ef6ksr2>
Found
</a> </li> </ul> <div class="nav-right" data-astro-cid-3ef6ksr2> <button class="hamburger" aria-label="Toggle Menu" data-astro-cid-3ef6ksr2> <span class="line" data-astro-cid-3ef6ksr2></span> <span class="line" data-astro-cid-3ef6ksr2></span> <span class="line" data-astro-cid-3ef6ksr2></span> </button> </div> </nav> </header> ${renderScript($$result, "/home/brad/projects/glyptodon/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/brad/projects/glyptodon/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="footer-content" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>Theme created by <a href="https://www.timeaton.dev" data-astro-cid-sz7xmlte>Tim Eaton</a>.</p> </div> </footer> `;
}, "/home/brad/projects/glyptodon/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://brad.nexusseven.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = CONFIG.site_title, description = CONFIG.description, image = "/og-default.jpg" } = Astro2.props;
  return renderTemplate`<html lang="en-us"> <head>${renderComponent($$result, "HeadContent", $$HeadContent, { "title": title, "description": description, "image": image })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/brad/projects/glyptodon/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
