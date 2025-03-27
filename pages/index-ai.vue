<script setup lang="ts">
useHead({
  title: "首頁 | 吳元皓",
  meta: [
    { name: 'description', content: '吳元皓的個人網站 - 專注於Typescript、Javascript和伺服器技術' }
  ]
});

interface Progress {
  progress: {
    js: number;
    server: number;
    py: number;
  };
}

// Init
import DiscordStatus from "~/components/plugins/discordStatus.vue";
import Loader from "~/components/loading/randomloader.vue";
import { ref, onMounted } from 'vue';

//values
const bgloading = ref(true);
const progressloading = ref(false);
const progress = ref<Progress>({
  progress: {
    js: 0,
    server: 0,
    py: 0,
  },
});
const progresserror = ref(false);
const retryLoading = () => {
  progresserror.value = false;
  loadProgressData();
};

const loadProgressData = async () => {
  try {
    progressloading.value = true;
    const req = await fetch("/api/home/progress", {
      method: "GET",
    });
    if (!req.ok) throw new Error("Failed to fetch progress data");
    const res = await req.json();
    progress.value = {
      progress: {
        js: res.js,
        server: res.server,
        py: res.py,
      },
    };
  } catch (e) {
    progresserror.value = true;
    console.error("Error loading progress data:", e);
  } finally {
    progressloading.value = false;
  }
};

onMounted(() => {
  loadProgressData();
});
</script>
<template>
  <div class="loadingtomainanimation">
    <NuxtImg
      alt="背景"
      class="background"
      draggable="false"
      src="/img/bg.jpg"
      @load="bgloading = false"
      @error="bgloading = true"
      v-lazy-load
      loading="lazy"
      :style="{ opacity: bgloading ? 0 : 1 }"
    />
    <Loader v-if="bgloading" size="40px" class="mainloader" />
    <transition name="fade">
      <div v-if="!bgloading" class="content-wrapper">
        <div class="preventoverpull"></div>
        <div class="aboutmeinfoblock">
          <div class="aboutme">
            <NuxtImg
              alt="大頭貼"
              class="pfp"
              draggable="false"
              src="/img/pfp-1.jpg"
              v-lazy-load
              loading="lazy"
            />
            <h1 class="name-title">吳元皓</h1>
          </div>
          <div class="info">
            我是一個五專生，我對Typescript與Javascipt有興趣，我也對伺服器(也就是Linux)極度有興趣。
          </div>
          <div class="scrolldown animate-bounce">
            <i class="bi bi-arrow-down"></i><span>&nbsp;更多資訊</span>
          </div>
        </div>
        <div class="displaybackground"></div>
        <div class="progress-block">
          <h2 class="section-title">技能熟練度</h2>
          <div v-if="!progressloading && !progresserror">
            <div class="progress-panel">
              <div class="progress-item">
                <label for="javascript">Javascript/Typescript: </label>
                <div class="progress-container">
                  <progress
                    id="javascript"
                    :value="progress.progress.js"
                    max="100"
                  ></progress>
                  <span class="progress-value">{{ progress.progress.js }}%</span>
                </div>
              </div>
              <div class="progress-item">
                <label for="server">伺服器管理: </label>
                <div class="progress-container">
                  <progress
                    id="server"
                    :value="progress.progress.server"
                    max="100"
                  ></progress>
                  <span class="progress-value">{{ progress.progress.server }}%</span>
                </div>
              </div>
              <div class="progress-item">
                <label for="python">Python: </label>
                <div class="progress-container">
                  <progress
                    id="python"
                    :value="progress.progress.py"
                    max="100"
                  ></progress>
                  <span class="progress-value">{{ progress.progress.py }}%</span>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="progressloading" class="loading-container">
            <Loader size="20px" />
            <p>加載中...</p>
          </div>
          <div v-else class="error-container">
            <p>無法加載技能數據</p>
            <button @click="retryLoading" class="retry-button">
              <i class="bi bi-arrow-clockwise"></i> 重試
            </button>
          </div>
        </div>
        <div class="status">
          <h2 class="section-title">現在狀態</h2>
          <div class="status-container">
            <section id="spotify" class="status-item">
              <h3>Spotify 狀態:</h3>
              <SpotifyStatus />
            </section>
            <section id="discord" class="status-item">
              <h3>Discord 狀態:</h3>
              <DiscordStatus />
            </section>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<style scoped>
.preventoverpull {
  z-index: -1;
  background-color: #000;
  width: 100%;
  position: absolute;
  top: -100px;
  height: 100px;
}

.mainloader {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.content-wrapper {
  animation: content-appear 0.8s ease-out;
}

.background {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: opacity 0.5s ease;
}

.section-title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: #f0f0f0;
}

.aboutmeinfoblock {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(52, 52, 52, 0.9) 28%, rgba(52, 52, 52, 0.8) 56%, rgba(114, 115, 117, 0.6) 83%, rgba(79, 79, 80, 0) 100%);
  height: 100dvh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.displaybackground {
  width: 100%;
  height: 200px;
}

.aboutme {
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 10vh;
}

.name-title {
  margin-top: 1rem;
  font-size: 2.5rem;
  text-align: center;
  font-weight: 700;
}

.pfp {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  align-self: center;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  border: 4px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
}

.pfp:hover {
  transform: scale(1.05);
}

.info {
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 1.5rem;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #e0e0e0;
}

.scrolldown {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 120px;
  text-align: center;
  font-size: 1.2rem;
  color: #ffffff;
  opacity: 0.8;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.progress-block {
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(52, 52, 52, 0.9) 15%, rgba(52, 52, 52, 0.9) 85%, rgba(79, 79, 80, 0) 100%);
  padding: 4rem 0;
  margin: 3rem 0;
}

.progress-panel {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.progress-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.progress-container {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
}

.progress-container progress {
  width: calc(100% - 50px);
  height: 15px;
  border-radius: 10px;
  overflow: hidden;
}

.progress-container progress::-webkit-progress-bar {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

.progress-container progress::-webkit-progress-value {
  background: linear-gradient(to right, #4286f4, #42c5f4);
  border-radius: 10px;
  transition: width 1s ease-in-out;
}

.progress-value {
  width: 40px;
  text-align: right;
  font-weight: 600;
}

.loading-container, .error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 200px;
  padding: 20px;
}

.retry-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s;
}

.retry-button:hover {
  background-color: #2980b9;
}

.status {
  padding: 2rem 0;
  margin: 0 auto;
  max-width: 1000px;
}

.status-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 20px;
}

.status-item {
  background: rgba(30, 30, 30, 0.7);
  border-radius: 10px;
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.status-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.status-item h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: #e0e0e0;
}

@media screen and (min-width: 719px) {
  .progress-item {
    flex-direction: row;
    align-items: center;
  }
  
  .progress-item label {
    min-width: 180px;
    text-align: right;
    padding-right: 1rem;
  }
}

@media screen and (max-width: 718px) {
  .progress-block {
    padding: 3rem 0;
  }
  
  .progress-item label {
    margin-bottom: 0.5rem;
  }
  
  .name-title {
    font-size: 2rem;
  }
  
  .info {
    width: 90%;
    font-size: 1rem;
    padding: 1rem;
  }
  
  .pfp {
    width: 150px;
    height: 150px;
  }
}

/** Animations */
.loadingtomainanimation {
  transition: all 300ms ease-in-out;
  min-height: 100vh;
  width: 100%;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

@keyframes content-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
