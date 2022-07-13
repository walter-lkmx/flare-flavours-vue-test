import { createApp } from 'vue'
import App from './App.vue'
import Flare from "@lkmx/flare";
import FlareVue from "@lkmx/flare-vue";

createApp(App)
    .use(Flare)
    .use(FlareVue)
    .mount('#app');