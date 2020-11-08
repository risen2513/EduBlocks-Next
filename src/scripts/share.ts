import { setXml } from "@/components/blockly/Blockly";
import { closeModal } from "@/scripts/state/useModalState";
import { switchMode, sharedXML } from "@/scripts/state/useState";

export async function runShareProcedure() {
    const locURL = window.location.href.toString();

    if (locURL.indexOf("#share") >= 0) {
        if (locURL.indexOf("?Python") >= 0) {
            await switchMode("Python");
        }

        if (locURL.indexOf("?microbit") >= 0) {
            await switchMode("microbit");
        }

        if (locURL.indexOf("?CircuitPython") >= 0) {
            await switchMode("CircuitPython");
        }

        if (locURL.indexOf("?RPi") >= 0) {
            await switchMode("RPi");
        }

        const loadShareURL = window.location.href.substring(
            window.location.href.lastIndexOf("?") + 1
        );

        const decoded = atob(loadShareURL);

        fetch(decoded)
        .then(response => response.text().then(async function (text) {
            sharedXML.value = text;
          }))
    }
}