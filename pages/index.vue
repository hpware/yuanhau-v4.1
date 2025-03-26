<script setup lang="ts">
useHead({
  title: "首頁 | 吳元皓",
});

interface Progress {
  progress: {
    js: number,
    server: number,
    py: number,
  }
}

// Init
import DiscordStatus from "~/components/plugins/discordStatus.vue";
import Loader from "~/components/loading/randomloader.vue";

//values
const loadingProgressPanel = ref(true);

const progress = ref<Progress>({
  progress: {
    js: 0,
    server: 0,
    py: 0,
  }
});
onMounted(async () => {
  progress.value = ({
    progress: {
      js: 32,
      server: 32,
      py: 10,
    }
  })
})
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
    我是一個五專生，我對Typescript與Javascipt有興趣，我也對伺服器(也就是Linux)極度有興趣。
  </div>
  <div v-if="!loadingProgressPanel">
  <div class="progress-panel">
    <div><label for="javascript">JS:</label>
    <progress id="javascript" :value="progress.progress.js" max="100"></progress>
    </div>
    <div>
    <label for="server">Server shit:</label>
    <progress id="server" :value="progress.progress.server" max="100"></progress> 
    </div>
    <div>
    <label for="python">Python??:</label>
    <progress id="python" :value="progress.progress.py" max="100"></progress> 
    </div>
  </div>
  </div>
  <div v-else>
    <Loader size="20px"/>
  </div>
  <div class="status">
  <section id="spotify">
    Spotify Status:
    <SpotifyStatus/>
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
  flex-direction: column;
  h1 {
    margin-top:0;
  }
  NuxtImg,img {
    width:200px;
    height: 200px;
    border-radius: 50%;
    justify-content:center;
    align-self:center;
    left:0;
    right:0;
    align-content:center;
    margin-bottom:0;
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
.progress-panel {
  display:flex;
  flex-direction: column;
  justify-content:center;
  div{
    flex-direction:row;
    justify-content:center;
    align-self:center;
    width:70%;
    progress {
    width: 80%;
    justify-content:center;
    align-self:center;
  }}
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
