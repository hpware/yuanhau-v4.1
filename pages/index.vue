<script setup lang="ts">
useHead({
  title: "首頁 | 吳元皓",
});


// Init
import DiscordStatus from "~/components/plugins/discordStatus.vue";
import Loader from "~/components/loading/randomloader.vue";

//values
const bgloading = ref(true);
const progressloading = ref(false);
const progress = ref();
const progresserror = ref(false);
onMounted(async () => {
  try {
    progressloading.value = true;
    const req = await fetch("/api/home/progress", {
      method: "GET",
    });
    const res = await req.json();
    progress.value = res;
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
    src="/img/bg.jpg"
    @load="bgloading = false"
    @error="bgloading = false"
    v-lazy-load
    load="lazy"
    :style="{ display: bgloading ? 'none' : 'block' }"
  />
      <Loader v-if="bgloading" size="40px" class="mainloader" />
    <transition name="slide-fade">
      <div v-if="!bgloading">
        <div class="preventoverpull"></div>
        <div class="aboutmeinfoblock">
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
      <div class="info">
      我是一個五專生，我對Typescript與Javascipt有興趣，我也對伺服器(也就是Linux)極度有興趣。
    </div>
    <p class="socials">
        <a href="https://github.com/hpware" aria-label="github" id="github"
          ><i class="bi bi-github"></i
        ></a>
        <a
          href="https://instagram.com/yh_.5_26"
          aria-label="instagram"
          id="instagram"
          ><i class="bi bi-instagram"></i
        ></a>
        <a href="https://threads.net/yh_.5_26" aria-label="threads" id="threads"
          ><i class="bi bi-threads"></i
        ></a>
        <a href="https://yhw.tw/bluesky" aria-label="bluesky" id="bluesky"
          ><i class="fab fa-bluesky"></i
        ></a>
        <a href="https://twitter.com/ictechz" aria-label="Twitter (X)">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="https://youtube.com/@號" aria-label="youtube" id="youtube"
          ><i class="bi bi-youtube"></i
        ></a>
        <a
          href="https://unsplash.com/@hwtw"
          aria-label="unsplash"
          id="unsplash"
        >
          <i class="fab fa-unsplash"></i>
        </a>
        <a href="mailto:hw@yuanhau.com" aria-label="email" id="email"
          ><i class="bi bi-inbox"></i
        ></a>
      </p>
    </div>
    <div class="scrolldown">
      <a href="/#content"><i class="bi bi-arrow-down"></i><span>&nbsp;更多資訊</span></a>
    </div>
    </div>
    <div class="displaybackground"></div>
    <section id="content">
    <div class="progress-block">
      <h4>技能熟練度</h4>
      <div v-if="!progressloading">
        <div class="progress-panel">
          <div v-for="list in progress" :key="list.id">
            <div>
            <label :for="list.lang" v-if="list.icon" v-html="`<i class='bi bi-${list.icon}'><i>: `"></label>
            <label :for="list.lang" v-else>{{ list.lang }}: </label>
            <progress
              :id="list.lang"
              :value="list.progress"
              max="100"
            ></progress><span>&nbsp;{{ list.progress }}%</span>
            </div>
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
  </section>
    <footer>
      <span>
        版權 © {{ new Date().getFullYear() }} <a href="https://yuanhau.com">吳元皓</a>
      </span>
      <span>使用 Nuxt || 網站 v4.1.3</span>
  </footer>
  </div>
</transition>
</div>
</template>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");
.preventoverpull {
  z-index: -1;
  background-color: #000;
  width: 0; 
  overflow: hidden; 
  position: absolute;
  top: -100px; 
  left:0;
  right:0;
  width:100%;
  height:100px;
}
.mainloader {
  position: fixed;
  left:0;
  right:0;
  top:0;
  bottom:0; 
}
.background {
  display:flex;
  position: fixed;
  justify-content: center;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index: -2;
  width:100%;
  height:100%;
  object-fit: cover;
  object-position: center;
}
.blur {
  display:flex;
  left:0;
  right:0;
  top:0;
  bottom:0;
  position: fixed;
  width:100%;
  height: 100%;
  background-color:#6363634e;
  z-index:-1;
}
.aboutmeinfoblock {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(52, 52, 52, 0.9) 28%, rgba(52, 52, 52, 0.8) 56%, rgba(114, 115, 117, 0.6) 83%, rgba(79, 79, 80, 0) 100%);
  height: 100dvh;
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.displaybackground {
  width:100%;
  height: 300px;
}
.aboutme {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  margin-top: -20px; 
  padding-top:-20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  h1 {
    margin-top: 0;
  }
  a {
    text-decoration: none;
    color:white;
  }
  NuxtImg,
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    justify-content: center;
    align-self: center;
    left: 0;
    right: 0;
    align-content: center;
    margin-bottom: 0;
  }
  .info {
  width: calc(100% - 50px);
  align-self: center;
  text-align: center;
  align-content: center;
  justify-content: center;
  padding: 20px;
  text-decoration: none;
  a {
    text-decoration: none;
    color:white;
  }
}
.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0;
  margin:0;
  padding-bottom:10px;
  a {
    color: white;
    transition: all 200ms;
    margin: 10px;
  }
  a:hover {
    color: #b3b3b3;
  }
}
}
.scrolldown {
  justify-content:center;
  align-self:center;
  align-content:center;
  text-align:center;
  position: absolute;
  left:0;
  right:0;
  top:calc(100dvh - 100px);
  animation: bounce 2s infinite;
  a {
    color: white;
    text-decoration: none;
  }
}
.progress-block {
  width: 100%;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(52,52,52,1) 35%, rgba(52,52,52,1) 68%, rgba(79,79,80,0) 100%); 
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
  display:flex;
  flex-direction: linear;
  justify-content:center;
  align-items: center;
  section {
    gap: 10px;
    padding: 10px;
    background-color: #000000;
    border-radius: 10px;
  }
}

footer {
  display:flex;
  flex-direction: column;
  font-size: 0.5em;
  background: rgb(79,79,80);
  background: linear-gradient(180deg, rgba(79,79,80,0) 0%, rgba(24,24,24,0.4261904590937937) 15%, rgba(0,0,0,0.767927153771665) 30%); 
  width:100%;
  height:50px;
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
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
