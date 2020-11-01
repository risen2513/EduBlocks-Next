export default function define(Python: Blockly.BlockGenerators) {
  Python['webifinline'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'ifstate');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const value_iftext = Blockly.Python.valueToCode(block, 'iftext', Blockly.Python.ORDER_ATOMIC);
    const code = 'if ' + value_iftext + ':\n' + branch;
    return code;
  };

  Python['webelifinline'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'ifstate');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const value_iftext = Blockly.Python.valueToCode(block, 'iftext', Blockly.Python.ORDER_ATOMIC);
    // const statements_ifstate = Blockly.Python.statementToCode(block, 'ifstate');
    // TODO: Assemble Python into code variable.
    const code = 'elif ' + value_iftext + ':\n' + branch;
    return code;
  };

  Python['webelse'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO'); 
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'else:\n' + branch;
  };

  Python['webinternal'] = function(block) {
    var value_first = Blockly.Python.valueToCode(block, 'first', Blockly.Python.ORDER_ATOMIC);
    var text_choose = block.getFieldValue('choose');
    var value_last = Blockly.Python.valueToCode(block, 'last', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_first+ ' ' +text_choose+ ' ' +value_last;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  Python['webandor'] = Python['webinternal'];

  Python['webnot'] = function (block) {
    var value_bool = Blockly.Python.valueToCode(block, 'bool', Blockly.Python.ORDER_ATOMIC);
    const code = 'not ' +  value_bool;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };


}
