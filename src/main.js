/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import store from './store/index'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import { createApp } from 'vue'

loadFonts()


// Create vue app
const app = createApp(App)


// Use plugins
app.use(store)
app.use(vuetify)
app.use(router)

// Mount vue app
app.mount('#app')
