<template>
  <div id="app">
    <Blockly />
  </div>
</template>

<script>
import Blockly from "../components/blockly/Blockly.vue";

export default {
  name: "page",
  components: {
    Blockly
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
