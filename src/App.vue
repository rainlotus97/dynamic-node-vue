<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { NodeType } from './package/index';
let layout = ref({} as NodeType)

onMounted(async () => {
    console.log('mounted');
    // 请求本地json数据，模拟云端请求
    const response = await fetch('./mockJson.json')
    layout.value = await response.json() as NodeType;
    console.log(layout);
});

</script>

<template>
    <dynamic-node :data="layout" />
</template>

<style scoped>

</style>
