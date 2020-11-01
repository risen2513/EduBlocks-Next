export default function define(Python: Blockly.BlockGenerators) {
  Python['webwhileout'] = function (block) {
    var text_1 = Blockly.Python.valueToCode(block, 'cond', Blockly.Python.ORDER_ATOMIC);
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const code = 'while ' + text_1 + ':\n' + branch;
    return code;
  };

  Python['webfor'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_letter = Blockly.Python.valueToCode(block, 'letter', Blockly.Python.ORDER_ATOMIC);
    const text_no = Blockly.Python.valueToCode(block, 'no', Blockly.Python.ORDER_ATOMIC);
    // const statements_name = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'for ' + text_letter + ' in range(' + text_no + '):\n' + branch;
    return code;
  };

  Python['webadvancedforloops'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC)
    const text_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC)
    // const statements_do = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'for ' + text_x + ' in ' + text_y + ':\n' + branch;
    return code;
  };

  Python['web_break'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'break\n';
    return code;
  };

  Python['loop_get'] = function (block) {
    var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_var;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}
