<template>
  <div>
    <div class="blocklyDiv" ref="blocklyDiv">
    </div>
    <xml ref="blocklyToolbox" style="display:none">
      <slot></slot>
    </xml>
  </div>
</template>

<script>
export default {
  name: 'BlocklyComponent',
  props: ['options'],
  data(){
    return {
      workspace: null
    }
  },
  mounted() {
    var options = this.$props.options || {};
    if (!options.toolbox) {
      options.toolbox = this.$refs["blocklyToolbox"];
    }
    this.workspace = Blockly.inject(this.$refs["blocklyDiv"], options);
  }
}
</script>

<style scoped>
.blocklyDiv {
  width: 100%;
  position: relative;
  height: calc(100vh - 5.25em);
  overflow: hidden;
}
</style>
