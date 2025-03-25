<script setup lang="ts">
useHead({
  title: "首頁 | 吳元皓",
});
// Init
import DiscordStatus from "~/components/DiscordStatus.vue";
</script>
<template>
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
    我是一個五專生，我對Typescript與Javascipt有興趣(現在不只網頁了)，我也對伺服器(就是Linux)極度有興趣。
  </div>
  <div class="progress">
    <label for="javascript">JS:</label>
    <progress id="javascript" value="32" max="100"></progress>
    <label for="server">Server shit:</label>
    <progress id="server" value="32" max="100"></progress> 
    <label for="python">Python??:</label>
    <progress id="python" value="32" max="100"></progress>  
  </div>
  <div class="status">
  <section id="spotify">
    Spotify Status:
  </section>
  <section id="discord">
    Discord Status:
    <DiscordStatus />
  </section>
</div>

</template>
<style scoped>
.aboutme {
  justify-content:center;
  padding-left: 20px;
  padding-top :20px;
  display:flex;
  NuxtImg,img {
    width:100px;
    height: 100px;
    border-radius: 50px;
  }
}
.info {
  width: calc(100% - 50px);
  align-self:center;
  text-align:center;
  align-content:center;
  justify-content: center;
  padding: 20px;
}
.progress {
  display:flex;
  flex-direction: column;
  justify-content:center;
  progress {
    width: 80%;
    justify-content:center;
    align-self:center;
  }
}
div.status {
  gap: 10px;
  padding: 10px;
  section {
    gap:10px;
    padding:10px;
  }
}
</style>
