<script setup lang="ts">
// Import
import markdownit from "markdown-it";
const md = markdownit();
const route = useRoute();
// Values
const content = ref();
const loading = ref(false);
const error = ref();
// Get Slug
const uuid = route.params.slug;
const fetchPageContent = async () => {
  try {
    loading.value = true;
    const req = await fetch(`/api/db/markdown/${uuid}`);
    const res = await req.text();
    content.value = res;
  } catch (e) {
    console.log(e);
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};
// On page load
onMounted(() => {
  fetchPageContent();
});
</script>
<template>
  <div v-if="error">
    <p>Oops! 暫時無法存取資料!</p>
  </div>
  <div v-else>
    <div v-html="md"></div>
  </div>
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
</style>
