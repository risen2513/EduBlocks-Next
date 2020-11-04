export default function define(Python: Blockly.BlockGenerators) {

  Python['buttonispressed'] = function (block) {
    const dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    const code = 'button_' + dropdown_name + '.is_pressed()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['buttonwaspressed'] = function (block) {
    const dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    const code = 'button_' + dropdown_name + '.was_pressed()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}