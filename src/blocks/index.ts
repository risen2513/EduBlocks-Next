export let toolboxXML = "<xml>";

export async function getToolboxXml() {

    (await import('./python/imports/definitions')).default(Blockly.Blocks);
    (await import('./python/imports/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/imports/toolbox.xml');

    (await import('./python/statements/definitions')).default(Blockly.Blocks);
    (await import('./python/statements/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/statements/toolbox.xml');

    toolboxXML += '</xml>';

    return toolboxXML;
}
