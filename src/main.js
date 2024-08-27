/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import moment from 'moment'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.config.globalProperties.$longDateFormat = (date) => {
  return moment(date).format('dddd Do MMMM YYYY');
};

registerPlugins(app)

app.mount('#app')
