import { z, defineCollection } from 'astro:content';
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    date_updated: z.date().optional(),
    featured_image: z.string().optional(),
    page_bg: z.string().optional(),
    draft: z.boolean().optional(),
    title_overlays_featured_image: z.boolean().optional(),
    excerpt: z.string().optional()
  }),
});
const companyCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    h: z.number(),
    s: z.number(),
    l: z.number(),
    font: z.string().optional(),
    fontImport: z.string().optional()
  }),
});


export const collections = {
  'blog': blogCollection,
  'companies': companyCollection
};