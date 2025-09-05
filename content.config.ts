import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        repository: 'https://github.com/marcelocampana/obsidian-notes',
        include: '**',
        exclude: ['Plantillas/**', '.content.cache.json', '.gitignore'],
        authToken: process.env.GITHUB_TOKEN
      },
      schema: z.object({
        links: z
          .array(
            z.object({
              label: z.string(),
              icon: z.string(),
              to: z.string(),
              target: z.string().optional()
            })
          )
          .optional()
      })
    })
  }
})
