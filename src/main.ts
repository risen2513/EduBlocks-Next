import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import "./scripts/state/useIcons";
import "./assets/css/main.css";

import "@/scripts/state/useFirebase";

createApp(App)
  .use(router)
  .use(Toast, {
    position: POSITION.TOP_CENTER,
    maxToasts: 2
  })
  .mount("#app");
