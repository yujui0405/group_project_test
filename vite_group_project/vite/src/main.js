// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from "vue"
import router from "@/router/index.js"
import App from './App.vue'
import './assets/css/style.css'


createApp(App).use(router).mount('#app')
