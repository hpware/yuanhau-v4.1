<script setup lang="ts">
const data = ref("");
const announce = ref(false);
const animationComplete = ref(false);
const { t } = useI18n();
onMounted(() => {
  data.value = "Beta testing the site.";

  if (data.value.replace("\n", "") !== "") {
    announce.value = true
  }

  setTimeout(() => {
    closeAnnouncement();
  }, 8000);
});

function closeAnnouncement() {
  animationComplete.value = true;
  setTimeout(() => {
    announce.value = false;
  }, 500);
}
</script>

<template>
  <Transition name="slide-down">
    <div v-if="announce" :class="['announcement', { exit: animationComplete }]">
      <div class="content">
        <button
          @click="closeAnnouncement"
          class="close-btn"
          aria-label="Close announcement"
        >
          <i class="bi bi-x"></i>
        </button>
        <div class="message">
          <h3>{{ t("core.announce.title") }}</h3>
          <span class="data" v-html="data"></span>
        </div>
      </div>
      <div class="progress-bar"></div>
    </div>
  </Transition>
</template>

<style scoped>
.announcement {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #d5a718;
  color: #000;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  max-height: 80px;
  h3 {
    margin: 0 0 5px 0;
    font-size: 0.9em;
    font-weight: 600;
  }
  .content {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    position: relative;
  }
  .message {
    flex: 1;
  }

  .data {
    font-size: 0.85em;
    display: block;
    line-height: 1.4;
  }

  .close-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: #000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    transition: background-color 0.2s;
  }

  .close-btn:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.progress-bar {
  height: 3px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: countdown 8s linear forwards;
}

@keyframes countdown {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

/* Transitions */
.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Mobile optimization */
@media screen and (max-width: 600px) {
  .announcement {
    max-height: none;
  }

  .announcement-content {
    flex-direction: column;
    text-align: center;
    padding: 15px 10px;
  }

  .icon {
    margin: 0 0 8px 0;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
