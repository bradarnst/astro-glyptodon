import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CJcIwMiN.mjs';
import { $ as $$Layout } from '../chunks/Layout_B8SEs3Ob.mjs';
import { C as CONFIG } from '../chunks/config_7a9XyD5R.mjs';
import { g as getCollection } from '../chunks/_astro_content_D7z7oE1t.mjs';
import { $ as $$LinkCard } from '../chunks/LinkCard_D7R7RAjW.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_Cdc8wilK.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts", ({ data }) => {
    return data.public !== false;
  })).sort((a, b) => b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf()).slice(0, 5);
  const finds = (await getCollection("finds", ({ data }) => {
    return data.public !== false;
  })).sort((a, b) => b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf()).slice(0, 10);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="hero" data-astro-cid-j7pv25f6> <div id="hero-title" data-astro-cid-j7pv25f6> <img src="/brad-avatar1.png" alt="Brad avatar" width="128" height="128" data-astro-cid-j7pv25f6> <div style="font-weight: 500;" data-astro-cid-j7pv25f6> <h1 class="font-heading" style="margin:0;" data-astro-cid-j7pv25f6>${CONFIG.author}</h1> <div id="subtitle" data-astro-cid-j7pv25f6>Senior IT Architect | Driving Innovation, Transformation, Strategy and Engineering Excellence</div> </div> </div> <p data-astro-cid-j7pv25f6>
Strategic and hands-on IT Architect with expertise in enterprise architecture, solutions architecture, and digital transformation. Deep experience in global integrations and transformations. Adept at leading architecture strategy, system integration, digital transformation, devops initiatives and cloud modernization. Proven success in large-scale transformations. A wealth of experience in API strategy, API-driven architectures and microservices. Strong ability to collaborate across engineering, business, and executive teams to align technology with business goals. Experience working across startups, enterprises, and global organizations. Industries include: banking, finance, retail, energy, oil & gas, logistics, auto, technology.
</p> <p data-astro-cid-j7pv25f6>I'm also available for new projects and collaborations. Whatever you're looking for, I'd love to discuss it with you. Email me to start a conversation!
</p> <ul id="action-links" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6><a href="mailto:brad@nexusseven.com" data-astro-cid-j7pv25f6>Email</a></li> <li data-astro-cid-j7pv25f6><a href="https://github.com/bradarnst" data-astro-cid-j7pv25f6>Github</a></li> <li data-astro-cid-j7pv25f6><a href="https://app.daily.dev/bradleyarnst" data-astro-cid-j7pv25f6>daily.dev</a></li> <li data-astro-cid-j7pv25f6><a href="https://www.linkedin.com/in/bradarnst/" data-astro-cid-j7pv25f6>LinkedIn</a></li> <li data-astro-cid-j7pv25f6><a href="https://bsky.app/profile/bradleyarnst.bsky.social" data-astro-cid-j7pv25f6>Bluesky</a></li> </ul> </section> <hr data-astro-cid-j7pv25f6> <section id="skills" data-astro-cid-j7pv25f6> <h2 class="font-heading" data-astro-cid-j7pv25f6>Expertise Highlights</h2> <ul class="pill-list" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>Architecture</li> <li data-astro-cid-j7pv25f6>API Strategy</li> <li data-astro-cid-j7pv25f6>Integration</li> <li data-astro-cid-j7pv25f6>Transformation</li> <li data-astro-cid-j7pv25f6>Security</li> <li data-astro-cid-j7pv25f6>Identity</li> <li data-astro-cid-j7pv25f6>Cloud</li> <li data-astro-cid-j7pv25f6>DevOps</li> <li data-astro-cid-j7pv25f6>Leadership</li> <li data-astro-cid-j7pv25f6>Consulting</li> <li data-astro-cid-j7pv25f6>Modelling</li> <li data-astro-cid-j7pv25f6>Data</li> <li data-astro-cid-j7pv25f6>Agile</li> <li data-astro-cid-j7pv25f6>Project Management</li> <li data-astro-cid-j7pv25f6>Delivery</li> </ul> </section> <hr data-astro-cid-j7pv25f6> <section id="recent-posts" class="posts-section" data-astro-cid-j7pv25f6> <h2 class="font-heading" data-astro-cid-j7pv25f6>Latest Posts</h2> <div class="posts-grid" data-astro-cid-j7pv25f6> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "title": post.data.title, "description": post.data.description, "publicationDate": post.data.publicationDate, "category": post.data.category, "slug": post.data.slug, "data-astro-cid-j7pv25f6": true })}`)} <div style="display: flex; align-items: center; justify-content: center;" data-astro-cid-j7pv25f6> <a href="/posts" class="button-primary" data-astro-cid-j7pv25f6>View all posts →</a> </div> </div> </section> <section id="finds" data-astro-cid-j7pv25f6> <h2 class="font-heading" data-astro-cid-j7pv25f6>Interesting Finds...</h2> <div class="finds-box" data-astro-cid-j7pv25f6> ${finds.map((entry) => renderTemplate`${renderComponent($$result2, "LinkCard", $$LinkCard, { "type": entry.data.type, "title": entry.data.title, "publicationDate": entry.data.publicationDate, "description": entry.data.description, "link": entry.data.link, "data-astro-cid-j7pv25f6": true })}`)} </div> </section>  ` })}`;
}, "/home/brad/projects/glyptodon/src/pages/index.astro", void 0);

const $$file = "/home/brad/projects/glyptodon/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
