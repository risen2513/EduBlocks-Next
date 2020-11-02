/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getToolboxXml } from "../../blocks/blocks";
import { xml, pythonCode, blocklyDiv } from "../../scripts/state/useState";

export function setXml(xml: string | null) {
  let start = null;
  let new_xml =
    '<xml xmlns="https://developers.google.com/blockly/xml"><block type="events_start_here" id="DI_start_here" x="' +
    25 +
    '" y="33" deletable="false" movable="false"></block></xml>';

  if (typeof xml === "string") {
    start = xml.search("DI_start_here");

    if (start < 0) {
      const first_block_position = xml.search("<block");
      const start_block_xml =
        '<block type="events_start_here" id="DI_start_here" x="' +
        25 +
        '" y="33" deletable="false" movable="false">';

      if (first_block_position < 0) {
        console.log("No blocks were found");
      } else {
        const pos_from_end_of_string = -1 * "</xml>".length;
        new_xml =
          xml.slice(0, first_block_position) +
          start_block_xml +
          "<next>" +
          xml.slice(first_block_position, pos_from_end_of_string) +
          "</next></block>" +
          xml.slice(pos_from_end_of_string);
      }
      const textToDom = Blockly.Xml.textToDom(new_xml);
      Blockly.Xml.domToWorkspace(textToDom, Blockly.mainWorkspace);
    } else {
      const textToDom = Blockly.Xml.textToDom(xml);
      Blockly.Xml.domToWorkspace(textToDom, Blockly.mainWorkspace);
    }
  } else {
    const textToDom = Blockly.Xml.textToDom(new_xml);
    Blockly.Xml.domToWorkspace(textToDom, Blockly.mainWorkspace);
  }
}

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

  blocklyWorkspace.addChangeListener(Blockly.Events.disableOrphans);

  blocklyWorkspace.addChangeListener(() => {
    xml.value = Blockly.Xml.domToPrettyText(
      Blockly.Xml.workspaceToDom(blocklyWorkspace)
    );
    pythonCode.value = Blockly.Python.workspaceToCode(blocklyWorkspace);
  });

  setXml("");
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
