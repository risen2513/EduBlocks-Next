import { createApp } from "vue";
import App from "./App.vue";

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import "./scripts/state/useIcons";
import "./assets/css/main.css";
import "./assets/css/xterm.css";

import "@/scripts/state/useFirebase";

import { VueClipboard } from "@soerenmartius/vue3-clipboard";

createApp(App)
  .use(VueClipboard)
  .use(Toast, {
    position: POSITION.TOP_CENTER,
    maxToasts: 2
  })
  .mount("#app");
