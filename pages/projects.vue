<script setup lang="ts">
import Loader from "~/components/loading/randomloader.vue"
const { t } = useI18n();
useHead({
  title: `${t("nav.projects")} | | ${t("yhname")}`,
});
const projects = ref();
const loading = ref(false);
const error = ref();

const fetchProjects = async () => {
  try {
    loading.value = true;
    const req = await fetch("/api/projects");
    const res = await req.json();
    projects.value = res;
  } catch (e) {
    console.log(e);
    error.value = e;
  } finally {
    loading.value = false
  }
}
onMounted(() => {
  fetchProjects();
})
</script>
<template>
  <div class="content">
    <h2 class="title">{{ t("nav.projects") }}</h2>
    <h6 class="dec">{{ t("projects.description") }}</h6>
    <div v-if="loading">
      <Loader/>
    </div>
    <div v-if="!loading && !error" class="content">
      <div v-for="obj in projects" :key="obj.name">
        <div class="item">
          <h4>{{ obj.name }}</h4>
          <p>{{ obj.description }}</p>
          <p v-if="obj.useai">{{ t('projects.useai') }}</p>
          <p>
            <a :href="obj.gitrepo">{{ t("projects.gitrepo") }}</a
            ><span v-if="obj.webpage"
              >&nbsp;&nbsp;<a :href="obj.webpage">{{ t("projects.webpage") }}</a></span
            >
          </p>
        </div>
      </div>
      <div v-if="error">
        {{ error }}
      </div>
    </div>
  </div>
</template>
<style scoped>
h2.title {
  margin-bottom: 0;
  font-size: 2.5em;
}
h6.dec {
  margin-top: 0;
}
</style>
