import { createApp } from 'vue'
import App from './App.vue'
import'./scripts/state/useIcons'

import { store } from "./store";

import { createRouter, createWebHistory } from 'vue-router'
import routes from './router/routes'
import { createStore } from 'vuex';

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})


createApp(App).use(router).use(createStore(store)).mount('#app')
