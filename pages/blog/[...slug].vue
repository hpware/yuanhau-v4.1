<script setup lang="ts">
// Import
import Giscus from "@giscus/vue";
import { inView, animate } from "motion";
import "@/components/css/markdown.css";
import SideBar from "~/components/BlogSidebar.vue";
import markdownit from "markdown-it";
const md = markdownit();
const { t } = useI18n();
// Title
useHead({
  title: `${t("nav.blog")} | | ${t("yhname")}`,
});
const clipboardthingy = ref(false);
// Year stuff
const link = ref();
const formatDate = (dateString: string) => {
  const D1 = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("zh-TW", D1);
};
// Fetch Short URL
const route = useRoute();
const slug = computed(() => {
  // If slug is an array, join with "/" to create proper path
  if (Array.isArray(route.params.slug)) {
    return route.params.slug.join("/");
  }
  // If it's a single segment, return as is
  return route.params.slug;
});
onMounted(async () => {
  // 這個先不要使用不然短網址服務會多很多 https://yuanhau.com/posts/[object object] 或 垃圾東西
  /**try {
    const req = await fetch("/api/db/obtainshortlink", {
      method: "POST",
      body: `/posts/${slug}`,
    });
    const res = await req.json();
    link.value = `https://yhw.tw/${res.short}`;
    console.log("onMounted: " + link.value);
  } catch (e) {
    console.log(e);
  }*/
});
// Copy Link
const copylink = async () => {
  navigator.clipboard.writeText(link.value);
  clipboardthingy.value = true;
  setTimeout(() => {
    clipboardthingy.value = false;
  }, 500);
};
</script>
<template>
  <main>
    <p>你想去的地方 https://4-1-2.yuanhau.com/blog/{{ slug }}</p>
    <p>
      Oops! 這個頁面正在大改! 請稍後在回來 或把網址在 https:// 與 yuanhau
      之間加上 2-14.
    </p>
  </main>
</template>
<style scoped>
h1.title {
  margin-bottom: 0;
}

.meta {
  font-size: 0.8em;
  color: rgb(133, 133, 133);
  margin-top: 0em;
  margin-bottom: 0.5em;
  span {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
}
.comments {
  margin-top: 2rem;
  margin-bottom: 0;
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.footer {
  align-content: end;
  align-items: end;
  text-align: center;
  position: absolute;
  display: grid;
  left: 0;
  right: 0;
  p {
    font-size: 0.5em;
    margin-top: 0.1em;
    margin-bottom: 0;
  }
  p.end {
    margin-bottom: 0.5em;
    margin-top: 0.1em;
    font-size: x-large;
    color: rgb(169, 169, 169);
  }
  a {
    text-decoration: none;
    color: white;
    transition: all 200ms;
  }
  a:hover {
    color: rgb(169, 169, 169);
  }
  margin-top: 1em;
  margin-bottom: 1em;
}
@media (max-width: 502px) {
  .comments {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}
article {
  animation: fade-in 700ms ease-in-out;
}
.content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: white;
    text-decoration: none;
    a {
      color: white;
      text-decoration: none;
    }
  }
  img {
    max-width: 100%;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 600px) {
  .meta {
    font-size: 0.7em;
  }
  .content {
    font-size: 0.9em;
  }
  .footer {
    p {
      font-size: 0.4em;
    }
    p.end {
      font-size: 0.8em;
    }
  }
}
.force-center {
  width: 100%;
}
.create-quick-link {
  background-color: lightskyblue;
  color: black;
  max-width: 300px;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  position: absolute;
  left: 0;
  right: 0;
  animation: fade-in 300ms ease-in;
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  div {
    margin-top: 0;
    font-size: 0.7em;
  }
  ::selection {
    opacity: 1;
    background-color: #9c84a7;
  }
}
.share {
  color: #ebe58b94;
  &::selection {
    opacity: 1;
    background-color: #9c84a7;
  }
  ::selection {
    opacity: 1;
    background-color: #9c84a7;
  }
  font-size: 0.7em;
  span {
    font-size: 1.15em;
  }
  button {
    background-color: transparent;
    color: white;
    border-color: transparent;
    padding: 0;
    transition: all 100ms ease-in-out;
  }
  button:hover {
    color: greenyellow;
  }
}
</style>
