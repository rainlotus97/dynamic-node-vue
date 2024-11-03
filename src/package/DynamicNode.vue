<template>
    <div class="container">
        <component :is="RegisterLayout.getLayout(data?.id)" v-bind="data!" :style="data?.style" />
    </div>
</template>
  
<script lang="ts" setup>
import './css/node.css';
import { DynamicComponent } from './common/common';
import { RegisterLayout } from './utils/registerLayout';
// 定义子组件类型
defineProps<DynamicComponent>();

</script>
  
<style scoped>
/* 基本的样式 */
.container {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    width: 100vw;
    height: 100vh;
}
</style>