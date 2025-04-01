<script setup lang="ts">
const { t } = useI18n();
import "~/components/css/hackclub.css";
import Loading from "~/components/loading/hackclub.vue";
import hackclubsvg from "~/components/svg/hackclub.svg";
import hackclubFlag from "~/components/svg/hackclub-flag-orpheus-left.svg";
const placeholderimg = `data:image/svg+xml,%3Csvg width='280' height='320' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='16'%3E${t("core.contentnotavaible")}%3C/text%3E%3C/svg%3E`;
useHead({
  title: `Hack Club | | ${t("yhname")}`,
});

// Slack Widget
const slackloading = ref(false);

// Projects
const projloading = ref(false);
const projcontent = ref();
const fetchProjects = async () => {
  try {
    projloading.value = true;
    const req = await fetch("/api/hackclub/projects");
    const res = await req.json();
    projcontent.value = res;
  } catch (e) {
    console.log(e);
  } finally {
    projloading.value = false;
  }
};
onMounted(() => {
  fetchProjects();
});
// Images
const imagesloading = ref(false);
const imagescontent = ref();
const fetchImages = async () => {
  try {
    imagesloading.value = true;
    const req = await fetch("/api/hackclub/images");
    const res = await req.json();
    console.log(res);
    imagescontent.value = res;
  } catch (e) {
    console.log(e);
  } finally {
    imagesloading.value = false;
  }
};
onMounted(() => {
  fetchImages();
});
// Fetch Dino Drawings
const dinoload = ref(false);
const dinocontent = ref();
const fetchdinos = async () => {
  try {
    imagesloading.value = true;
    const req = await fetch("/api/hackclub/drawings");
    const res = await req.json();
    console.log(res);
    imagescontent.value = res;
  } catch (e) {
    console.log(e);
  } finally {
    imagesloading.value = false;
  }
};
onMounted(() => {
  fetchdinos();
});
</script>
<template>
  <div class="background"></div>
  <div class="flag">
    <img :src="hackclubFlag" draggable="false" alt="Hack Club Flag" />
  </div>
  <div class="content">
    <div class="header">
      <h1>Hack Club</h1>
      <h6>What I have done @ hackclub (This is also a special page)</h6>
    </div>
    <!--<h3>Slack widget</h3>
    <div v-if="!slackloading" class="slackwidgetcontainer">
        <a href="https://hackclub.slack.com/team/U087ATD163V">
        <div class="slackwidget">
            <img src="https://ca.slack-edge.com/T0266FRGM-U087ATD163V-2c883ca2d6b7-72"/>
            <span class="displayname">yhw_tw</span>
        </div>
    </a>
    </div>
    <div v-else>
        <Loading size="20px"/>
    </div>-->
    <h3>My Projects</h3>
    <Transition name="project-fade">
      <div v-if="!projloading" class="projects">
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
    </Transition>
    <div v-if="projloading">
      <Loading />
    </div>
  </div>
</template>
<style></style>
<style scoped>
.background {
  background-color: #205b8b;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
div.flag {
  left: 0;
  top: 20px;
  position: fixed;
  img {
    width: 150px;
    height: 150px;
  }
}
div.content {
  font-family: Phantom Sans;
}
div.header {
  h1 {
    margin-bottom: 0;
  }
  h6 {
    margin-top: 0;
  }
}
/**PENDING!! */
/*.slackwidgetcontainer {
    width: 100%;
    justify-content:center;
    align-self:center;
    align-items:center;
    text-align: center;

}
.slackwidget {
    width:200px;
    height:100px;
    justify-content:center;
    align-self:center;
    align-items:center;
    text-align: center;
}*/
.projects {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .item {
    background-color: #504e4e7c;
    margin: 3px;
    border-radius: 20px;
    padding: 10px;
    width: calc(50dvw - 21px);

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
</style>
