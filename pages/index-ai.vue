<script setup lang="ts">
const { locale, t } = useI18n();

useHead({
  title: `${t("home.title")} | ${t("yhname")}`,
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

const chatbot = async () => {};
</script>
<template>
  <div class="loadingtomainanimation">
    <!--btw, this can just be a video playing. This is just a reminder for future me.-->
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
            <h1>{{ t("yhname") }}</h1>
            <div class="info">{{ t("home.introduction") }}</div>
            <p class="socials">
              <a
                href="https://github.com/hpware"
                aria-label="github"
                id="github"
                ><i class="bi bi-github"></i
              ></a>
              <a
                href="https://discord.com/users/918723093646684180"
                aria-label="Discord"
                id="Discord"
                ><i class="bi bi-discord"></i
              ></a>
              <a
                href="https://instagram.com/yhw_tw"
                aria-label="instagram"
                id="instagram"
                ><i class="bi bi-instagram"></i
              ></a>
              <a
                href="https://threads.net/yhw_tw"
                aria-label="threads"
                id="threads"
                ><i class="bi bi-threads"></i
              ></a>
              <a href="https://yhw.tw/bluesky" aria-label="bluesky" id="bluesky"
                ><i class="fab fa-bluesky"></i
              ></a>
              <a href="https://twitter.com/ictechz" aria-label="Twitter (X)">
                <i class="bi bi-twitter"></i>
              </a>
              <a
                href="https://youtube.com/@號"
                aria-label="youtube"
                id="youtube"
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
            <a href="#content"
              ><i class="bi bi-arrow-down"></i
              ><span>&nbsp;{{ t("home.learnmore") }}</span></a
            >
          </div>
        </div>
        <div
          class="displaybackground"
          style="--displaybackground-height: 60dvh"
        ></div>
        <section id="content">
          <div class="progress-block">
            <h4>{{ t("home.codeknowledge") }}</h4>
            <div v-if="!progressloading">
              <div class="progress-panel">
                <div v-for="list in progress" :key="list.id">
                  <div>
                    <label
                      :for="list.lang"
                      v-if="list.icon"
                      v-html="`<i class='bi bi-${list.icon}'><i>: `"
                    ></label>
                    <label :for="list.lang" v-else>{{ list.lang }}: </label>
                    <progress
                      :id="list.lang"
                      :value="list.progress"
                      max="100"
                    ></progress
                    ><span>&nbsp;{{ list.progress }}%</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <Loader size="20px" />
            </div>
          </div>
          <div
            class="displaybackground"
            style="--displaybackground-height: 10dvh"
          ></div>
          <!--<section id="chatbot" class="chatbot">
            <h3>{{ t("core.chatbot.title") }}</h3>
            <div class="chatbot-content">
              <form @submit.prevent="">
                <textarea
                  :placeholder="'Ex: ' + t('core.chatbot.placeholder')"
                />
                <button><i class="bi bi-arrow-right"></i></button>
              </form>
            </div>
          </section>-->
          <div class="status">
            <!--<section id="spotify">
        Spotify Status:
        <SpotifyStatus />
      </section>-->
            <section id="discord">
              Discord Status:
              <DiscordStatus />
            </section>
          </div>
        </section>
        <div
          class="displaybackground"
          style="--displaybackground-height: 20dvh"
        ></div>
        <footer>
          <span>
            版權 &copy; {{ new Date().getFullYear() }}
            <a href="https://yuanhau.com">吳元皓</a>
          </span>
          <span>使用 Nuxt || 網站 v4.1.3</span>
        </footer>
      </div>
    </transition>
  </div>
</template>
<style>
:root {
  --displaybackground-height: 80dvh;
}
</style>
<style scoped>
/**It works?? */
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
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  filter: brightness(0.85);
}

.aboutmeinfoblock {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(20, 20, 20, 0.9) 28%,
    rgba(40, 40, 40, 0.8) 56%,
    rgba(60, 60, 60, 0.6) 83%,
    rgba(0, 0, 0, 0) 100%
  );
  height: 100dvh;
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(4px);
}

.displaybackground {
  width: 100%;
  height: var(--displaybackground-height);
}

.aboutme {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0;
  padding: 20px;
  text-align: center;
  
  h1 {
    margin: 16px 0;
    font-size: 3.2em;
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    background: linear-gradient(90deg, #ffffff, #d0d0d0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s infinite;
  }
  
  a {
    text-decoration: none;
    color: white;
    transition: all 0.2s ease;
  }
  
  a:hover {
    color: #b3b3b3;
    transform: translateY(-2px);
  }
  
  NuxtImg,
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    align-self: center;
    margin-bottom: 16px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    border: 3px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }
  
  img:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.4);
  }
  
  .info {
    max-width: 700px;
    align-self: center;
    text-align: center;
    font-size: 1.1em;
    line-height: 1.6;
    padding: 20px;
    margin: 0 auto 20px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
    
    a {
      border-bottom: 1px dotted rgba(255, 255, 255, 0.5);
      padding-bottom: 1px;
    }
    
    a:hover {
      border-color: rgba(255, 255, 255, 0.8);
    }
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0 auto;
    max-width: 500px;
    flex-wrap: wrap;
    
    a {
      color: white;
      transition: all 0.2s ease;
      margin: 10px;
      font-size: 1.5em;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    a:hover {
      color: #ffffff;
      background-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
  }
}

.scrolldown {
  justify-content: center;
  align-self: center;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  animation: bounce 2s infinite;
  
  a {
    color: white;
    text-decoration: none;
    font-size: 1.1em;
    padding: 12px 24px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 30px;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    backdrop-filter: blur(5px);
  }
  
  a:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
  
  i {
    margin-right: 5px;
  }
}

.progress-block {
  width: 100%;
  background: rgba(38, 38, 38, 0.95);
  padding: 40px 20px;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
  
  h4 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 1.8em;
    font-weight: 600;
  }
}

.progress-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 800px;
  margin: 0 auto;
  
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 5px 0;
    
    label {
      min-width: 120px;
      text-align: right;
      padding-right: 15px;
      font-weight: 500;
    }
    
    progress {
      flex-grow: 1;
      height: 12px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      border: none;
    }
    
    progress::-webkit-progress-bar {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
    
    progress::-webkit-progress-value {
      background: linear-gradient(90deg, #4a9fff, #835fff);
      border-radius: 10px;
      transition: width 1s ease-in-out;
    }
    
    span {
      min-width: 50px;
      text-align: right;
    }
  }
}

div.status {
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(20, 20, 20, 0.8);
  
  section {
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background-color: rgba(38, 38, 38, 0.5);
    backdrop-filter: blur(10px);
  }
  
  section#discord {
    padding: 20px;
    font-weight: 500;
    font-size: 1.1em;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 0.5px;
  }
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  font-size: 0.7em;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 40%
  );
  width: 100%;
  gap: 10px;
  text-align: center;
  
  span {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
  
  span:hover {
    opacity: 1;
  }
  
  a {
    color: #4a9fff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
}

/** Animations */
@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
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

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .aboutme {
    h1 {
      font-size: 2.5em;
    }
    
    .info {
      font-size: 1em;
      padding: 15px 10px;
    }
    
    img {
      width: 180px;
      height: 180px;
    }
    
    .socials a {
      margin: 8px;
      font-size: 1.3em;
    }
  }
  
  .scrolldown a {
    font-size: 1em;
    padding: 10px 20px;
  }
  
  .progress-panel div {
    label {
      min-width: 100px;
      font-size: 0.9em;
    }
  }
}

@media screen and (max-width: 480px) {
  .aboutme {
    h1 {
      font-size: 2em;
      margin: 10px 0;
    }
    
    img {
      width: 150px;
      height: 150px;
    }
    
    .info {
      font-size: 0.9em;
      padding: 10px 5px;
    }
    
    .socials a {
      margin: 6px;
      font-size: 1.2em;
      width: 35px;
      height: 35px;
    }
  }
  
  .scrolldown {
    bottom: 20px;
    
    a {
      padding: 8px 16px;
      font-size: 0.9em;
    }
  }
  
  .progress-block {
    padding: 30px 10px;
    
    h4 {
      font-size: 1.5em;
      margin-bottom: 20px;
    }
  }
  
  .progress-panel div {
    flex-direction: column;
    align-items: flex-start;
    
    label {
      text-align: left;
      padding-bottom: 5px;
    }
    
    progress {
      width: 100%;
    }
    
    span {
      align-self: flex-end;
    }
  }
}

@media screen and (max-height: 570px) {
  .aboutme {
    h1 {
      font-size: 1.8em;
      margin: 5px 0;
    }
    
    img {
      width: 120px;
      height: 120px;
      margin-bottom: 10px;
    }
    
    .info {
      font-size: 0.8em;
      padding: 5px;
    }
  }
  
  .scrolldown {
    bottom: 10px;
  }
}
</style>
