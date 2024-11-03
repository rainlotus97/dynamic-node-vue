import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { DynamicNodeVue } from './package/index';
import { cardInit } from './utils/index';

// 注册本地卡片
cardInit();

const app = createApp(App);

app.use(DynamicNodeVue);

app.mount('#app');