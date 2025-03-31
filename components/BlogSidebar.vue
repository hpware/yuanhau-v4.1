<script setup lang="ts">
import Loader from "~/components/loading/randomloader.vue";
const years = ref([]);
const tags = ref([]);
const searcharea = ref("");
const jsonsearchquery = ref();

const submitsearch = async (e: Event) => {
  e.preventDefault();
  const req = await fetch("/api/blog/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      search: searcharea,
    })
  })
  const res = await req.json();
  jsonsearchquery.value = JSON.stringify(res);
}
</script>
<template>
  <div class="sidebar">
    <div class="chatbot-content">
      <form id="askai" @submit.prevent="submitsearch">
        <input v-model="searcharea" placeholder="Search Anything" />
        <button><i class="bi bi-search"></i></button>
      </form>
    </div>
    <div class="year">
      <div class="year-item">
        <a href="" v-for="i in years" :key="i"
          ><span>{{ i }}</span></a
        >
      </div>
    </div>
    <div class="tags">
      <div class="tag-item">
        <a href="" v-for="i in tags" :key="i"
          ><span>{{ i }}</span></a
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
div.chatbot-content {
  padding-top: 0;
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  form {
    padding-top: 0;
    background-color: rgb(38, 38, 38);
    width: 80%;
    justify-content: center;
    align-self: center;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center !important;
    max-width: 500px;
    border-radius: 20px;
    margin: 0 auto;
    padding: 5px 15px;
    border: 2px solid white;
    button {
      color: white;
      background-color: rgb(38, 38, 38);
      border: 0px;
    }
    button:hover {
      color: rgb(169, 168, 168);
    }
  }
  input {
    width: calc(100% - 30px);
    height: 30px;
    justify-content: left;
    align-self: left;
    align-items: left;
    text-align: start;
    background-color: rgb(38, 38, 38);
    color: white;
    font-size: 0.8em;
    border: 0px;
    transition: all 300ms ease-in-out;
    border-radius: 20px;
    resize: none;
    outline: none;
    align-self: center;
    padding: 8px 0 8px 5px;
  }

  input:hover {
    background-color: rgba(38, 38, 38, 0.788);
  }

  input ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
}
</style>
