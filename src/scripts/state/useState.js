import { ref } from 'vue'

// Global State
let pythonCode = ref("")
let xml = ref("")
let mode = ref("Split")

// Global Functions

const resizeWindow = () => {
    window.dispatchEvent(new Event('resize'))
}

async function updateMode(data) {
    mode.value = data
    await window.dispatchEvent(new Event('resize'))
    await resizeWindow()
}

// Export State
export {
    pythonCode, 
    xml,
    mode,
    updateMode
}


