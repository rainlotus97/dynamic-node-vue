<template>
    <div :class="id" :style="style">
        <!-- 如果类型是component则展示card，否则展示layout -->
        <component v-for="(child, index) in children" :key="index"
            :is="child.type === LayoutType.COMPONENT?RegisterCard.getCard(child.id):RegisterLayout.getLayout(child.id)"
            v-bind="child.type === LayoutType.COMPONENT ? child?.data : child" :style="child.style" />
    </div>
</template>
    
<script setup lang='ts'>
import { RegisterCard } from '../../utils/registerCard';
import { RegisterLayout } from '../../utils/registerLayout';
import { NodeType, LayoutType } from '../../index';
// 定义子组件类型
defineProps<NodeType>();

</script>
    
<style scoped>
.flhnode {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.flvnode {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}
</style>