import { ref } from 'vue'

export function useMode() {
    let currentMode = ref(false);

    const splitMode = () => {
        currentMode.value = true;
        alert(currentMode.value)
    }
    const blocksMode = () => {
        currentMode.value = false;
        alert(currentMode.value)
    }
    const pythonMode = () => {
        currentMode.value = true;
        alert(currentMode.value)
    }

    return {
        currentMode, splitMode, blocksMode, pythonMode
    }
}