import { ref } from "vue";

// Global State
const pythonCode = ref("");
const xml = ref("");
const mode = ref("Split");

// Global Functions

const resizeWindow = () => {
  window.dispatchEvent(new Event("resize"));
};

async function updateMode(data: string) {
  mode.value = data;
  await window.dispatchEvent(new Event("resize"));
  await resizeWindow();
}

// Export State
export { pythonCode, xml, mode, updateMode };
