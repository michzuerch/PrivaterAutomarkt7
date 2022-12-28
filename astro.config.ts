import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
import { remarkReadingTime } from './src/utils/frontmatter.js'
import { SITE } from './src/config'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	// Astro uses this full URL to generate your sitemap and canonical URLs in your final build
	site: SITE.origin,
	base: SITE.basePathname,
	trailingSlash: SITE.trailingSlash ? 'always' : 'never',
	output: 'static',
	server: { port: 3000, host: true },
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: true
			}
		}),
		sitemap(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		}),
		mdx(),
		compress({
			css: false,
			html: false,
			img: false,
			js: false,
			svg: false
		})
	],
	markdown: {
		remarkPlugins: [remarkReadingTime],
		extendDefaultPlugins: true
	},
	vite: {
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src')
			}
		}
	}
})
