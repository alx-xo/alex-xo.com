import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import indexnow from "astro-indexnow";
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://alex-xo.com",
  integrations: [
    mdx(),
    sitemap(),
    indexnow({
      key: process.env.INDEXNOW_KEY,
    }),
  ],
});
