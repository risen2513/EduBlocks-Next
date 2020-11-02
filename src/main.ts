import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import "./scripts/state/useIcons";
import "./assets/css/main.css";

createApp(App)
  .use(router)
  .use(Toast)
  .mount("#app");
