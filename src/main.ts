import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./scripts/state/useIcons";
import "./main.css";

createApp(App)
  .use(router)
  .mount("#app");
