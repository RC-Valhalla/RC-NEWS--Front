import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import './styles/base/bootstrap-v7.0.5.css'
import './styles/globals.scss'

// todo: separate theses custom css files into an organized structure of a
// bunch of scss files for each page and layout; components can have their
// styles in the same vue file if it is simple

// import './styles/dashboard.css'
// import './styles/perfil.css'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
