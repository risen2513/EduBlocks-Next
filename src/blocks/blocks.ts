import { mode } from '../scripts/state/useState';

export let toolboxXML: string;

export async function getToolboxXml() {
    toolboxXML = "";

    toolboxXML = "<xml>";   

    (await import('./python/statements/definitions')).default(Blockly.Blocks);
    (await import('./python/statements/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/statements/toolbox.xml');

    (await import('./python/imports/definitions')).default(Blockly.Blocks);
    (await import('./python/imports/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/imports/toolbox.xml');

    toolboxXML += '</xml>';

    return toolboxXML;
}
