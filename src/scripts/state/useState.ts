import { ref, Ref } from "vue";
import { setXml, updateBlockly } from "@/components/blockly/Blockly";
import { openFile } from "@/scripts/openFile";
import { saveAs } from "file-saver";
import { closeModal } from "./useModalState";

// Global State

type modes = "" | "python" | "microbit" | "raspberrypi" | "circuitpython";

const pythonCode: Ref<string> = ref("");
const xml: Ref<string> = ref("");
const mode: Ref<modes> = ref("");
const view: Ref<string> = ref("");
const blocklyDiv: Ref<string> = ref("");
const filename: Ref<string> = ref("");
const runWindow: Ref<boolean> = ref(false);

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

const switchMode: Function = (modeKey: modes) => {
  mode.value = modeKey;
  updateBlockly();
  closeModal();
  console.log(mode.value);
};

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
  runWindow,
  updateView,
  open,
  save,
  switchMode
};
