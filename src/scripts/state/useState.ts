import { ref } from "vue";

// Global State
const pythonCode = ref("");
const xml = ref("");
const mode = ref("Split");
const view = ref("");
const blocklyDiv = ref("");

// Global Functions

const resizeWindow = () => {
  window.dispatchEvent(new Event("resize"));
};

async function updateView(data: string) {
  view.value = data;
  await window.dispatchEvent(new Event("resize"));
  await resizeWindow();
}

// Export State
export { pythonCode, xml, mode, view, blocklyDiv, updateView };
