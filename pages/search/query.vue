<script setup lang="ts">
const searcharea = ref("");
const router = useRouter();

const submitsearch = async (e: Event) => {
  e.preventDefault();
  router.push(
    `/search/query?filter=${searcharea.value.replace(/ /g, "^%^%")}&search=search`,
  );
};
</script>
<template>
  <div class="chatbot-content">
    <form id="askai" @submit.prevent="submitsearch">
      <input v-model="searcharea" placeholder="Search Anything" />
      <button><i class="bi bi-search"></i></button>
    </form>
  </div>
</template>
