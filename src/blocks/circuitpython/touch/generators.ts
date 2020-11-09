export default function define(Python: Blockly.BlockGenerators) {


  Python['import_touchio'] = function (block) {
    const code = 'import touchio\n';
    return code;
  };

  Python['touch_conf'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = touchio.TouchIn(' +text_pinno+ ')\n';
    return code;
  };

  Python['touch_valinline'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_pin+".value";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}
