import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App)
app.use(pinia);
app.use(Vueform, vueformConfig);
app.mount('#app');