<script setup lang="ts">
import "~/components/css/hackclub.css";
import Loader from "~/components/loading/randomloader.vue";
import hackclubsvg from "~/components/svg/hackclub.svg"
const { t } = useI18n();

const loading = ref(false);

const fetchProjects = async () => {
    try {
        loading.value = true;
    } catch (e) {
        console.log(e);
    } finally {
        //loading.value = false;
    }
}
onMounted(() => {
    fetchProjects
})
useHead({
    title: `Hack Club | | ${t("yhname")}`,
})
</script>
<template>
    <div class="header">
        <h2>Hack Club</h2>
        <h6>My projects @ hackclub</h6>
    </div>
    <div v-if="loading">
        <Loader class="loader"/>
    </div>
    <div v-else>
        <span>Hi</span>
    </div>
</template>
<style scoped>
div.header {
    h2 {
        margin-bottom:0;
    }
    h6 {
        margin-top:0;
    }
}
.loader {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>