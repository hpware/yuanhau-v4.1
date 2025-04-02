<script setup lang="ts">
const searcharea = ref("");
const router = useRouter();

const submitsearch = async (e: Event) => {
  e.preventDefault();
  router.push(
    `/search/query?filter=${searcharea.value.replace(/ /g, "^%^%")}&search=search`,
  );
};
</script>
<template>
  <div class="searchcontent">
    <div class="chatbot-content">
      <h1>Search Anything</h1>
      <form id="askai" @submit.prevent="submitsearch">
        <input v-model="searcharea" placeholder="Search Anything" />
        <button><i class="bi bi-search"></i></button>
      </form>
      <div class="footer">
        <span>Powered by yuanhau.com/search</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
div.searchcontent {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
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
  div.footer {
    font-size: 0.4em;
  }
}
</style>
