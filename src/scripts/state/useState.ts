import { ref } from "vue";
import { setXml } from "@/components/blockly/Blockly";
import { openFile } from "@/scripts/openFile";
import { saveAs } from "file-saver";

// Global State
const pythonCode = ref("");
const xml = ref("");
const mode = ref("Split");
const view = ref("");
const blocklyDiv = ref("");
const filename = ref("");

// Global Functions

const resizeWindow = () => {
  window.dispatchEvent(new Event("resize"));
};

async function updateView(data: string) {
  view.value = data;
  await window.dispatchEvent(new Event("resize"));
  await resizeWindow();
}

async function open() {
  const newxml = await openFile();
  setXml(newxml);
}

function save() {
  if (xml.value) {
    const blob = new Blob([xml.value], {
      type: "text/xml;charset=utf-8"
    });
    let saveFileName;
    if (filename.value) {
      saveFileName = filename.value + ".xml";
    } else {
      saveFileName = "untitled.xml";
    }
    saveAs(blob, saveFileName);
  }
}

// Export State
export {
  pythonCode,
  xml,
  mode,
  view,
  blocklyDiv,
  filename,
  updateView,
  open,
  save
};
