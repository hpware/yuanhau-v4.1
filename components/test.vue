<script setup lang="ts">
const content = ref();

onMounted(async () => {
    const req = await fetch("/api/home/chat",  {
        method: "POST",
        body: JSON.stringify({
            content: "Who is Howard?",
            accesstoken: "adfdfasfffdsddsffs"
        })
    })
    const res = await req.json();
    content.value = JSON.stringify(res);
})
</script>

<template>
    <p>{{ content }}</p>
</template>