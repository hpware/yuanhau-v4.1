<script setup lang="ts">
useHead({
  title: "首頁 | 吳元皓",
});
// Init
import { ref, onMounted } from "vue";
import DiscordStatus from "~/components/legacy/DiscordStatus.vue";
import { marked } from "marked";
import { animate } from "motion";
import { NuxtImg } from "#components";

// Ref
const moreAbout = ref(false);
const handPickedImages = ref(false);
const name = ref("");
const othercooltext = ref("");
const pfp = ref();
</script>
<template>
  <div class="background">
    <section id="aboutme" class="about">
      <br />
      <NuxtImg
        alt="大頭貼"
        class="pfp"
        draggable="false"
        src="/img/pfp-1.jpg"
        v-lazy-load
        load="lazy"
      />
      <h2 class="mbmt0">
        <span style="margin-bottom: 0em" id="zhname">吳元皓</span>
      </h2>
      <DiscordStatus />
      <p class="mbmt0">
        嗨! 我是一個五專生，我對<a href="/images/" style="color: white">攝影</a
        >與前端(與後端)方面有興趣。 <br />習慣並熟悉使用 VueJS, Git &
        Debian(Ubuntu)<br />
      </p>
      <h3 class="buttons">
        <NuxtLink class="not-a-button profilebutton" to="/">主頁</NuxtLink
        >|<NuxtLink class="not-a-button profilebutton" to="/about"
          >關於我</NuxtLink
        >|<NuxtLink class="not-a-button profilebutton" to="/images/"
          >照片</NuxtLink
        >
      </h3>
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
    </section>
  </div>
</template>
<style scoped>
.background {
  background-image: url("/img/tokyo-smallest.jpg");
  background-size: cover;
  margin: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  display: flex;
  background-repeat: no-repeat;
  background-color: #878a8e;
  background-position: center;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  min-height: 100vh;
}
.about {
  text-align: center;
  top: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.38);
  margin: 0;
  min-height: 100vh;
  width: 100%;
}
@keyframes pfp-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.pfp {
  display: block;
  margin: 0 auto 2rem;
  transition: filter 300ms;
  align-items: center;
  border-radius: 50%;
  width: 20%;
  min-width: 250px;
  animation: ease-in 600ms pfp-fade-in;
  margin-bottom: 0em;
}
.pfp:hover {
  filter: drop-shadow(0 0 2em #444444aa);
}
.not-a-button {
  background-color: transparent;
  border: none;
  color: rgba(191, 191, 191, 0.7);
  font-size: 1em;
  cursor: pointer;
  margin-top: 0em;
  margin-bottom: 0em;
  margin-left: 0.5em;
  margin-right: 0.5em;
  text-decoration: none;
}
.button {
  width: 100%;
  font-size: 1em;
  text-align: center;
  display: flex;
  justify-content: center;
}
.profilebutton {
  color: rgb(220, 220, 220);
  transition: all 200ms;
}
.profilebutton:hover {
  color: rgba(204, 204, 204, 0.75);
}
.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    transition: all 200ms;
    margin: 10px;
  }
  a:hover {
    color: #b3b3b3;
  }
}
@media screen and (min-width: 700px) {
  .background {
    position: fixed;
  }
}
@media (max-width: 800px) {
  .profilebutton {
    color: rgb(201, 201, 201);
    transition: all 200ms;
  }
  .profilebutton:hover {
    color: rgba(154, 154, 154, 0.75);
  }
  footer {
    display: none;
  }
  .about {
    font-size: 1em;
  }
  .buttons {
    font-size: 0.86em;
  }
  .socials {
    font-size: 0.8em;
  }
}
.mbmt0 {
  margin-top: 0em;
  margin-bottom: 0em;
}
</style>
