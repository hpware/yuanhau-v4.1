<script setup lang="ts">
const { t } = useI18n();
</script>
<template>
    <h2>Threads {{ t("words.post") }}</h2>
    <h6 class="dec">{{ t("threads.description") }}</h6>
</template>
<style scoped>
h2 {
    margin-bottom:0;
}
h6.dec {
  margin-top: 0;
}
    </style>