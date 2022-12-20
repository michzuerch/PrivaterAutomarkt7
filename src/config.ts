export const SITE = {
	name: 'PrivaterAutomarkt7',

	origin: 'https://michzuerch.github.io/',
	basePathname: '/PrivaterAutomarkt7',
	trailingSlash: true,

	title: 'Privater Automarkt Radolfzell',
	description: 'An- und Verkauf von Fahrzeugen in Radolfzell',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M'
}

export const BLOG = {
	disabled: true,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog' // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '' // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category' // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag' // set empty to change from /tag/some-tag to /some-tag
	}
}
