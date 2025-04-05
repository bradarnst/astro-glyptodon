import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CJcIwMiN.mjs';
import { g as getCollection } from '../../chunks/_astro_content_D7z7oE1t.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_DufViF62.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B8SEs3Ob.mjs';
import { $ as $$LinkCard } from '../../chunks/LinkCard_D7R7RAjW.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_DgA5Kd1r.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://brad.nexusseven.com");
async function getStaticPaths({ paginate }) {
  const allFinds = await getCollection("finds");
  const finds = allFinds.filter((find) => find.data.public).sort((a, b) => b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf());
  const pages = paginate(finds, { pageSize: 40 });
  return pages;
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const pageTitle = page.currentPage === 1 ? "Today I Found..." : `Today I Found... - Page ${page.currentPage}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "data-astro-cid-76vgkisn": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-content" data-astro-cid-76vgkisn> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "path": ["Found"], "data-astro-cid-76vgkisn": true })} <h1 data-astro-cid-76vgkisn>Today I Found...</h1> <hr data-astro-cid-76vgkisn> <div class="finds-grid" data-astro-cid-76vgkisn> ${page.data.map((find) => renderTemplate`${renderComponent($$result2, "LinkCard", $$LinkCard, { "type": find.data.type, "title": find.data.title, "description": find.data.description, "link": find.data.link, "publicationDate": find.data.publicationDate, "data-astro-cid-76vgkisn": true })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": page.currentPage, "totalPages": page.lastPage, "baseUrl": "/finds/", "data-astro-cid-76vgkisn": true })} </div> ` })} `;
}, "/home/brad/projects/glyptodon/src/pages/finds/[page].astro", void 0);

const $$file = "/home/brad/projects/glyptodon/src/pages/finds/[page].astro";
const $$url = "/finds/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
