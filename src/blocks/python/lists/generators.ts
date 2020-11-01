export default function define(Python: Blockly.BlockGenerators) {
  Python['create_list'] = function(block) {
    var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_list+ ' = [' +value_text+ ']\n';
    return code;
  };

  Python['calllist'] = function(block) {
    var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_list;
    return code;
  };

  Python['selectlist'] = function(block) {
    var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_list + '[' +value_name+ ']\n';
    return code;
  };

  Python['selectlist2'] = function(block) {
    var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_list + '[' +value_name+ ']';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['optionlist'] = function(block) {
    var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var dropdown_options = block.getFieldValue('options');
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_list+ '.' +dropdown_options+ '(' +value_text+ ')\n';
    return code;
  };
}
