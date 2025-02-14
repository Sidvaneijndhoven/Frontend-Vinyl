import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './style.css';  

import "./assets/script/script.js";
createApp(App).use(router).mount('#app')
