<script setup lang="ts">
// Setup
import { onMounted, ref } from "vue";
import Loader from "~/components/loading/randomloader.vue";

// Set Vars for this thingy
const statusColor = ref("");
const statusIcon = ref("");
const status = ref("");
const username = ref("");
const userid = ref("");
const displayname = ref("");
const avatarURL = ref("");
const text = ref([
  {
    logos: "",
    text: "",
  },
]);
const error = ref("");
const errorb = ref(false);
const loading = ref(false);

// Function
const pullDiscordStatus = async () => {
  try {
    loading.value = true;
    text.value = [];
    const response = await fetch(
      "https://api.lanyard.rest/v1/users/918723093646684180",
    );
    const dcdata = await response.json();
    const DiscordStatus = dcdata.data.discord_status;
    // Status set & color
    if (DiscordStatus === "online") {
      statusColor.value = "color:#23a459;";
      statusIcon.value = "bi-circle-fill";
      status.value = t("dcstatus.online");
    } else if (DiscordStatus === "idle") {
      statusColor.value = "color:#eeb132;";
      statusIcon.value = "bi-moon-fill";
      status.value = t("dcstatus.idle");
    } else if (DiscordStatus === "dnd") {
      statusColor.value = "color:#f03f42";
      statusIcon.value = "bi-circle-fill";
      status.value = t("dcstatus.dnd");
    } else {
      statusColor.value = "color:grey";
      statusIcon.value = "bi-circle-fill";
      status.value = t("dcstatus.offline");
    }
    const dcuser = dcdata.data.discord_user;
    displayname.value = dcuser.display_name;
    username.value = dcuser.username;
    userid.value = dcuser.id;
    avatarURL.value = `https://cdn.discordapp.com/avatars/${dcuser.id}/${dcuser.avatar}.webp?size=256,128`;
    for (const data in dcdata.data.activities) {
      // Activity Listening to Spotify, Playing Games or Coding
      console.log(JSON.stringify(data));
      const ActivityStatus0 = dcdata.data.activities[data];
      if (ActivityStatus0) {
        if (ActivityStatus0.type === 0) {
          if (
            ActivityStatus0.name === "WebStorm" ||
            ActivityStatus0.name === "Visual Studio Code" ||
            ActivityStatus0.name === "PyCharm" ||
            ActivityStatus0.name === "Code" ||
            ActivityStatus0.name === "IntelliJ IDEA" ||
            ActivityStatus0.name === "Zed"
          ) {
            const FileNameStatus = ref(ActivityStatus0.state);
            const ProjectName = ref(ActivityStatus0.details);
            text.value.push({
              text: `${FileNameStatus.value} ${ProjectName.value}`,
              logos: "braces",
            });
          } else {
            const ActivityName = ref(ActivityStatus0.name);
            text.value.push({
              text: `Playing ${ActivityName.value}`,
              logos: "controller",
            });
          }
        } else if (ActivityStatus0.type === 2) {
          const SpotifyCurrentlyPlayingSong = ref(ActivityStatus0.details);
          const SpotifyCurrentlyPlayingArtist = ref(ActivityStatus0.state);
          const SpotifyCurrentlyPlayingArtistComma = ref(
            SpotifyCurrentlyPlayingArtist.value.replace(/;/g, ", "),
          );
          const SpotifyCurrentlyPlaying = `${SpotifyCurrentlyPlayingSong.value} - ${SpotifyCurrentlyPlayingArtistComma.value}`;
          text.value.push({ text: SpotifyCurrentlyPlaying, logos: "spotify" });
        } else if (ActivityStatus0.type === 3) {
          const Watching = ActivityStatus0.name;
          const Details = ref(ActivityStatus0.details);
          text.value.push({
            text: `Watching: ${Watching} - ${Details}`,
            logos: "camera-video",
          });
        } else if (ActivityStatus0.type === 4) {
          const ActivityName = ref(ActivityStatus0.state);
          text.value.push({
            text: `Status: ${ActivityName.value}`,
            logos: "activity",
          });
        }
      }
    }
    loading.value = false;
  } catch (error) {
    errorb.value = true;
    loading.value = false;
  } finally {
    loading.value = false;
  }
};
onMounted(async () => {
  pullDiscordStatus();
  const intervalId = setInterval(() => {
    pullDiscordStatus();
  }, 600000);

  onUnmounted(() => {
    clearInterval(intervalId);
  });
});

const { t } = useI18n();
const min = 1000;
const max = 500;
const math = ref();
onMounted(() => {
  const interval = setInterval(() => {
    math.value = Math.floor(Math.random() * (max - min + 1) + min);
  }, 5000);
  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <a :href="`https://discord.com/users/${userid}`" class="component">
    <div class="main">
      <div v-if="loading">
        <div class="loading">
          <div
            class="loader"
            :style="{
              animationDuration: `${math}ms`,
            }"
          ></div>
          <p class="loader-p">{{ t("loading") }}...</p>
        </div>
      </div>
      <div v-if="!loading">
        <span class="onlinepr" v-if="errorb"
          ><i class="bi bi-circle-fill" style="color: grey"></i>&nbsp;
          <span>Error fetching Status.</span>
        </span>
        <div class="userinfo" v-if="!errorb">
          <NuxtImg :src="avatarURL" />
          <div class="username">
            <h3>{{ displayname }}</h3>
            <h4>{{ username }}</h4>
            <span class="onlinepr"
              ><i class="bi" :class="statusIcon" :style="statusColor"></i
              >&nbsp;<span>{{ status }}</span></span
            >
          </div>
        </div>
        <span class="onlinepr" v-if="!errorb"
          >&nbsp;
          <div v-for="i in text" :key="i.text">
            <i :class="`bi bi-${i.logos}`"></i>&nbsp;{{ i.text }}<br />
          </div>
        </span>
      </div>
    </div>
  </a>
</template>

<style scoped>
.component {
  color: white;
  text-decoration: none;
  overflow: hidden;
}
div.main {
  color: white;
  padding: 10px;
  border-radius: 10px;
  min-width: 400px;
  max-width: 400px;
  height: 200px !important;
  min-height: 200px;
  max-height: 200px;
  background-color: rgb(38, 38, 38);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  transition: all 300ms ease-in-out;
}
div.main:hover {
  background-color: #000;
}
.userinfo {
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  text-align: left;
  h4 {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .onlinepr {
    text-align: left;
    margin-top: 0;
    padding-top: 0;
  }
}
NuxtImg,
img {
  width: 80px;
  height: 80px;
  margin-left: 30px;
  object-fit: cover;
  margin-bottom: 10px;
  display: block;
  border-radius: 20px;
}
h3 {
  margin: 5px 0 0 0;
  font-size: 1.2em;
}
h4 {
  margin: 2px 0 5px 0;
  font-size: 0.9em;
  opacity: 0.8;
  text-align: left;
}
.onlinepr {
  font-size: 0.6em;
  margin-top: 0em;
}
.fontsize1 {
  font-size: 1.123em;
}
@media (max-width: 700px) {
  .onlinepr {
    font-size: 0.5em;
  }
}
.loading {
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
  border: 5px solid rgba(255, 255, 255, 0.1);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-top-color: #0e69f2;
  animation: spin 1s linear infinite;
  margin-bottom: 0;
}
.loader-p {
  text-align: center;
  margin-top: 10px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@media only screen and (max-width: 300px) {
  div.main {
    margin: 0;
    overflow: hidden;
  }
}
</style>
