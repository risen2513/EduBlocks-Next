import { saveAs } from "file-saver";
import { filename } from "./state/useState.ts"

export async function fsUniversalHex(code) {
    var FS = microbitFsWrapper();

    FS.setupFilesystem().then(function() {
        FS.write('main.py', code);
        var result = FS.getUniversalHex()
        var fileName;
        if (filename.value.length < 1){
           fileName = "microbit-untitled.hex";
        }
        else {
            fileName = "microbit-"  + filename.value + ".hex";
        }
        const blob = new Blob([result], {
            type: "application/octet-stream"
        });
        saveAs(blob, fileName);
    });
}