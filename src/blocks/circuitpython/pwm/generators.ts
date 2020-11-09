export default function define(Python: Blockly.BlockGenerators) {


  Python['import_pulseio'] = function (block) {
    const code = 'from pulseio import *\n';
    return code;
  };

  Python['import_simpleio'] = function (block) {
    const code = 'from simpleio import *\n';
    return code;
  };

  Python['pwm_conf'] = function(block) {
    var variable_pwm = Blockly.Python.variableDB_.getName(block.getFieldValue('pwm'), Blockly.Variables.NAME_TYPE);
    var text_pin = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC)
|| '';
var text_dc = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC)
|| '';
var text_fr = Blockly.Python.valueToCode(block, 'text3', Blockly.Python.ORDER_ATOMIC)
|| '';
    // TODO: Assemble Python into code variable.
    var code = variable_pwm+ ' = pulseio.PWMOut(' +text_pin+ ', duty_cycle=' +text_dc+ ', frequency=' +text_fr+ ')\n';
    return code;
  };

  Python['pwm_conf2'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
|| '';
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = DigitalInOut(' +text_pinno+ ')\n';
    return code;
  };
  
  Python['simple_tone'] = function(block) {
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
|| '';
    // TODO: Assemble Python into code variable.
    var code = 'simpleio.tone(' +text_pinno+ ')\n';
    return code;
  };

  Python['pwm_dc'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_direction = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
|| '';
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.duty_cycle = ' +text_direction+ '\n';
    return code;
  };

  Python['pwm_freq'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_direction = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
|| '';
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.frequency = ' +text_direction+ '\n';
    return code;
  };


}
