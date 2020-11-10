/* eslint-disable @typescript-eslint/no-use-before-define */
import { setXml, loadBlockly } from "@/components/blockly/Blockly";
import { openFile } from "@/scripts/openFile";
import { saveAs } from "file-saver";
import { closeModal, openModal } from "./state/useModalState";
import {
  currentFileRef, 
  filename,
  mode,
  pythonCode,
  runWindow,
  shortLink,
  terminal,
  termOutput,
  view,
  xml 
} from "./state/useState";

import firebase from "firebase";
import { newServerConnection, ServerConnection } from "@/server/server";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";

interface FirebaseFiles {
  label: string;
  ref: firebase.storage.Reference;
}

type modes = "" | "Python" | "microbit" | "RPi" | "CircuitPython";

const resizeWindow: Function = () => {
  window.dispatchEvent(new Event("resize"));
};

const updateView = async (data: string) => {
  view.value = data;
  window.dispatchEvent(new Event("resize"));
  await resizeWindow();
};

const open = async () => {
  const newxml: string = await openFile();
  setXml(newxml);
  closeModal();
};

const switchMode: Function = (modeKey: modes) => {
  mode.value = modeKey;
  loadBlockly(() => {
    closeModal();
  });
  if (modeKey === "RPi") {
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

const save = () => {
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
};

const savePython = (fileName: string) => {
  if (xml.value) {
    const blob = new Blob([pythonCode.value]);
    let saveFileName = "";
    saveFileName = fileName + ".py";
    saveAs(blob, saveFileName);
  }
};

const share = async () => {
  const fileURL = currentFileRef.value.getDownloadURL();
  const content = {
    dynamicLinkInfo: {
      domainUriPrefix: "https://project.edublocks.org",
      link:
        "http://" +
        location.host +
        "/#share?" +
        mode.value +
        "?" +
        (await btoa(await fileURL))
    },
    suffix: {
      option: "SHORT"
    }
  };
  fetch(
    "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=" +
      process.env.VUE_APP_API_KEY,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(content)
    }
  )
    .then(response => response.json())
    .then(data => (shortLink.value = data.shortLink))
    .then(await openModal("ShareModal"));
};

let term: Terminal;

let connection: ServerConnection | undefined;

const initConnection = async () => {
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
  connection.on("data", data => term.write(data));
  term.onData(connection.sendData);
};

const runTermCode = () => {
  term.reset();
  if (connection) {
    termOutput.value = "";
    connection.runCode(pythonCode.value);
  }
};

export {
  FirebaseFiles,
  resizeWindow,
  updateView,
  open,
  switchMode,
  runPythonCode,
  stopPythonCode,
  changePythonFontSize,
  save,
  savePython,
  share,
  initConnection,
  runTermCode
};
