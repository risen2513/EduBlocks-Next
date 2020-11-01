export default function define(Python: Blockly.BlockGenerators) {
  Python['import_requests'] = function (block) {
    let code = 'import requests \n';
    return code;
  };

  Python['import_json'] = function (block) {
    let code = 'import json \n';
    return code;
  };

  Python['requests_get'] = function (block) {
    var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_r + ' = requests.get(' + value_text + ')\n';
    return code;
  };

  Python['json_reference'] = function(block) {
    var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
    var value_input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_r + '.json()[' + value_input + ']';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['requests_post'] = function (block) {
    var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_r + ' = requests.post(' + value_text + ')\n';
    return code;
  };

  Python['requests_put'] = function (block) {
    var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_r + ' = requests.put(' + value_text + ')\n';
    return code;
  };

  Python['requests_delete'] = function (block) {
    var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_r + ' = requests.delete(' + value_text + ')\n';
    return code;
  };

  Python['requests_head'] = function (block) {
    var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_r + ' = requests.head(' + value_text + ')\n';
    return code;
  };

  Python['requests_options'] = function (block) {
    var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_r + ' = requests.options(' + value_text + ')\n';
    return code;
  };

  Python['requests_url'] = function (block) {
    var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = variable_r + '.' + dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['requests_url_func'] = function (block) {
    var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = variable_r + '.' + dropdown_name + "()\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };


  Python['requests_cookies'] = function (block) {
    var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_r + '.cookies[' + value_text + ']\n';
    return code;
  };

  Python['requests_rjar'] = function (block) {
    var variable_jar = Blockly.Python.variableDB_.getName(block.getFieldValue('jar'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_jar + ' = requests.cookies.RequestsCookieJar()\n';
    return code;
  };

  Python['requests_jset'] = function (block) {
    var variable_jar = Blockly.Python.variableDB_.getName(block.getFieldValue('jar'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_jar + '.set(' + value_name + ')\n';
    return code;
  };

  Python['requests_hget'] = function (block) {
    var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_r + '.headers.get(' + value_name + ')\n';
    return code;
  };

  Python['requests_raise'] = function (block) {
    var variable_r = Blockly.Python.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_r + '.raise_for_status()\n';
    return code;
  };
}
