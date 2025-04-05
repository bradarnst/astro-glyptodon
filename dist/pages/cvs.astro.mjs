import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CJcIwMiN.mjs';
import { g as getCollection } from '../chunks/_astro_content_D7z7oE1t.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_DufViF62.mjs';
import { $ as $$Layout } from '../chunks/Layout_B8SEs3Ob.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_Cdc8wilK.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://brad.nexusseven.com");
async function getStaticPaths() {
  const cvs = await getCollection("cvs");
  return cvs;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { page } = Astro2.props;
  const pageTitle = "CVs";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "data-astro-cid-w4b62asx": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "path": ["cvs"], "data-astro-cid-w4b62asx": true })} ${maybeRenderHead()}<div class="page-content" data-astro-cid-w4b62asx> <h1 data-astro-cid-w4b62asx>CVs</h1> <hr data-astro-cid-w4b62asx> <div class="posts-grid" data-astro-cid-w4b62asx> ${page.data.map((cv) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "category": cv.data.category, "title": cv.data.title, "description": cv.data.description, "publicationDate": cv.data.publicationDate, "slug": cv.data.slug, "data-astro-cid-w4b62asx": true })}`)} </div> </div> ` })} `;
}, "/home/brad/projects/glyptodon/src/pages/cvs/index.astro", void 0);

const $$file = "/home/brad/projects/glyptodon/src/pages/cvs/index.astro";
const $$url = "/cvs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
