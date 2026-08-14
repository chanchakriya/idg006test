import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.min.js';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app')