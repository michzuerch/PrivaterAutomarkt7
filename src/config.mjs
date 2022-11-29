export const SITE = {
	name: 'PrivaterAutomarkt7',

	origin: 'https://michzuerch.github.io/',
	basePathname: '/PrivaterAutomarkt7',
	trailingSlash: false,

	title: 'Privater Automarkt Radolfzell',
	description: '🚀 AstroWind is a free and ready to start template to make your website using Astro and Tailwind CSS.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: true,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};