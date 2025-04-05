import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, e as addAttribute } from './astro/server_CJcIwMiN.mjs';
/* empty css                         */

const $$Astro = createAstro("https://brad.nexusseven.com");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { path } = Astro2.props;
  function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb" class="breadcrumbs" data-astro-cid-ilhxcym7> <ol data-astro-cid-ilhxcym7> <li data-astro-cid-ilhxcym7><a href="/" data-astro-cid-ilhxcym7>Home</a></li> ${path.map((item, index) => renderTemplate`<li data-astro-cid-ilhxcym7> ${index === path.length - 1 ? renderTemplate`<span aria-current="page" data-astro-cid-ilhxcym7>${ucFirst(item)}</span>` : renderTemplate`<a${addAttribute(`/${path.slice(0, index + 1).join("/")}`, "href")} data-astro-cid-ilhxcym7>${ucFirst(item)}</a>`} </li>`)} </ol> </nav> `;
}, "/home/brad/projects/glyptodon/src/components/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
