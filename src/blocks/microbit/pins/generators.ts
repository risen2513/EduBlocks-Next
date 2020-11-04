export default function define(Python: Blockly.BlockGenerators) {


  Python['pintouchednew'] = function(block) {
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
    || 'True';
    // TODO: Assemble Python into code variable.
    var code = 'pin'+text_pinno+'.is_touched()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['logotouched'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'pin_logo.is_touched()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['pin_speaker'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'pin_speaker';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['analogreadnew'] = function(block) {
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
    || 'True';
    // TODO: Assemble Python into code variable.
    var code = 'pin'+text_pinno+'.read_analog()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['digitalreadnew'] = function(block) {
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
    || 'True';
    // TODO: Assemble Python into code variable.
    var code = 'pin'+text_pinno+'.read_digital()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['writeanalognew'] = function(block) {
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
    || 'True';
    var text_analog = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC)
    || 'True';
    // TODO: Assemble Python into code variable.
    var code = 'pin' +text_pinno+ '.write_analog(' +text_analog+ ')\n';
    return code;
  };
  
  Python['writedigitalnew'] = function(block) {
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
    || 'True';
    var text_digital = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC)
    || 'True';
    // TODO: Assemble Python into code variable.
    var code = 'pin' +text_pinno+ '.write_digital(' +text_digital+ ')\n';
    return code;
  };
  
  Python['pin_pull'] = function(block) {
    var text_pinno = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
    || 'True';
    var text_digital = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC)
    || 'True';
    // TODO: Assemble Python into code variable.
    var code = 'pin' +text_pinno+ '.set_pull(' +text_digital+ ')\n';
    return code;
  };

  Python['pintouched'] = function(block) {
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = 'pin'+text_pinno+'.is_touched()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['analogread'] = function(block) {
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = 'pin'+text_pinno+'.read_analog()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['digitalread'] = function(block) {
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = 'pin'+text_pinno+'.read_digital()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['writeanalog'] = function(block) {
    var text_pinno = block.getFieldValue('pinno');
    var text_analog = block.getFieldValue('analog');
    // TODO: Assemble Python into code variable.
    var code = 'pin' +text_pinno+ '.write_analog(' +text_analog+ ')\n';
    return code;
  };
  
  Python['writedigital'] = function(block) {
    var text_pinno = block.getFieldValue('pinno');
    var text_digital = block.getFieldValue('digital');
    // TODO: Assemble Python into code variable.
    var code = 'pin' +text_pinno+ '.write_digital(' +text_digital+ ')\n';
    return code;
  };
}
