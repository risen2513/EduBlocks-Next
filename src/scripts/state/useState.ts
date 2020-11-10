import { ref, Ref } from "vue";
import { FirebaseFiles } from "../functions";

export type modes = "" | "Python" | "microbit" | "RPi" | "CircuitPython";

export const pythonCode: Ref<string> = ref("");
export const xml: Ref<string> = ref("");
export const mode: Ref<modes> = ref(""); 
export const view: Ref<string> = ref("");
export const blocklyDiv: Ref<string> = ref("");
export const filename: Ref<string> = ref("");
export const runWindow: Ref<boolean> = ref(false); 
export const pythonFontSize: Ref<number> = ref(16);
export const userData = ref();
export const files: Ref<FirebaseFiles[]> = ref([]);
export const fileListKey: Ref<number> = ref(1);
export const isUser: Ref<boolean> = ref(false);
export const isSaved: Ref<boolean> = ref(false);
export const shortLink: Ref<string> = ref("");
export const currentFileRef = ref();
export const termOutput: Ref<string> = ref("");
export const terminal: Ref<boolean> = ref(false);
