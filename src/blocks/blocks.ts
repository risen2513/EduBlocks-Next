import { mode } from '../scripts/state/useState';

export let toolboxXML: string;

export async function getToolboxXml() {
    toolboxXML = "";

    toolboxXML = "<xml>";   

    (await import('./python/imports/definitions')).default(Blockly.Blocks);
    (await import('./python/imports/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/imports/toolbox.xml');

    (await import('./python/variables/definitions')).default(Blockly.Blocks);
    (await import('./python/variables/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/variables/toolbox.xml');

    (await import('./python/statements/definitions')).default(Blockly.Blocks);
    (await import('./python/statements/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/statements/toolbox.xml');

    (await import('./python/logic/definitions')).default(Blockly.Blocks);
    (await import('./python/logic/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/logic/toolbox.xml');

    (await import('./python/lists/definitions')).default(Blockly.Blocks);
    (await import('./python/lists/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/lists/toolbox.xml');

    (await import('./python/loops/definitions')).default(Blockly.Blocks);
    (await import('./python/loops/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/loops/toolbox.xml');

    (await import('./python/definitions/definitions')).default(Blockly.Blocks);
    (await import('./python/definitions/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/definitions/toolbox.xml');

    (await import('./python/math/definitions')).default(Blockly.Blocks);
    (await import('./python/math/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/math/toolbox.xml');

    (await import('./python/turtle/definitions')).default(Blockly.Blocks);
    (await import('./python/turtle/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/turtle/toolbox.xml');

    (await import('./python/graphs/definitions')).default(Blockly.Blocks);
    (await import('./python/graphs/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/graphs/toolbox.xml');

    (await import('./python/random/definitions')).default(Blockly.Blocks);
    (await import('./python/random/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/random/toolbox.xml');

    (await import('./python/processing/definitions')).default(Blockly.Blocks);
    (await import('./python/processing/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/processing/toolbox.xml');

    (await import('./python/requests/definitions')).default(Blockly.Blocks);
    (await import('./python/requests/generators')).default(Blockly.Python as any);
    toolboxXML += require('./python/requests/toolbox.xml');

    toolboxXML += '</xml>';

    return toolboxXML;
}
 