import { loadBlockly, setXml } from "@/components/blockly/Blockly";
import { closeModal } from "@/scripts/state/useModalState";
import { switchMode, sharedXML, mode } from "@/scripts/state/useState";

export async function runShareProcedure() {
    const locURL = window.location.href.toString();

    if (locURL.indexOf("#share") >= 0) {
        if (locURL.indexOf("?Python") >= 0) {
            mode.value = "Python"
        }

        if (locURL.indexOf("?microbit") >= 0) {
            mode.value = "microbit"
        }

        if (locURL.indexOf("?CircuitPython") >= 0) {
            mode.value = "CircuitPython"
        }

        if (locURL.indexOf("?RPi") >= 0) {
            mode.value = "RPi"
        }

        const loadShareURL = window.location.href.substring(
            window.location.href.lastIndexOf("?") + 1
        );

        const decoded = atob(loadShareURL);

        fetch(decoded)
        .then(response => response.text().then(function (text) {
            loadBlockly(() => {
                closeModal();
                setXml(text)
            })
          }))
    }
}