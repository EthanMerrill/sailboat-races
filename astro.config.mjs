// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// import tailwindcss from "@tailwindcss/vite";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      experimentalReactChildren: true,
    }),//
    tailwind({//
      applyBaseStyles: false,//
    }),//

  ],

  // vite: {
  //   plugins: [tailwindcss()],
  // },
});