export default function define(Python: Blockly.BlockGenerators) {


  Python['import_audio'] = function (block) {
    const code = 'import audioio\n';
    return code;
  };

  Python['audio_conf'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
|| '';
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = audioio.AudioOut(' +text_pinno+ ')\n';
    return code;
  };

  Python['audio_wav'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
|| '';
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = audioio.WaveFile(' +text_pinno+ ')\n';
    return code;
  };

  Python['audio_enable'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
|| 'value = True';
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.switch_to_output(' +text_pinno+ ')\n';
    return code;
  };

  Python['audio_open'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('data'), Blockly.Variables.NAME_TYPE);
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
|| '';
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = open(' +text_pinno+ ')\n';
    return code;
  };

  Python['audio_raw'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
|| '';
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = audioio.RawSample(' +text_pinno+ ')\n';
    return code;
  };

  Python['audio_play'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
|| '';
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.play(' +text_pinno+ ')\n';
    return code;
  };

  Python['audio_stop'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.stop()\n';
    return code;
  };

  Python['audio_playing'] = function(block) {
    var variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_variable+ '.playing';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}
