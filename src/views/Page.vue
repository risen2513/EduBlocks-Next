<template>
  <div id="app">
    <Blockly />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Blockly from '../components/blockly/Blockly.vue'
import '../blocks/index.ts'
import { mapState, mapMutations } from "vuex";
import { toolboxXML } from '../blocks/index.ts';
import { useMode } from '../scripts/state/useMode';


export default {
  name: 'page',
  components: {
    Blockly
  },
  setup() {
    let { currentMode } = useMode();
    
    return {
      currentMode, toolboxXML
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
}

.splitBlockly {
  width: 60%;
}

.fullBlockly {
  width: 100%;
}
</style>
