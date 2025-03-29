<script setup lang="ts">
const { t } = useI18n();
</script>
<template>
  <div class="background"></div>
  <div class="chatbot-content">
    <h3>Ask AI</h3>
    <form @submit.prevent="">
      <textarea :placeholder="'Ex: ' + t('core.chatbot.placeholder')" />
      <button><i class="bi bi-arrow-right"></i></button>
    </form>
  </div>
  <footer>
    Powered by <a href="https://groq.com" style="font-size: 0.8em">Groq</a>
  </footer>
</template>
<style scoped>
div.background {
  background-color: rgb(18, 20, 24);
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transition: all 100ms ease-in-out;
}

div.chatbot-content {
  width: 100%;
  height: calc(100dvh-50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0;
  h3 {
    color: white;
    text-align: center;
    margin: 20px 0 30px;
    font-size: 1.8rem;
  }
  form {
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
    position: absolute;
    left: 0;
    right: 0;
    max-width: 500px;
    border-radius: 20px;
    margin: 0 auto;
    padding: 5px 15px;
    button {
      color: white;
      background-color: rgb(38, 38, 38);
      border: 0px;
    }
    button:hover {
      color: rgb(169, 168, 168);
    }
  }
  textarea {
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

  textarea:hover {
    background-color: rgba(38, 38, 38, 0.788);
  }

  textarea::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
}

footer {
  font-size: 0.5em;
  color: white;
  a {
    color: white;
  }
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
