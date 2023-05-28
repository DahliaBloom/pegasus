import './style.css'

import { createApp } from 'vue'
import FlagIcon from 'vue-flag-icon'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(FlagIcon);

app.mount('#app')
