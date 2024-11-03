<template>
    <h1>{{ title }}</h1>
</template>
    
<script setup lang='ts'>
import { TitleDataType } from './TitleCardBaseData';
// 定义子组件类型
defineProps<TitleDataType>();
</script>
    
<style scoped>
h1 {
    font-size: 28px;
    color: #333;
}
</style>