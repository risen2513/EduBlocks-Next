export default function define(Python: Blockly.BlockGenerators) {
    Python['events_start_here'] = function (block) {
        const code = '# Start Code Here\n';
        return code;
    };
}