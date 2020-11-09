export default function define(Python: Blockly.BlockGenerators) {


  Python['import_servo'] = function (block) {
    const code = 'from adafruit_motor import servo\n';
    return code;
  };

  Python['servo_conf'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
|| '';
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = servo.Servo(' +text_pinno+ ')\n';
    return code;
  };

  Python['servo_value'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_angle = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.angle = ' +text_angle+  '\n';
    return code;
  };

}
