<template>
  <div>
    <div
      :class="[mode === 'Split' ? 'blocklyDiv splitBlockly' : 'blocklyDiv']"
      ref="blocklyDiv"
    ></div>
    <xml ref="blocklyToolbox" style="display:none">
      <slot></slot>
    </xml>
  </div>
</template>

<script>
import { mode } from "../../scripts/state/useState";
import { loadBlockly } from "./Blockly.ts";

export default {
  name: "BlocklyComponent",
  props: {
    options: Object
  },
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
    this.workspace = loadBlockly(this.$refs["blocklyDiv"]);
  },
  setup() {
    return { mode };
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
