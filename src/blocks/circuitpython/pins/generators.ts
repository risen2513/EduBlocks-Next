export default function define(Python: Blockly.BlockGenerators) {


  Python['import_digitalio'] = function (block) {
    const code = 'from digitalio import *\n';
    return code;
  };

  Python['pinconfig'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = DigitalInOut(' +text_pinno+ ')\n';
    return code;
  };

  Python['pindirection'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_direction = block.getFieldValue('direction');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.direction = ' +text_direction+ '\n';
    return code;
  };

  Python['pinvalue'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var dropdown_value = block.getFieldValue('value');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.value = ' +dropdown_value+ '\n';
    return code;
  };

}
