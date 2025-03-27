<script setup lang="ts">
useHead({
  title: "首頁 | 吳元皓",
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
onMounted(async () => {
  try {
    progressloading.value = true;
    const req = await fetch("/api/home/progress", {
      method: "GET",
    });
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
  } finally {
    progressloading.value = false;
  }
});
</script>
<template>
  <div class="loadingtomainanimation">
  <NuxtImg
    alt="背景"
    class="background"
    draggable="false"
    src="https://1qz92oj9ol.ufs.sh/f/CCLPSN5W2HD5Hjx9nW7XEuSOswWPIZ09j31aUTe7gopyNmnk"
    @load="bgloading = false"
    v-lazy-load
    load="lazy"
    :style="{ display: bgloading ? 'none' : 'block' }"
  />
      <Loader v-if="bgloading" size="40px" class="main-loader" />
    <transition name="slide-fade">
      <div v-if="!bgloading">
    <div class="aboutme">
      <NuxtImg
        alt="大頭貼"
        class="pfp"
        draggable="false"
        src="/img/pfp-1.jpg"
        v-lazy-load
        load="lazy"
      />
      <h1>吳元皓</h1>
    </div>
    <div class="info">
      我是一個五專生，我對Typescript與Javascipt有興趣，我也對伺服器(也就是Linux)極度有興趣。
    </div>
    <div class="progress-block">
      <div v-if="!progressloading">
        <div class="progress-panel">
          <div>
            <label for="javascript">js: </label>
            <progress
              id="javascript"
              :value="progress.progress.js"
              max="100"
            ></progress>
          </div>
          <div>
            <label for="server">伺服器 :</label>
            <progress
              id="server"
              :value="progress.progress.server"
              max="100"
            ></progress>
          </div>
          <div>
            <label for="python">py: </label>
            <progress
              id="python"
              :value="progress.progress.py"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
      <div v-else>
        <Loader size="20px" />
      </div>
    </div>
    <div class="status">
      <section id="spotify">
        Spotify Status:
        <SpotifyStatus />
      </section>
      <section id="discord">
        Discord Status:
        <DiscordStatus />
      </section>
    </div>
  </div>
</transition>
</div>
</template>
<style scoped>
.background {
  display:flex;
  position: fixed;
  justify-content: center;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index: -1;
  width:100%;
  height:100%;
  object-fit: cover;
  object-position: center;
}
.aboutme {
  justify-content: center;
  padding-left: 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 0;
  }
  NuxtImg,
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    justify-content: center;
    align-self: center;
    left: 0;
    right: 0;
    align-content: center;
    margin-bottom: 0;
  }
}
.info {
  width: calc(100% - 50px);
  align-self: center;
  text-align: center;
  align-content: center;
  justify-content: center;
  padding: 20px;
}
.progress-block {
  width: 100%;
  background-color: #8e8e8e92;
  padding-block: 100px;
}
.progress-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    width: 70%;
    progress {
      width: 80%;
      justify-content: center;
      align-self: center;
    }
  }
}
@media screen and (max-width: 718px) {
  .progress-block {
    padding-block: 50px;
  }
  .progress-panel {
    display:flex;
    div {
      display: flex;
      flex-direction: column;
    }
  }
}
div.status {
  gap: 10px;
  padding: 10px;
  section {
    gap: 10px;
    padding: 10px;
  }
}
/** Animations */
.loadingtomainanimation {
  transition: all 300ms ease-in-out;
  min-height: 100vh;
  width: 100%;
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
