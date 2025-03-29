<script setup lang="ts">
import { ref } from "vue";
import Loading from "@/components/loading/randomloader.vue";
import SideBar from "~/components/BlogSidebar.vue";
const { t } = useI18n();
const loading = ref(false);
const error = ref(false);
const errormsg = ref("");
const data = ref();
useHead({
  title: `${t("nav.blog")} | | ${t("yhname")}`,
});
const fdate = (dateString: string) => {
  try {
    const D1 = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("zh-TW", D1);
  } catch (e) {
    console.error(JSON.stringify(e));
  }
};
const fetchPosts = async (filter?: string) => {
  try {
    console.log(filter);
    const fetchreq = await fetch(`/api/blog/list?filter=${filter}`);
    const fetchres = await fetchreq.json();
    data.value = fetchres;
    loading.value = false;
  } catch (e) {
    error.value = true;
    errormsg.value = e.message;
  }
};

const route = useRoute();
const q = route.query;
onMounted(() => {
  if (q.id === "tags") {
    fetchPosts(q.tags);
  } else if (q.id === "year") {
    fetchPosts(q.year);
  } else {
    fetchPosts();
  }
});
</script>
<template>
  <div class="main" id="main">
    <div class="top">
      <h1 class="title">{{ t("title.blog") }}</h1>
      <h6 class="dec">{{ t("blog.description") }}</h6>
    </div>
    <Loading v-if="loading" />
    <div v-else>
      <div v-if="error">
        <p>Oops! 暫時無法存取部落格資料!</p>
        <p>{{ errormsg }}</p>
      </div>
      <div v-else>
        <SideBar />
      </div>
    </div>
  </div>
</template>
<style scoped>
h1.title {
  margin-bottom: 0;
  font-size: 2.5em;
}
h6.dec {
  margin-top: 0;
}
h1 {
  margin-bottom: 0;
}
.card {
  text-decoration: none;
  color: white;
  div.a {
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #33333327;
    border-radius: 10px;
    margin: 1em;
    border: 2px solid transparent;
    transition: all 300ms;
    h2 {
      margin-bottom: 0;
      text-align: left;
    }
    p {
      margin-top: 0;
      color: rgb(153, 153, 153);
    }
  }
  div.a:hover {
    border-color: rgb(71, 166, 255);
    filter: drop-shadow(0 0 2em #646464aa);
  }
  .title {
    display: flex;
    span {
      color: rgb(153, 153, 153);
      text-align: left;
      align-items: left;
      justify-content: left;
      margin-left: auto;
      align-self: self-end;
    }
  }
}
@media (max-width: 502px) {
  h1.title {
    font-size: 2em;
  }
  h6.dec {
    font-size: 0.8em;
  }
  .card {
    div.a {
      padding: 10px;
      background-color: #33333350;
      border-radius: 15px;
      margin: 1em;
      border: 1px solid transparent;
      transition: all 300ms;
      h2 {
        margin-bottom: 0;
        text-align: left;
      }
      p {
        margin-top: 0;
        color: rgb(153, 153, 153);
        font-size: 0.6em;
      }
    }
    .title {
      display: block;
      span {
        color: rgb(153, 153, 153);
        text-align: left;
        align-items: left;
        justify-content: left;
        margin-left: auto;
        font-size: 0.7em;
        align-self: left;
      }
    }
  }
}
.footer {
  align-content: end;
  align-items: end;
  text-align: center;
  position: absolute;
  display: grid;
  left: 0;
  right: 0;
  p {
    font-size: 0.5em;
    margin-top: 0.1em;
    margin-bottom: 0;
  }
  p.end {
    margin-bottom: 0.5em;
    margin-top: 0.1em;
    font-size: x-large;
    color: rgb(169, 169, 169);
  }
  a {
    text-decoration: none;
    color: white;
    transition: all 200ms;
  }
  a:hover {
    color: rgb(169, 169, 169);
  }
  margin-top: 1em;
  margin-bottom: 1em;
}
div.list {
  animation: fade-in 700ms ease-in-out;
}
.search {
  display: flex;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 1em;
  form {
    display: flex;
    input {
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #333333;
      margin-right: 5px;
    }
    button {
      padding: 5px;
      border-radius: 5px;
      background-color: #333333;
      color: white;
      transition: all 500ms;
    }
    button:hover {
      border: 1px solid #9afa9a;
    }
  }
}
@media (max-width: 500px) {
  .top {
    font-size: 0.9em;
    .dec {
      font-size: 0.8em;
    }
  }
  .footer {
    p {
      font-size: 0.4em;
    }
    p.end {
      font-size: 0.8em;
    }
  }
  .card {
    margin-top: 0;
    .a {
      margin-top: 0;
    }
    .title {
      h2 {
        font-size: 0.9em;
      }
    }
  }
}
div.not-found {
  p {
    color: gray;
  }
}
.adminpanel {
  a {
    color: #2599ba;
  }
  a:hover {
    color: #1a728c;
  }
}
</style>
