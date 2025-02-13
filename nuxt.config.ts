// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  ssr: false,
  srcDir: "src/",
  devServer: {
    // host: "0.0.0.0", If you want to access the server from another device
    port: 3000,
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    "@/components": "src/components",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@pinia/nuxt",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./src/components/ui"
     */
    componentDir: "./src/components/ui",
  },
  colorMode: {
    preference: "system",
    fallback: "dark",
    classPrefix: "",
    classSuffix: "",
    storage: "localStorage",
    storageKey: "color-mode",
  },
});
