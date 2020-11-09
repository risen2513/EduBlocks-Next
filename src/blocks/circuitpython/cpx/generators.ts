export default function define(Python: Blockly.BlockGenerators) {


  Python['import_cpx'] = function (block) {
    const code = 'from adafruit_circuitplayground.express import cpx\n';
    return code;
  };

  Python['redled'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'cpx.red_led = ' +value_text+ '\n';
    return code;
  };

  Python['switch'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'cpx.switch';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['detect_taps'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'cpx.detect_taps = ' +value_name+ '\n';
    return code;
  };

  Python['tapped'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'cpx.tapped';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['shake'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'cpx.shake(' +value_text+ ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['light'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'cpx.light';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['acc'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'cpx.acceleration';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['button'] = function(block) {
    var dropdown_button = block.getFieldValue('button');
    // TODO: Assemble Python into code variable.
    var code = 'cpx.button_' +dropdown_button;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['temp'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'cpx.temperature';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['touchdrop'] = function(block) {
    var dropdown_button = block.getFieldValue('button');
    // TODO: Assemble Python into code variable.
    var code = 'cpx.touch_' +dropdown_button;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['playtone'] = function(block) {
    var value_text1 = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    var value_text2 = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'cpx.play_tone(' +value_text1+ ', ' +value_text2+ ')\n';
    return code;
  };

  Python['starttone'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'cpx.start_tone(' +value_text+ ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['stoptone'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'cpx.stop_tone()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['playfile'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'cpx.play_file(' +value_text+ ')\n';
    return code;
  };

}
