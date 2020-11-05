import { ref, Ref } from "vue";
import { setXml, loadBlockly } from "@/components/blockly/Blockly";
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
const pythonFontSize: Ref<number> = ref(16);
const userData = ref();

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
  loadBlockly();
  closeModal();
  console.log(mode.value);
};

const runPythonCode: Function = () => {
  updateView("Split");
  runWindow.value = true;
};

const stopPythonCode: Function = () => {
  runWindow.value = false;
};

const changePythonFontSize: Function = (direction: string) => {
  const codeMirrorContainer = document.getElementsByClassName(
    "CodeMirror"
  ) as HTMLCollectionOf<HTMLElement>;
  const codeMirror = codeMirrorContainer[0];
  const initalFontSize = window
    .getComputedStyle(codeMirror, null)
    .getPropertyValue("font-size");
  const fontSize = parseFloat(initalFontSize);
  if (direction === "in") {
    codeMirror.style.fontSize = fontSize + 3 + "px";
  } else {
    codeMirror.style.fontSize = fontSize - 3 + "px";
  }
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
  userData,
  pythonFontSize,
  changePythonFontSize,
  updateView,
  open,
  save,
  runPythonCode,
  stopPythonCode,
  switchMode
};
