export default function define(Python: Blockly.BlockGenerators) {

  Python['radiosend'] = function (block) {
    let text_send = block.getFieldValue('send');
    let code = 'radio.send(' + text_send + ') \n';
    return code;
  };

  Python['radiosendnew'] = function (block) { 
    let text_send = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
      || 'True';
    let code = 'radio.send(' + text_send + ') \n';
    return code;
  };

  Python['radioconf'] = function (block) {
    let text_conf = block.getFieldValue('conf');
    let code = 'radio.config(' + text_conf + ') \n';
    return code;
  };

  Python['radioconfnew'] = function (block) {
    let text_conf = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
      || 'True';
    let code = 'radio.config(' + text_conf + ') \n';
    return code;
  };

  Python['imradio'] = function (block) {
    let code = 'import radio \n';
    return code;
  };

  Python['radioon'] = function (block) {
    let code = 'radio.on()\n';
    return code;
  };

  Python['ifradio'] = function (block) {
    const variable_incoming = Blockly.Python.variableDB_.getName(block.getFieldValue('incoming'), Blockly.Variables.NAME_TYPE);
    // const statements_name = Blockly.Python.statementToCode(block, 'DO');
    const text_sentitem = block.getFieldValue('sentitem');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // TODO: Assemble Python into code variable.
    return 'if ' + variable_incoming + ' == ' + text_sentitem + ':\n' + branch;
  };

  Python['incoming'] = function (block) {
    let variable_incoming = Blockly.Python.variableDB_.getName(block.getFieldValue('incoming'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    let code = variable_incoming + ' = radio.receive()\n';
    return code;
  };
}
