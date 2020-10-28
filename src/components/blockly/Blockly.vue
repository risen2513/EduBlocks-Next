<template>
  <BlocklyComponent
    id="blockly1"
    :options="options"
    ref="workspace"
  ></BlocklyComponent>
</template>

<script>
import BlocklyComponent from "./BlocklyComponent.vue";
import { ref, onMounted } from "vue";
import { toolboxXML } from "../../blocks/index.ts";
import { xml, pythonCode } from "../../scripts/state/useState";

export default {
  name: "blockly",
  components: {
    BlocklyComponent
  },
  setup() {
    const workspace = ref(null);

    const options = {
      media: "blockly/media/",
      renderer: "pxt",
      grid: {
        spacing: 25,
        length: 3,
        colour: "#ccc",
        snap: true
      },
      toolbox: toolboxXML
    };

    onMounted(() => {
      workspace.value.workspace.addChangeListener(() => {
        xml.value = Blockly.Xml.domToPrettyText(
          Blockly.Xml.workspaceToDom(workspace.value.workspace)
        );
        pythonCode.value = Blockly.Python.workspaceToCode(
          workspace.value.workspace
        );
      });
    });

    return {
      workspace,
      options
    };
  }
};
</script>
