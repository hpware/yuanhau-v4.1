<script setup>
const { locale, t } = useI18n();
const min = 1000;
const max = 500;
const math = ref();
import "~/components/css/hackclub.css";
onMounted(() => {
  const interval = setInterval(() => {
    math.value = Math.floor(Math.random() * (max - min + 1) + min);
  }, 5000);
  onUnmounted(() => {
    clearInterval(interval);
  });
});
const p = defineProps({
  size: {
    type: String,
    default: "50px",
  },
});
</script>
<template>
  <div class="container">
    <div
      class="loader"
      :style="{
        animationDuration: `${duration}ms`,
        width: p.size,
        height: p.size,
      }"
    ></div>
    <p>{{ t("loading") }}...</p>
  </div>
</template>

<style scoped>
.container {
  font-family: Phantom Sans;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  gap: 0px;
}
.loader {
  justify-content: center;
  border: 10px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top-color: #ec3750;
  animation: spin 1s linear infinite;
  margin-bottom: 0;
}
p {
  text-align: center;
  margin-top: 10px;
  font-family: Phantom Sans;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
