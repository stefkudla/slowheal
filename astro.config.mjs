import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://slowheal.com/",
  integrations: [tailwind(), react(), image(), robotsTxt(), sitemap()],
  experimental: {
    integrations: true,
  },
});
