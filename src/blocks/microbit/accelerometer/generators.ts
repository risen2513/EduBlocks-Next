export default function define(Python: Blockly.BlockGenerators) {

  Python['accisgesturenew'] = function (block) {
    let text_gesture1 = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
      || '\'shake\'';
    const code = 'accelerometer.is_gesture(' + text_gesture1 + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['accisgesture'] = function (block) {
    const text_gesture1 = block.getFieldValue('gesture1');
    const code = 'accelerometer.is_gesture(' + text_gesture1 + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['accwasgesturenew'] = function (block) {
    let text_gesture2 = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
      || '\'shake\'';
    const code = 'accelerometer.was_gesture(' + text_gesture2 + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['accwasgesture'] = function (block) {
    const text_gesture2 = block.getFieldValue('gesture2');
    const code = 'accelerometer.was_gesture(' + text_gesture2 + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['accgestures'] = function (block) {
    const text_gesture = block.getFieldValue('gestures');
    return [text_gesture, Blockly.Python.ORDER_ATOMIC];
  };

  Python['acccurrentgesture'] = function (block) {
    const code = 'accelerometer.current_gesture()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['accget'] = function (block) {
    const text_axis = block.getFieldValue('axis');
    const code = 'accelerometer.' + text_axis;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
}
