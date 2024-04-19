
//import './style.css'

import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import { setupCalendar } from 'v-calendar';

createApp(App)
  .use(vuetify)
  .use(VCalendar, {})
  .use(setupCalendar, {})
  .mount('#app');

