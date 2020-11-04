export default function define(Python: Blockly.BlockGenerators) {
  Python['import_edubit'] = function(block) {
      // TODO: Assemble Python into code variable.
      var code = 'from EDUBIT import *\n';
      return code;
    };

  Python['power_state_monitor'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'power_state_monitor()\n';
  return code;
  };

  Python['brake_motor'] = function(block) {
      var dropdown_motorchannel = block.getFieldValue('motorChannel');
      // TODO: Assemble Python into code variable.
      var code = 'brake_motor('+dropdown_motorchannel+')\n';
      return code;
    };
  Python['run_motor'] = function(block) {
  var dropdown_motorchannel = block.getFieldValue('motorChannel');
      var dropdown_direction = block.getFieldValue('direction');
      var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
      // TODO: Assemble Python into code variable.
      var code = 'run_motor('+dropdown_motorchannel+','+dropdown_direction+', speed='+value_speed+' )\n';
      return code;
  };

  Python['disable_servo'] = function(block) {
      var dropdown_servo = block.getFieldValue('servo');
      // TODO: Assemble Python into code variable.
      var code = 'disable_servo('+dropdown_servo+')\n';
      return code;
    };

  Python['set_servo_position'] = function(block) {
      var dropdown_servo = block.getFieldValue('servo');
      var value_position = Blockly.Python.valueToCode(block, 'position', Blockly.Python.ORDER_ATOMIC);
      // TODO: Assemble Python into code variable.
      var code = 'set_servo_position('+dropdown_servo+', position='+value_position+' )\n';
      return code;
    };

  Python['set_led'] = function(block) {
      var dropdown_color = block.getFieldValue('color');
      var dropdown_state = block.getFieldValue('state');
      // TODO: Assemble Python into code variable.
      var code = 'set_led('+dropdown_color+', '+dropdown_state+')\n';
      return code;
    };

  Python['sound_level'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'read_sound_value()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['pot_level'] = function(block) {
      // TODO: Assemble Python into code variable.
      var code = 'read_pot_value()';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

  Python['ir_state'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'read_IR_value()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['ir_triggered'] = function(block) {
      // TODO: Assemble Python into code variable.
      var code = 'is_IR_sensor_triggered()';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_ATOMIC];
    };

  Python['low_batt'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'is_low_batt()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['over_voltage'] = function(block) {
      // TODO: Assemble Python into code variable.
      var code = 'is_overvoltage()';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_ATOMIC]
    };

    Python['read_vin'] = function(block) {
      // TODO: Assemble Python into code variable.
      var code = 'read_Vin()';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.Python.ORDER_ATOMIC];
    };
}
