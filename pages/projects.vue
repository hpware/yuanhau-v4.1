<script setup lang="ts">
import { ref } from "vue";
useSeoMeta({
  title: "我的專案 | 吳元皓",
});
const projects = [1];
</script>
<template>
  <div class="main" id="main">
    <h1 class="title">我的專案</h1>
    <div class="content">
      <div v-for="obj in projcontent" :key="obj.name">
        <div class="item">
          <h4>{{ obj.name }}</h4>
          <p>{{ obj.description }}</p>
          <p>
            <a :href="obj.gitrepo">Git Repo</a
            ><span v-if="obj.webpage"
              >&nbsp;&nbsp;<a :href="obj.webpage">Project Webpage</a></span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1.title {
  margin-bottom: 0;
  font-size: 2.5em;
}
h6.dec {
  margin-top: 0;
}
h1 {
  margin-bottom: 0;
}
</style>
