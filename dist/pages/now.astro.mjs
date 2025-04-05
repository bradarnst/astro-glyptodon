import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_CJcIwMiN.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_BnmNq7v1.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<h1 id=\"what-im-doing-now\">What I’m Doing Now</h1>\n<hr>\n<p><strong>Last Updated</strong>: January 2024</p>\n<h2 id=\"professional-focus\">Professional Focus</h2>\n<ul>\n<li>Developing a comprehensive design system for a sustainable tech startup</li>\n<li>Writing a series of design process workshops for local creative professionals</li>\n<li>Consulting on brand identity for two emerging social impact organizations</li>\n</ul>\n<h2 id=\"learning--growth\">Learning &#x26; Growth</h2>\n<ul>\n<li>Diving deep into motion design and advanced animation techniques</li>\n<li>Taking an online course on inclusive design principles</li>\n<li>Exploring generative AI’s impact on creative workflows</li>\n</ul>\n<h2 id=\"personal-projects\">Personal Projects</h2>\n<ul>\n<li>Designing a limited-edition art print collection</li>\n<li>Building a small home studio for design and illustration work</li>\n<li>Developing a design mentorship program for early-career creatives</li>\n</ul>\n<h2 id=\"life--wellness\">Life &#x26; Wellness</h2>\n<ul>\n<li>Practicing daily morning sketching</li>\n<li>Training for a local half-marathon</li>\n<li>Experimenting with plant-based cooking</li>\n</ul>\n<p><em>Inspired by Derek Sivers’ <a href=\"https://nownownow.com\">nownownow</a> project</em></p>";

				const frontmatter = {"layout":"../layouts/PageLayout.astro","title":"Now","description":"What I'm focusing on now"};
				const file = "/home/brad/projects/glyptodon/src/pages/now.md";
				const url = "/now";
				function rawContent() {
					return "   \n                                   \n            \n                                       \n   \n\n# What I'm Doing Now\n\n---\n\n**Last Updated**: January 2024\n\n## Professional Focus\n\n- Developing a comprehensive design system for a sustainable tech startup\n- Writing a series of design process workshops for local creative professionals\n- Consulting on brand identity for two emerging social impact organizations\n\n## Learning & Growth\n\n- Diving deep into motion design and advanced animation techniques\n- Taking an online course on inclusive design principles\n- Exploring generative AI's impact on creative workflows\n\n## Personal Projects\n\n- Designing a limited-edition art print collection\n- Building a small home studio for design and illustration work\n- Developing a design mentorship program for early-career creatives\n\n## Life & Wellness\n\n- Practicing daily morning sketching\n- Training for a local half-marathon\n- Experimenting with plant-based cooking\n\n_Inspired by Derek Sivers' [nownownow](https://nownownow.com) project_\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"what-im-doing-now","text":"What I’m Doing Now"},{"depth":2,"slug":"professional-focus","text":"Professional Focus"},{"depth":2,"slug":"learning--growth","text":"Learning & Growth"},{"depth":2,"slug":"personal-projects","text":"Personal Projects"},{"depth":2,"slug":"life--wellness","text":"Life & Wellness"}];
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
