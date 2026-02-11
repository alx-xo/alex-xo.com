import { defineCollection, type SchemaContext } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const workSchema = <T extends SchemaContext>({ image }: T) =>
  z.object({
    title: z.string(),
    description: z.string(),
    type: z.array(z.string()).optional(),
    tech: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    cardSize: z.string().optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    images: z.array(image()).optional(),
  });

export type WorkType = z.infer<ReturnType<typeof workSchema>>;

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: (ctx) => workSchema(ctx),
});

export const collections = { work };
