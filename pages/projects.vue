<script setup lang="ts">
import Loader from "~/components/loading/randomloader.vue";
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
    projects.value = res.data;
  } catch (e) {
    console.log(e);
    error.value = e;
  } finally {
    loading.value = false;
  }
};
onMounted(() => {
  fetchProjects();
});
</script>
<template>
  <div class="content">
    <h2 class="title">{{ t("nav.projects") }}</h2>
    <h6 class="dec">{{ t("projects.description") }}</h6>
    <div v-if="loading">
      <Loader />
    </div>
    <Transition name="project-fade">
      <div v-if="!loading" class="projects">
        <div v-for="obj in projects" :key="obj.id">
          <div class="item">
            <h4>{{ obj.name }}</h4>
            <p>{{ obj.description }}</p>
            <p>
              <a :href="obj.repo" v-if="obj.repo">{{ t("projects.code") }}</a
              ><span v-if="obj.webpage && obj.repo">&nbsp;&nbsp;</span
              ><a :href="obj.webpage" v-if="obj.webpage">{{
                t("projects.webpage")
              }}</a>
            </p>
          </div>
        </div>
      </div>
    </Transition>
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
.projects {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-self:center;
  align-content:center;
  flex-wrap: wrap;
  margin: 0 auto;
  .item {
    background-color: #504e4e7c;
    margin: 3px;
    border-radius: 20px;
    align-self:center;
    align-content:center;
    justify-content:Center;
    align-items:center;
    padding: 10px;
    width: 300px;
    min-height:350px;
    a {
      color: rgb(208, 208, 208);
      transition: all 200ms ease-in-out;
    }
    a:hover {
      color: #919191;
    }
  }
}
.project-fade-enter-active {
  transition: all 0.5s ease;
}
.project-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.project-fade-enter-from,
.project-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
@media only screen and (max-width: 500px) {
  .projects {
    flex-direction: column;
    .item {
      margin: 0 auto;
      margin-block: 5px;
      width: 90%;
    }
  }
}
</style>
