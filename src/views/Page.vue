<template>
  <div id="app" style="display: flex;">
    <Blockly v-show="view !== 'Python'" />

    <codemirror
      :value="pythonCode"
      :options="{
        mode: 'python',
        lineNumbers: true,
        theme: 'material-darker',
        readOnly: true
      }"
      :class="[view === 'Python' ? 'fullPython' : 'python']"
      v-if="view !== 'Blocks'"
    ></codemirror>

    <Modals />
  </div>
</template>

<script>
import Blockly from "../components/blockly/Blockly.vue";
import { useToast } from "vue-toastification";
import { onMounted } from "vue";

import { pythonCode, view } from "../scripts/state/useState";
import Modals from "./Modals.vue";

import { codemirror } from "vue-codemirror-lite";
import "codemirror/mode/python/python";
import "codemirror/theme/material-darker.css";

export default {
  name: "page",
  components: {
    Blockly,
    codemirror,
    Modals
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

    return { pythonCode, view };
  }
};
</script>

<style>
html,
body {
  margin: 0;
}

.CodeMirror {
  height: 100%;
}

.python {
  width: 40%;
}

.fullPython {
  width: 100%;
  height: calc(100vh - 5.25em);
}

.Vue-Toastification__container {
  z-index: 100000 !important;
}

.Vue-Toastification__toast-body {
  line-height: 37px !important;
}
</style>
