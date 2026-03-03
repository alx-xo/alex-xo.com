import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { workSchema } from "@/schema/work";

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: (ctx) => workSchema(ctx),
});

export const collections = { work };
