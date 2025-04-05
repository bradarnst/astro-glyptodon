import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as renderSlot } from './astro/server_CJcIwMiN.mjs';
import { $ as $$Layout } from './Layout_B8SEs3Ob.mjs';
import { $ as $$Breadcrumbs } from './Breadcrumbs_DufViF62.mjs';

const $$Astro = createAstro("https://brad.nexusseven.com");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description, image } = Astro2.props;
  const pathname = new URL(Astro2.request.url).pathname;
  const path = pathname.split("/").filter((segment) => segment !== "");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate`${path.length > 0 && renderTemplate`${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "path": path })}`}${maybeRenderHead()}<article class="page-content"> ${title && renderTemplate`<h1>${title}</h1>`} ${title && renderTemplate`<hr>`} ${renderSlot($$result2, $$slots["default"])} </article> ` })}`;
}, "/home/brad/projects/glyptodon/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $ };
