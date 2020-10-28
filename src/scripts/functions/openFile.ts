/* eslint-disable @typescript-eslint/no-explicit-any */
export function openFile() {
  return new Promise<string>((resolve, reject) => {
    function readSingleFile(e: Event) {
      const file = (e.target as any).files[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = e => {
        const contents = (e.target as any).result;
        resolve(contents);
      };

      reader.onerror = () => {
        reject(new Error("Reader error"));
      };

      reader.readAsText(file);
    }

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".xml";
    fileInput.addEventListener("change", readSingleFile, false);
    fileInput.click();
  });
}
