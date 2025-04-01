<script setup lang="ts">
import Loader from "~/components/loading/randomloader.vue";
const years = ref([]);
const tags = ref([]);
const searcharea = ref("");
const router = useRouter();

</script>
<template>
  <div class="sidebar">
    <div class="year">
      <div class="year-item">
        <a href="" v-for="i in years" :key="i"
          ><span>{{ i }}</span></a
        >
      </div>
    </div>
    <div class="tags">
      <div class="tag-item">
        <a href="" v-for="i in tags" :key="i"
          ><span>{{ i }}</span></a
        >
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
