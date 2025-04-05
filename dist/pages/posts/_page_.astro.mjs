import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CJcIwMiN.mjs';
import { g as getCollection } from '../../chunks/_astro_content_D7z7oE1t.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_DufViF62.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B8SEs3Ob.mjs';
import { $ as $$PostCard } from '../../chunks/PostCard_Cdc8wilK.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_DgA5Kd1r.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://brad.nexusseven.com");
async function getStaticPaths({ paginate }) {
  const posts = (await getCollection("posts")).filter((post) => post.data.public).sort((a, b) => b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf());
  return paginate(posts, { pageSize: 10 });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const pageTitle = page.currentPage === 1 ? "Blog Posts" : `Blog Posts - Page ${page.currentPage}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "data-astro-cid-6pawvvaf": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "path": ["posts"], "data-astro-cid-6pawvvaf": true })} ${maybeRenderHead()}<div class="page-content" data-astro-cid-6pawvvaf> <h1 data-astro-cid-6pawvvaf>Blog Posts</h1> <hr data-astro-cid-6pawvvaf> <div class="posts-grid" data-astro-cid-6pawvvaf> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "category": post.data.category, "title": post.data.title, "description": post.data.description, "publicationDate": post.data.publicationDate, "slug": post.data.slug, "data-astro-cid-6pawvvaf": true })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": page.currentPage, "totalPages": page.lastPage, "baseUrl": "/posts/", "data-astro-cid-6pawvvaf": true })} </div> ` })} `;
}, "/home/brad/projects/glyptodon/src/pages/posts/[page].astro", void 0);

const $$file = "/home/brad/projects/glyptodon/src/pages/posts/[page].astro";
const $$url = "/posts/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
