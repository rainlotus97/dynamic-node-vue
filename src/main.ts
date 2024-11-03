import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 使用本地调试
import { DynamicNodeVue } from './package/index';
// 使用npm包
// import { DynamicNodeVue } from 'dynamic-node-vue';
import { cardInit } from './utils/index';

// 注册本地卡片
cardInit();

const app = createApp(App);

app.use(DynamicNodeVue);

app.mount('#app');