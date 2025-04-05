import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_CJcIwMiN.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_BnmNq7v1.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<h1 id=\"about-jane\">About Jane</h1>\n<hr>\n<p>I’m a graphic designer who believes design is more than just pretty pictures—it’s visual storytelling with purpose.</p>\n<h2 id=\"my-journey\">My Journey</h2>\n<p>My love for design started in my college dorm room, where I’d spend hours tinkering with typography and color palettes. What began as a hobby quickly became a passion, and now it’s my career. I’ve been fortunate to work with clients ranging from scrappy startups to established brands, each project teaching me something new.</p>\n<h2 id=\"what-i-do\">What I Do</h2>\n<p>My design philosophy is simple: great design solves problems while delighting the eye. I specialize in:</p>\n<ul>\n<li>Brand identity design</li>\n<li>Digital illustrations</li>\n<li>User interface design</li>\n<li>Visual storytelling</li>\n</ul>\n<h2 id=\"beyond-the-screen\">Beyond the Screen</h2>\n<p>When I’m not designing, you’ll find me:</p>\n<ul>\n<li>Hunting for vintage design books</li>\n<li>Experimenting with watercolor painting</li>\n<li>Exploring local coffee shops with my sketchbook</li>\n<li>Listening to design podcasts (total design nerd alert!)</li>\n</ul>\n<h2 id=\"lets-connect\">Let’s Connect</h2>\n<p>Want to chat design, collaborate, or just share a good coffee recommendation? Drop me a line. I’m always excited to meet fellow creatives and explore new design adventures.</p>";

				const frontmatter = {"layout":"../layouts/PageLayout.astro","title":"About","description":"About Me"};
				const file = "/home/brad/projects/glyptodon/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "   \n                                   \n              \n                       \n   \n\n# About Jane\n\n---\n\nI'm a graphic designer who believes design is more than just pretty pictures—it's visual storytelling with purpose.\n\n## My Journey\n\nMy love for design started in my college dorm room, where I'd spend hours tinkering with typography and color palettes. What began as a hobby quickly became a passion, and now it's my career. I've been fortunate to work with clients ranging from scrappy startups to established brands, each project teaching me something new.\n\n## What I Do\n\nMy design philosophy is simple: great design solves problems while delighting the eye. I specialize in:\n\n- Brand identity design\n- Digital illustrations\n- User interface design\n- Visual storytelling\n\n## Beyond the Screen\n\nWhen I'm not designing, you'll find me:\n\n- Hunting for vintage design books\n- Experimenting with watercolor painting\n- Exploring local coffee shops with my sketchbook\n- Listening to design podcasts (total design nerd alert!)\n\n## Let's Connect\n\nWant to chat design, collaborate, or just share a good coffee recommendation? Drop me a line. I'm always excited to meet fellow creatives and explore new design adventures.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"about-jane","text":"About Jane"},{"depth":2,"slug":"my-journey","text":"My Journey"},{"depth":2,"slug":"what-i-do","text":"What I Do"},{"depth":2,"slug":"beyond-the-screen","text":"Beyond the Screen"},{"depth":2,"slug":"lets-connect","text":"Let’s Connect"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$PageLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
