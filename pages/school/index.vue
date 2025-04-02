<script setup lang="ts">
import Loader from "~/components/loading/randomloader.vue";
const { t } = useI18n();
</script>
<template>
    <div class="content">
        <div class="header">
            <h1>{{ t("school.index.title") }}</h1>
            <h6>{{ t("school.index.description") }}</h6>
        </div>
    </div>
</template>
<style scoped>
div.header {
  h1 {
    margin-bottom: 0;
  }
  h6 {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>