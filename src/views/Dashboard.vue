<template>
  <div id="app">
    <BlocklyComponent id="blockly1" :options="options" ref="workspace"></BlocklyComponent>
  </div>
</template>

<script>
import BlocklyComponent from '../components/BlocklyComponent.vue'

import '../blocks/index.ts'

import { mapState, mapMutations } from "vuex";

import { toolbox } from '../blocks/toolbox'

export default {
  name: 'app',
  components: {
    BlocklyComponent
  },
  data(){
    return {
      code: '',
      options: {
        media: 'media/',
        renderer: 'zelos',
        grid:
          {
            spacing: 25,
            length: 3,
            colour: '#ccc',
            snap: true
          },
        toolbox: toolbox
      }
    }
  },
  computed: {
    ...mapState(["pythonCode", "xml"]),
  },
  mounted() {
    this.$refs["workspace"].workspace.addChangeListener(() => {
      this.$store.commit('updateXml', Blockly.Xml.workspaceToDom(this.$refs["workspace"].workspace));  
      this.$store.commit('updatePythonCode', Blockly.Python.workspaceToCode(this.$refs["workspace"].workspace));    
    })
  },
  methods: {
    ...mapMutations(["updatePythonCode", "updateXml"]),
  }
}
</script>

<style>
html, body {
  margin: 0;
}

#code {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  margin: 0;
  background-color: beige;
}

#blockly1 {
    height: calc(100vh - 5.25em);
    position: relative;
    width: 100%;
}

#blockly2 {
  width: 50%;
  height: 50%;
}
</style>
