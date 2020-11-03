import { ref, Ref } from "vue";
import { setXml } from "@/components/blockly/Blockly";
import { openFile } from "@/scripts/openFile";
import { saveAs } from "file-saver";

// Global State
const pythonCode: Ref<string> = ref("");
const xml: Ref<string> = ref("");
const mode: Ref<string> = ref("Split");
const view: Ref<string> = ref("");
const blocklyDiv: Ref<string> = ref("");
const filename: Ref<string> = ref("");

// Global Functions

const resizeWindow: Function = () => {
  window.dispatchEvent(new Event("resize"));
};

async function updateView(data: string) {
  view.value = data;
  await window.dispatchEvent(new Event("resize"));
  await resizeWindow();
}

async function open() {
  const newxml: string = await openFile();
  setXml(newxml);
}

function save() {
  if (xml.value) {
    const blob = new Blob([xml.value], {
      type: "text/xml;charset=utf-8"
    });
    let saveFileName: string;
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
