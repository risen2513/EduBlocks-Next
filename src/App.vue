<template>
  <div class="flex-1">
    <Nav />
    <Toolbar />
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Toolbar from "./components/Toolbar.vue";
import wb from "./registerServiceWorker";

export default {
  name: "app",
  components: {
    Nav,
    Toolbar
  },
  methods: {
    async update() {
      this.prompt = false;
      await wb.messageSW({ type: "SKIP_WAITING" });
    }
  },

  data() {
    return {
      prompt: false
    };
  },
  created() {
    if (wb) {
      wb.addEventListener("waiting", () => {
        this.prompt = false;
      });
    }
  }
};
</script>

<style>
h1 {
  padding: 0px !important;
}

.page {
  height: 100%;
  position: relative;
  padding-top: 5.255em;
  background-color: white;
}
</style>

<style lang="scss">
.update-dialog {
  position: fixed;
  left: 50%;
  bottom: 64px;
  transform: translateX(-50%);
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 12px;
  max-width: 576px;
  color: white;
  background-color: #2c3e50;
  text-align: left;
  &__actions {
    display: flex;
    margin-top: 8px;
  }
  &__button {
    margin-right: 8px;
    &--confirm {
      margin-left: auto;
    }
  }
}
</style>
