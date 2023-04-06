import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://crashkonijn.com',
  integrations: [compress(), mdx(), tailwind()],
})
