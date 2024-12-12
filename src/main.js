import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"


const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)
	.use(pinia)
	.use(router)

app.mount('#app')
