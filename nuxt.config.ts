import { resolve } from "node:path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-04-02",

  devtools: {
    enabled: true,
  },

  routeRules: {
    "/": { prerender: true },
    "/**": { prerender: true },
    "/legacy-index": { prerender: true },
    "/about": { prerender: true },
    "/images/": { prerender: true },
    "/threads": { prerender: true },
    // Redirect old content to old content. and /blog to new.
    "/posts/": { redirect: "https:///4-1-2.yuanhau.com/posts/" },
    "/posts/**": {
      redirect: "https:///4-1-2.yuanhau.com/posts/**",
    },
    "/api/**": { cors: true },
    "/admin/": { redirect: "/admin/login" },
    "/admin/**": { ssr: true },
    "/signal": { redirect: "https://yhw.tw/signal" }, // Compatibility with the Wordpresss version link aka https://wp.yuanhau.com/signal
    // Old Redirect stuff here.
    "/post": { redirect: "/posts" },
    "/post/**": { redirect: "/posts/**" },
    // Sync the old with the new
    "/mdview/**": {
      redirect: "https:///4-1-2.yuanhau.com/mdview/**",
    },
    "/form/**": { ssr: true },
    // FOR OTHER LANGS
    // en
    "/en": { prerender: true },
    "/en/**": { prerender: true },
    "/en/legacy-index": { prerender: true },
    "/en/about": { prerender: true },
    "/en/images/": { prerender: true },
    "/en/threads": { prerender: true },
    // Redirect old content to old content. and /blog to new.
    "/en/posts/": { redirect: "/blog/" },
    "/en/posts/**": {
      redirect: "https://4-1-2.yuanhau.com/posts/**",
    },
    "/en/admin/": { redirect: "/admin/login" },
    "/en/admin/**": { redirect: "/admin/**" },
    // Sync the old with the new
    "/en/form/**": { ssr: true },
  },

  modules: [
    "nuxt-umami",
    "@nuxtjs/robots",
    "@kgierke/nuxt-basic-auth",
    "@sentry/nuxt/module",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "nuxt-gtag",
    "@bg-dev/nuxt-s3",
    "@nuxtjs/i18n",
    "@logto/nuxt",
  ],

  umami: {
    enabled: true,
    host: "https://data.yuanhau.com",
    autoTrack: true,
    id: "2a995ed3-bdc7-4557-bf53-b724d29bb337",
    ignoreLocalhost: true,
  },

  site: {
    url: "https://yuanhau.com",
    title: "吳元皓",
    description: "吳元皓的個人網站",
  },

  sitemap: {},

  app: {
    head: {
      htmlAttrs: {
        lang: "zh-Hant",
      },
      link: [
        { rel: "icon", href: "/img/pfp-1.jpg" },
        { rel: "favicon", href: "/img/pfp-1.jpg" },
        { rel: "dns-prefetch", href: "https://utfs.io" },
        { rel: "dns-prefetch", href: "https://s3.yhw.tw" },
        {
          rel: "prefetch",
          href: "https://utfs.io/f/CCLPSN5W2HD5ziRBkeSZ5pJYf32lWLvIK8uGb41xkHCUnXm7",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "吳元皓的個人網站" },
        {
          name: "keywords",
          content:
            "吳元皓, 吳元皓的個人網站, 吳元皓的個人網站首頁, Howard Wu, yuanhau, wuyuanhau, yuanhau.com, yuanh.xyz, Yuan-Hau Wu, 吳元皓, 元皓, 吳元皓, 吳元浩, 元浩, 吳元浩, 吳元浩, 五專生, ictechz, 台灣的五專生, 吴元皓, 吴元皓的网站,吴元浩,元浩,吴元浩的网站,吴元浩,五专生,ictechz,摄影,前端方面, 個人資料連結",
        },
        { name: "author", content: "吳元皓" },
        { name: "author-email", content: "hw@yuanhau.com" },
        { name: "copyright", content: "吳元皓" },
        { name: "twitter:creator", content: "@ictechz" },
        { name: "twitter:site", content: "https://yuanhau.com" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "吳元皓" },
        { name: "twitter:description", content: "吳元皓的個人網站" },
        { name: "twitter:image", content: "https://yuanhau.com/favicon.jpg" },
        { name: "og:title", content: "吳元皓" },
        { name: "og:description", content: "吳元皓的個人網站" },
        { name: "og:image", content: "https://yuanhau.com/favicon.jpg" },
        { name: "og:url", content: "https://yuanhau.com" },
        { name: "og:site_name", content: "吳元皓" },
        { name: "og:type", content: "website" },
        { name: "og:locale", content: "zh_TW" },
        {
          name: "og:keywords",
          content:
            "吳元皓, 吳元皓的個人網站, 吳元皓的個人網站首頁, Howard Wu, yuanhau, wuyuanhau, yuanhau.com, yuanh.xyz, Yuan-Hau Wu, 吳元皓, 元皓, 吳元皓, 吳元浩, 元浩, 吳元浩, 吳元浩, 五專生, ictechz, 台灣的五專生, 吴元皓, 吴元皓的网站,吴元浩,元浩,吴元浩的网站,吴元浩,五专生,ictechz,摄影,前端方面, 個人資料連結",
        },
        { name: "og:author", content: "吳元皓" },
        { name: "og:author:email", content: "hw@yuanhau.com" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      ],
    },
  },

  content: {
    blog: {
      prefix: "/post",
      driver: "fs",
    },
  },

  gtag: {
    id: "G-2J2M9834SQ",
  },

  s3: {
    accept: "^image/(png|jpeg|png|gif)",
    maxSizeMb: 10,
    driver: "s3",
    bucket: "yuanhau.com-filesapi",
    endpoint: "s3.ap-northeast-1.wasabisys.com",
    region: "auto",
    accessKeyId: process.env.WASABI_S3_CLIENT_ID, // Client ID
    secretAccessKey: process.env.WASABI_S3_SECRET, // Client secret
  },
  uploadthing: {
    /**
     * Path to your router definition file
     * @default `~/server/uploadthing.ts`
     */
    routerPath: "",
  },
  runtimeConfig: {
    public: {
      // Remember to uncomment this stuff.
      posthogPublicKey: "phc_E8muTZ7mYynVfGDxK0OwYf0wXme28svmjTXzxoBXHeZ",
      posthogHost: "https://us.i.posthog.com",
    },
    logto: {
      endpoint: "https://logto.yuanhau.com/",
      appId: "02l4vunlf4f17jpks449h",
      appSecret: "fAej9glG1MhbfmEnfhtCVfa1yxv0M4Hd",
      cookieEncryptionKey: "aIG2EC9souxqOgEPQXtSqwCZZLwUsd6e", // Random-generated
    },
  },
  logto: {
    pathnames: {
      callback: "/api/auth/callback",
    },
  },
  sentry: {
    sourceMapsUploadOptions: {
      org: "hwtwcc",
      project: "yuanhau-v4dot1",
    },

    autoInjectServerSentry: "top-level-import",
  },

  sourcemap: {
    client: "hidden",
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    strategy: "prefix_except_default",
    defaultLocale: "zh-tw",
    locales: [
      {
        code: "zh-tw",
        name: "繁體中文",
      },
      {
        code: "en",
        name: "English",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
});
