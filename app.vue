<script setup lang="ts">
import "~/components/icons.css";
import "~/components/app.css";
import NavBar from "~/components/NavBar.vue";
import msgComponent from "~/components/msgComponent.vue";
import { defineProps, ref, onMounted } from "vue";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
const { locale, t, setLocale } = useI18n();
const changeLang = () => {
  if (locale.value === "zh-tw") {
    setLocale("en");
  } else {
    setLocale("zh-tw");
  }
};
</script>
<template>
  <NuxtLoadingIndicator color="#47a6ff" />
  <NuxtLayout>
    <NavBar />
    <msgComponent />
    <NuxtPage />
    <div class="changelang">
      <button @click="changeLang" aria-label="change lang">
        <i class="bi bi-translate"></i>
      </button>
    </div>
    <noscript>這個網站必需要使用 JavaScript 才能運作</noscript>
  </NuxtLayout>
  <SpeedInsights />
</template>
<style scoped>
.changelang {
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 10px;
  button {
    background-color: #ffffff14;
    color: white;
    border-color: rgba(195, 195, 195, 0.618);
    border-radius: 100px;
    transition: all 200ms ease-in-out;
    justify-content: center;
    align-self: center;
    align-items: center;
    text-align: center;
    justify-items: center;
    i {
      justify-content: center;
      align-self: center;
      align-items: center;
      text-align: center;
      justify-items: center;
    }
  }
  button:hover {
    background-color: #cacaca95;
    border-color: #ffffff95;
  }
}
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
