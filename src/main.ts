import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./scripts/state/useIcons";

createApp(App)
  .use(router)
  .mount("#app");
