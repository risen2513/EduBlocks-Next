export default function define(Python: Blockly.BlockGenerators) {
  
  Python['chart_type'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('name'), Blockly.Variables.NAME_TYPE);
    var dropdown_charttypes = block.getFieldValue('chartTypes');
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_name + ' = pygal.' +dropdown_charttypes+ '(' +value_text+ ')\n';
    return code;
  };

  Python['chart_title'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('name'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_name + '.title = ' +value_text+ '\n';
    return code;
  };

  Python['chart_add'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('name'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var value_text1 = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_name+ '.add(' +value_text+ ', [' +value_text1+ '])\n';
    return code;
  };

  Python['chart_xlabels'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('name'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_name + '.x_labels = ' +value_name+ '\n';
    return code;
  };

  Python['chart_render'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('name'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_name+ '.render()\n';
    return code;
  };
}
