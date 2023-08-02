import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
<<<<<<< HEAD
=======
      front: z.string(),
      back: z.string(),
>>>>>>> 1de758dc437e6ceee442f05832f622e4f70956ac
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
