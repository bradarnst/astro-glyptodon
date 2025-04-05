import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_CJcIwMiN.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_D7z7oE1t.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_DufViF62.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B8SEs3Ob.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

const $$Astro = createAstro("https://brad.nexusseven.com");
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.data.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "description": post.data.description, "data-astro-cid-gysqo7gh": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "path": ["posts", post.data.title], "data-astro-cid-gysqo7gh": true })} ${maybeRenderHead()}<article class="page-content" data-astro-cid-gysqo7gh> <header class="post-header" data-astro-cid-gysqo7gh> <h1 data-astro-cid-gysqo7gh>${post.data.title}</h1> <hr data-astro-cid-gysqo7gh> <div class="post-meta" data-astro-cid-gysqo7gh> <time${addAttribute(post.data.publicationDate.toISOString(), "datetime")} data-astro-cid-gysqo7gh> ${formatDate(post.data.publicationDate)} </time> ${post.data.category && renderTemplate`<span class="category" data-astro-cid-gysqo7gh>${post.data.category}</span>`}
By ${post.data.author} </div> </header> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-gysqo7gh": true })} </article> ` })} `;
}, "/home/brad/projects/glyptodon/src/pages/posts/[slug].astro", void 0);

const $$file = "/home/brad/projects/glyptodon/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
