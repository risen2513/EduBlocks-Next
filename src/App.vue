<template>
  <div class="flex-1">
    <Nav />
    <Toolbar />
    <div class="page">
      <Page />
    </div>
  </div>
</template>

<script lang="ts">
import Nav from "./components/Nav.vue";
import Toolbar from "./components/Toolbar.vue";
import Page from "./views/Page.vue";

export default {
  name: "app",
  components: {
    Nav,
    Toolbar,
    Page
  }
};
</script>

<style>
h1 {
  padding: 0px !important;
}

.page {
  height: 100%;
  width: 100%;
  position: relative;
  padding-top: 5.255em;
  background-color: white;
}

@media (max-width: 60em) {
  nav .show ~ .menu {
    background: #1b173d;
  }
}
</style>
