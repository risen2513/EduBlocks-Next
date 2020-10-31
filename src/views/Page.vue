<template>
  <div id="app">
    <Blockly />
  </div>
</template>

<script>
import Blockly from "../components/blockly/Blockly.vue";
import "../blocks/index.ts";
import { useMode } from "../scripts/state/useMode";

export default {
  name: "page",
  components: {
    Blockly
  },
  setup() {
    const { currentMode } = useMode();

    return {
      currentMode
    };
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
</style>
