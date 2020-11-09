export default function define(Python: Blockly.BlockGenerators) {

  // CPU Temp 

  Python['import_micro'] = function (block) {
    const code = 'import microcontroller\n';
    return code;
  };

  Python['cputemp'] = function(block) {
    var code = 'microcontroller.cpu.temperature';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  // Storage

  Python['import_storage'] = function (block) {
    const code = 'import storage\n';
    return code;
  };

  Python['storage_remount'] = function(block) {
    var value_text1 = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    var value_text2 = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'storage.remount(' +value_text1+ ', '  +value_text2+ ')\n';
    return code;
  };

  Python['open'] = function(block) {
    var value_text1 = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    var value_text2 = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'open(' +value_text1+ ', '  +value_text2+ ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['write'] = function(block) {
    var value_text1 = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    var value_text2 = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_text1 + '.write(' +value_text2+ ')\n';
    return code;
  };

}
