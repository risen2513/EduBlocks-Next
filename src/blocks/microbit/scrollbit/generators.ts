export default function define(Python: Blockly.BlockGenerators) {

  Python['scrollbit_import'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'from scrollbit import *\n';
    return code;
  };

  Python['scrollbit_scroll'] = function(block) {
    var text_input = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'scroll(' +text_input+ ')\n';
    return code;
  };

  Python['scrollbit_write'] = function(block) {
    var text_input = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'write(' +text_input+ ')\n';
    return code;
  };

  Python['scrollbit_draw'] = function(block) {
    var text_col = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    var text_row = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC);
    var text_icon = Blockly.Python.valueToCode(block, 'text3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'draw_icon(' +text_col+ ', ' +text_row+ ', ' +text_icon+ ')\n';
    return code;
  };

  Python['scrollbit_pixel'] = function(block) {
    var text_col = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    var text_row = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC);
    var text_bright = Blockly.Python.valueToCode(block, 'text3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'set_pixel(' +text_col+ ', ' +text_row+ ', ' +text_bright+ ')\n';
    return code;
  };

  Python['scrollbit_show'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'show()\n';
    return code;
  };

  Python['scrollbit_clear'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'clear()\n';
    return code;
  };
}
