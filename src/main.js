import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/scss/main.scss"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ProgressiveImage from './components/ProgressiveImage.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('ProgressiveImage', ProgressiveImage)

app.mount('#app')
