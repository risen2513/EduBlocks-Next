<template>
  <div :class="[view === 'Split' ? 'splitBlockly' : 'fullBlockly']">
    <div class="blocklyDiv" ref="blocklyDiv"></div>
    <xml ref="blocklyToolbox" style="display:none">
      <slot></slot>
    </xml>
  </div>
</template>

<script>
import { mode, view, blocklyDiv } from "../../scripts/state/useState";
import { loadBlockly } from "./Blockly.ts";

export default {
  name: "BlocklyComponent",
  data() {
    return {
      workspace: null
    };
  },
  mounted() {
    const options = this.$props.options || {};
    if (!options.toolbox) {
      options.toolbox = this.$refs["blocklyToolbox"];
    }
    this.workspace = loadBlockly();
  },
  methods: {
    updateMode() {
      mode.value = "Python";
      loadBlockly();
    }
  },
  setup() {
    return { mode, view, blocklyDiv };
  }
};
</script>

<style>
.blocklyDiv {
  width: 100%;
  position: relative;
  height: calc(100vh - 5.25em);
  overflow: hidden;
}

.blocklyFlyoutLabelText {
  fill: white;
}

.splitBlockly {
  width: 60%;
}

.fullBlockly {
  width: 100%;
}
</style>
