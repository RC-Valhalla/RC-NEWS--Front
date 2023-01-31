import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import './styles/base/bootstrap-v7.0.5.css'
import './styles/globals.scss'

import './styles/home.css'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
