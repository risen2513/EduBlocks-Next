/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getToolboxXml } from "../../blocks/blocks";
import { xml, pythonCode, blocklyDiv } from "../../scripts/state/useState";

export async function loadBlockly() {
  const toolbox = await getToolboxXml();

  const options = {
    media: "blockly/media/",
    renderer: "pxt",
    grid: {
      spacing: 25,
      length: 3,
      colour: "#ccc",
      snap: true
    },
    toolbox
  };

  const blocklyWorkspace = Blockly.inject(blocklyDiv.value, options);

  blocklyWorkspace.addChangeListener(() => {
    xml.value = Blockly.Xml.domToPrettyText(
      Blockly.Xml.workspaceToDom(blocklyWorkspace)
    );
    pythonCode.value = Blockly.Python.workspaceToCode(blocklyWorkspace);
  });
}

export async function updateBlockly() {
  const toolbox = await getToolboxXml();

  Blockly.mainWorkspace.dispose();

  const options = {
    media: "blockly/media/",
    renderer: "pxt",
    grid: {
      spacing: 25,
      length: 3,
      colour: "#ccc",
      snap: true
    },
    toolbox
  };

  const blocklyWorkspace = Blockly.inject(blocklyDiv.value, options);

  blocklyWorkspace.addChangeListener(() => {
    xml.value = Blockly.Xml.domToPrettyText(
      Blockly.Xml.workspaceToDom(blocklyWorkspace)
    );
    pythonCode.value = Blockly.Python.workspaceToCode(blocklyWorkspace);
  });
}
