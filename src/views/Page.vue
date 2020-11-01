<template>
  <div id="app">
    <Blockly />
  </div>
</template>

<script>
import Blockly from "../components/blockly/Blockly.vue";
import { useToast } from "vue-toastification";
import { onMounted } from "vue";

export default {
  name: "page",
  components: {
    Blockly
  },
  setup() {
    const toast = useToast();

    onMounted(() => {
      if (!navigator.onLine) {
        toast.error(
          "Whoops! Looks like you're offline. Some features are disabled.",
          { timeout: 6000, closeButton: false }
        );
      }

      window.addEventListener("load", () => {
        function handleNetworkChange() {
          if (!navigator.onLine) {
            toast.error(
              "Whoops! Looks like you're offline. Some features are disabled.",
              { timeout: 6000, closeButton: false }
            );
          }
        }

        window.addEventListener("online", handleNetworkChange);
        window.addEventListener("offline", handleNetworkChange);
      });
    });
  }
};
</script>

<style>
html,
body {
  margin: 0;
}

.splitBlockly {
  width: 60%;
}

.fullBlockly {
  width: 100%;
}

.Vue-Toastification__container {
  z-index: 100000 !important;
}

.Vue-Toastification__toast-body {
  line-height: 37px !important;
}
</style>
