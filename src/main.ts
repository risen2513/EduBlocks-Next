import { createApp } from "vue";
import App from "./App.vue";

import { createI18n } from "vue-i18n";

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import "./scripts/state/useIcons";
import "./assets/css/main.css";
import "./assets/css/xterm.css";

import "@/scripts/state/useFirebase";

import { VueClipboard } from "@soerenmartius/vue3-clipboard";

import { en, fr } from "@/languages/index";

const messages = {
  en: en,
  fr: fr
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages
});

createApp(App)
  .use(VueClipboard)
  .use(i18n)
  .use(Toast, {
    position: POSITION.TOP_CENTER,
    maxToasts: 2
  })
  .mount("#app");
