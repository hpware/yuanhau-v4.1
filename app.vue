<script setup lang="ts">
import "~/components/icons.css";
import "~/components/app.css";
import NavBar from "~/components/NavBar.vue";
import { defineProps, ref, onMounted } from "vue";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>
<template>
  <NuxtLoadingIndicator color="#47a6ff" />
  <NuxtLayout>
    <NavBar />
    <NuxtPage />
    <noscript>這個網站必需要使用 JavaScript 才能運作</noscript>
  </NuxtLayout>
  <SpeedInsights />
</template>
<style scoped>
footer {
  position: fixed;
  bottom: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.829);
  p {
    font-size: 0.6em;
    margin-bottom: 0;
    margin-left: 0.5em;
  }
  a {
    text-decoration: none;
    font-size: 0.8em;
  }
}
.t {
  color: linear-gradient(#47a6ff, #0ccf4d);
}
</style>
