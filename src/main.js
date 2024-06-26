import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import { aliases, fa } from 'vuetify/iconsets/fa-svg'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { mdi } from 'vuetify/iconsets/mdi'

import '@mdi/font/css/materialdesignicons.css'
const vuetify = createVuetify({
  components,
  directives,
  // icons: {
  //   defaultSet: 'fa',
  //   aliases,
  //   sets: {
  //     fa,
  //     mdi
  //   }
  // }
})

const app = createApp(App)

// app.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
// library.add(fas) // Include needed solid icons
// library.add(far) // Include needed regular icons

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
