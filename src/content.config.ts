import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/portfolio" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      contexto: z.string().optional(),
      diseño: z.string().optional(),
      desarrollo: z.array(z.string()).default([]),
      resultado: z.string().optional(),
      pubDate: z.coerce.date(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      urlWeb: z.string().url().optional(),
      draft: z.boolean().default(false),
    }),
});


export const collections = { blog, portfolio };

