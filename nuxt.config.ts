import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // compatibilityDate: "2024-11-01",
  ssr: true,

  nitro: {
      preset: 'static',
      prerender: {
          routes: ['/', '/about', '/tests', '/departments']
      }
  },

  devtools: { enabled: true },

  app: {
      head: {
          titleTemplate: "%s - Quick Quest Diagnostics",
          link: [
              {
                  rel: "stylesheet",
                  href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
              },
              { rel: 'icon', type: 'image/png', href: '/images/qqd-logo.png' }
          ],
      },
  },

  css: ["~/assets/css/main.css"],

  vite: {
      plugins: [tailwindcss()],
  },

  runtimeConfig: {
      public: {
          FONT_AWESOME: process.env.FONT_AWESOME,
      },
  },

  compatibilityDate: '2025-06-30',
});