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
      this.$store.commit('updateXml', Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$refs["workspace"].workspace)));  
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

</style>
