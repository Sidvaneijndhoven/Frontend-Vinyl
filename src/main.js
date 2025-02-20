import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './style.css';  
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'; 

import "./assets/script/script.js";

const app = createApp(App);

// Use the Toast plugin
app.use(Toast);

app.use(router).mount('#app')
