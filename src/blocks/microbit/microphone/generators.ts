export default function define(Python: Blockly.BlockGenerators) {

  Python['microphone_current'] = function (block) {
    let code = 'microphone.current_sound()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['microphone_level'] = function(block) {
    var dropdown_level = block.getFieldValue('level');
    // TODO: Assemble Python into code variable.
    var code = 'microphone.' + dropdown_level
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['microphone_sound'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'microphone.sound_level()'
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };


  Python['microphone_wassound'] = function(block) {
    var value_level = Blockly.Python.valueToCode(block, 'level', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'microphone.was_sound(' +value_level+ ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['microphone_getsounds'] = function (block) {
    let code = 'microphone.get_sounds()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  

}
