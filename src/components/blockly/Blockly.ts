/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getToolboxXml } from "../../blocks/index";
import { xml, pythonCode } from "../../scripts/state/useState";

export async function loadBlockly(workspace: any) {
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

  const blocklyWorkspace = Blockly.inject(workspace, options);

  blocklyWorkspace.addChangeListener(() => {
    xml.value = Blockly.Xml.domToPrettyText(
      Blockly.Xml.workspaceToDom(blocklyWorkspace)
    );
    pythonCode.value = Blockly.Python.workspaceToCode(blocklyWorkspace);
  });
}
