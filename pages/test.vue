<script setup>
const { locale, t, setLocale } = useI18n();

function switchLocale(localeCode) {
  locale.value = localeCode;
}
</script>

<template>
  <div>
    <div>
      <button @click="setLocale('en')">English</button>
      <button @click="setLocale('zh-tw')">繁體中文</button>
      <p>{{ t("yhname") }}</p>
      <p>Current locale: {{ locale }}</p>
    </div>
  </div>
</template>
