<template>
    <img class="img_card" :src="src" alt="">
</template>
    
<script setup lang='ts'>
import { ImageDataType } from './ImageBaseData';
// 定义子组件类型
defineProps<ImageDataType>();

</script>
    
<style scoped>
.img_card {
    width: 200px;
    height: 100%;
    max-width: 200px;
}
</style>