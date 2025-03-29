<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: `Threads | | ${t("yhname")}`,
});
const projects = ref();
</script>
<template>
  <div class="main" id="main">
    <h1 class="title">{{ t("nav.projects") }}</h1>
    <div class="content">
      <div v-for="obj in projects" :key="obj.name">
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
