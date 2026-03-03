import { type SchemaContext } from "astro:content";
import { z } from "astro/zod";

export enum CardSize {
  SMALL = "small",
  LARGE = "large",
}

export const workSchema = <T extends SchemaContext>({ image }: T) =>
  z.object({
    title: z.string(),
    description: z.string(),
    type: z.array(z.string()).optional(),
    tech: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    cardSize: z.nativeEnum(CardSize).optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    images: z.array(image()).optional(),
  });

export type WorkType = z.infer<ReturnType<typeof workSchema>>;
