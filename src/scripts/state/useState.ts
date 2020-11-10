import { ref, Ref } from "vue";
import { setXml, loadBlockly } from "@/components/blockly/Blockly";
import { openFile } from "@/scripts/openFile";
import { saveAs } from "file-saver";
import { closeModal, openModal } from "./useModalState";
import firebase from "firebase";
import { newServerConnection, ServerConnection } from "@/server/server";
import { Terminal } from "xterm";
import { FitAddon } from 'xterm-addon-fit';


interface FirebaseFiles {
  label: string;
  ref: firebase.storage.Reference;
}

// Global State

type modes = "" | "Python" | "microbit" | "RPi" | "CircuitPython";

const pythonCode: Ref<string> = ref("");
const xml: Ref<string> = ref("");
const mode: Ref<modes> = ref("");
const view: Ref<string> = ref("");
const blocklyDiv: Ref<string> = ref("");
const filename: Ref<string> = ref("");
const runWindow: Ref<boolean> = ref(false);
const pythonFontSize: Ref<number> = ref(16);
const userData = ref();
const files: Ref<FirebaseFiles[]> = ref([]);
const fileListKey: Ref<number> = ref(1);
const isUser: Ref<Boolean> = ref(false);
const isSaved: Ref<Boolean> = ref(false);
const shortLink: Ref<string> = ref("");
const currentFileRef = ref();
const termOutput: Ref<string> = ref("");
let connection: ServerConnection | undefined;
const terminal: Ref<boolean> = ref(false);
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
  closeModal();
}

const switchMode: Function = (modeKey: modes) => {
  mode.value = modeKey;
  loadBlockly(() => {
    closeModal();
  });
  if (modeKey === "RPi"){
    terminal.value = true;
    initConnection();
  }
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

function savePython(fileName: string) {
  if (xml.value) {
    const blob = new Blob([pythonCode.value]);
    let saveFileName: string;
    saveFileName = fileName + ".py";
    saveAs(blob, saveFileName);
  }
}

async function share () {
  let fileURL = currentFileRef.value.getDownloadURL();
  let content = {
    dynamicLinkInfo: {
      domainUriPrefix: "https://project.edublocks.org",
      link: "http://" + location.host + "/#share?" + mode.value + "?" + await btoa(await fileURL)
    },
    suffix: {
      option: "SHORT"
    }
  };
  fetch("https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=" + process.env.VUE_APP_API_KEY, {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  })
  .then(response => response.json())
  .then(data => shortLink.value = data.shortLink)
  .then(await openModal("ShareModal"))
}

let term: any; 

async function initConnection() {
  connection = await newServerConnection();
  const ws = new WebSocket("ws://localhost:8081/terminal");

  ws.onmessage = function(evt) {
    const message = JSON.parse(evt.data);
    termOutput.value += message.payload;
  };

  term = new Terminal();
  const fitAddon = new FitAddon();
  term.loadAddon(fitAddon);
  term.open(document.getElementById("terminal") as HTMLBodyElement);
  fitAddon.fit();
  connection.on('data', (data) => term.write(data));
  term.onData(connection.sendData)
}

function runTermCode() {
  term.reset();
  if (connection) {
    termOutput.value = "";
    connection.runCode(pythonCode.value);
  }
}


// Export State
export {
  pythonCode,
  xml,
  mode,
  view,
  blocklyDiv,
  isUser,
  isSaved,
  filename,
  runWindow,
  termOutput,
  connection,
  userData,
  files,
  shortLink,
  pythonFontSize,
  changePythonFontSize,
  fileListKey,
  currentFileRef,
  terminal,
  savePython,
  updateView,
  open,
  save,
  share,
  initConnection,
  runTermCode,
  FirebaseFiles,
  runPythonCode,
  stopPythonCode,
  switchMode
};
