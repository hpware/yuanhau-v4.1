<script setup lang="ts">
import { ref } from "vue";
import { marked } from "marked";
import { animate } from "motion";
import "~/components/css/markdown.css";
import Loading from "~/components/loading/randomloader.vue";
useHead({
  title: "關於我 | 吳元皓",
  link: [
    {
      rel: "prefetch",
      href: "https://utfs.io/f/CCLPSN5W2HD5ziRBkeSZ5pJYf32lWLvIK8uGb41xkHCUnXm7",
    },
  ],
  meta: [{ name: "description", content: "關於吳元皓" }],
});
// Refs
const codinghistory = ref();
const loading = ref(true);
// Coding History List
async function getCodingHistoryMD() {
  try {
    const mdfile = await fetch("/api/db/markdown-v1?id=1");
    const mdtext = await mdfile.text();
    codinghistory.value = marked(mdtext);
  } catch (e) {
    throw createError({
      statusCode: 500,
      message: "錯誤: " + e,
    });
  } finally {
    loading.value = false;
  }
}
getCodingHistoryMD();
</script>
<template>
  <Loading class="mainloader" v-if="loading" />
  <section id="about" class="about" v-if="!loading">
    <div v-html="codinghistory"></div>
  </section>
</template>
<style scoped>
.mainloader {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.about {
  animation: fade-in 1200ms ease-in-out;
  width: 98%;
  left: 0;
  right: 0;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}
@media (max-width: 600px) {
  .about {
    width: 100%;
    font-size: 0.9em;
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
