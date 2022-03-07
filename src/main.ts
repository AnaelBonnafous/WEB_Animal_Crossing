import { createApp } from "vue";

import { createPinia } from "pinia";

import router from "@/router";

import { Quasar } from "quasar";
import quasarIconSet from "quasar/icon-set/svg-fontawesome-v5";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import "quasar/src/css/index.sass";

import '@/assets/scss/main.scss'

import App from "@/App.vue";

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.use(Quasar, {
  plugins: {},
  iconSet: quasarIconSet,
});

app.mount("#app");
