export default function define(Python: Blockly.BlockGenerators) {

  Python['events_start_here'] = function (block) {
    const code = '# Start Code Here\n';
    return code;
  };

  Python['import_mltext'] = function (block) {
    const code = 'from mltext import *\n';
    return code;
  };

  Python['import_mlmodel'] = function (block) {
    const code = 'from mlmodel import *\n';
    return code;
  };

  Python['import_mlimages'] = function (block) {
    const code = 'from mlimages import *\n';
    return code;
  };

  Python['import_imagedata'] = function (block) {
    const code = 'from imagedata import *\n';
    return code;
  };

  Python['import_time'] = function (block) {
    const code = 'import time\n';
    return code;
  };

  Python['import_signal'] = function (block) {
    const code = 'from signal import pause\n';
    return code;
  };

  Python['import_pygal'] = function (block) {
    const code = 'import pygal\n';
    return code;
  };

  Python['import_processing'] = function (block) {
    const code = 'from processing import *\n';
    return code;
  };

  Python['pause_s'] = function (block) {
    const code = 'pause()\n';
    return code;
  }; 
 
  Python['random'] = function (block) {
    const code = 'import random\n';
    return code;
  };

  Python['while_true'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'while True:\n' + branch;
  };

  Python['pass'] = function (block) {
    const code = 'pass \n';
    return code;
  };

  Python['if'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'if ' + text_const + ':\n' + branch;
  };

  Python['class'] = function (block) {
    const text_const = Blockly.Python.valueToCode(block, 'class', Blockly.Python.ORDER_ATOMIC);
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'class ' + text_const + ':\n' + branch;
  };

  Python['varprint'] = function (block) {
    const text_const = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    const code = 'print(' + text_const + ')\n';
    return code;
  };

  Python['ifcroc'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_this = block.getFieldValue('this');
    const dropdown_crocsigns = block.getFieldValue('crocsigns');
    const text_that = block.getFieldValue('that');
    // const statements_name = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'if ' + text_this + ' ' + dropdown_crocsigns + ' ' + text_that + ':\n' + branch;
    return code;
  };

  Python['varminus'] = function (block) {
    const text_1 = block.getFieldValue('1');
    const text_2 = block.getFieldValue('2');
    // TODO: Assemble Python into code variable.
    const code = text_1 + ' -= ' + text_2 + '\n';
    return code;
  };

  Python['for'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_letter = Blockly.Python.valueToCode(block, 'letter', Blockly.Python.ORDER_ATOMIC);
    const text_no = Blockly.Python.valueToCode(block, 'no', Blockly.Python.ORDER_ATOMIC);
    // const statements_name = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'for ' + text_letter + ' in range(' + text_no + '):\n' + branch;
    return code;
  };

  Python['advancedforloops'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC)
    const text_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC)
    // const statements_do = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'for ' + text_x + ' in ' + text_y + ':\n' + branch;
    return code;
  };

  Python['ifequals'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const text_this = block.getFieldValue('this');
    const text_that = block.getFieldValue('that');
    // const statements_do = Blockly.Python.statementToCode(block, 'DO');
    // TODO: Assemble Python into code variable.
    const code = 'if ' + text_this + ' == ' + text_that + ':\n' + branch;
    return code;
  };

  Python['importinputs'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'import inputs\n';
    return code;
  };

  Python['return2'] = function (block) {
    const text_return = Blockly.Python.valueToCode(block, 'return', Blockly.Python.ORDER_ATOMIC)
    // TODO: Assemble Python into code variable.
    const code = 'return ' + text_return + '\n';
    return code;
  };

  Python['elif'] = function (block) {
    const text_const = block.getFieldValue('var');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'elif ' + text_const + ':\n' + branch;
  };

  Python['else'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    return 'else:\n' + branch;
  };

  Python['df'] = function (block) {
    const text_def = Blockly.Python.valueToCode(block, 'def', Blockly.Python.ORDER_ATOMIC);
    const text_params = Blockly.Python.valueToCode(block, 'params', Blockly.Python.ORDER_ATOMIC)
    const code = text_def + '(' + text_params + ')\n';
    return code;
  };

  Python['whileout'] = function (block) {
    var text_1 = Blockly.Python.valueToCode(block, 'cond', Blockly.Python.ORDER_ATOMIC);
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const code = 'while ' + text_1 + ':\n' + branch;
    return code;
  };

  Python['time'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'import time\n';
    return code;
  };

  Python['import_math'] = function (block) {
    const code = 'import math\n';
    return code;
  };

  Python['import_audio'] = function (block) {
    const code = 'import audio\n';
    return code;
  };

  Python['sleep'] = function (block) {
    const text_sleeptime = block.getFieldValue('sleep');
    const code = 'sleep(' + text_sleeptime + ')\n';
    return code;
  };

  Python['print'] = function (block) {
    const text_print = Blockly.Python.valueToCode(block, 'print', Blockly.Python.ORDER_ATOMIC)
    // TODO: Assemble Python into code variable.
    const code = 'print("' + text_print + '")\n';
    return code;
  };

  Python['sleepnew'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'sleep', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'time.sleep(' +value_name+ ')\n';
    return code;
  };

  Python['printnew'] = function (block) {
    var text_print = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
    || 'Hello World';
    // TODO: Assemble Python into code variable.
    const code = 'print("' + text_print + '")\n';
    return code;
  };

  Python['equalsblocknew'] = function(block) {
    var value_text1 = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC);
    var value_text2 = Blockly.Python.valueToCode(block, 'text2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_text1+ ' = ' +value_text2+ '\n';
    return code;
  };

  Python['define'] = function (block) {
    const text_1 = Blockly.Python.valueToCode(block, '1', Blockly.Python.ORDER_ATOMIC)
    const text_2 = Blockly.Python.valueToCode(block, '2', Blockly.Python.ORDER_ATOMIC)
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // const statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    const code = 'def ' + text_1 + '(' + text_2 + '):\n' + branch;
    return code;
  };

  Python['greater'] = function (block) {
    const text_1 = block.getFieldValue('1');
    const text_v = block.getFieldValue('v');
    let branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // TODO: Assemble Python into code variable.
    const code = 'while ' + text_1 + ' > ' + text_v + ':\n' + branch;
    return code;
  };

  Python['buttonapressed'] = function (block) {
    const dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    const code = 'button_' + dropdown_name + '.is_pressed()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['ifinline'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'ifstate');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const value_iftext = Blockly.Python.valueToCode(block, 'iftext', Blockly.Python.ORDER_ATOMIC);
    const code = 'if ' + value_iftext + ':\n' + branch;
    return code;
  };

  Python['typeanything'] = function(block) {
    var text_stuff = Blockly.Python.valueToCode(block, 'stuff', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = text_stuff + '# your own code\n';
    return code;
  };

  Python['elifinline'] = function (block) {
    let branch = Blockly.Python.statementToCode(block, 'ifstate');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    const value_iftext = Blockly.Python.valueToCode(block, 'iftext', Blockly.Python.ORDER_ATOMIC);
    // const statements_ifstate = Blockly.Python.statementToCode(block, 'ifstate');
    // TODO: Assemble Python into code variable.
    const code = 'elif ' + value_iftext + ':\n' + branch;
    return code;
  };
 
  Python['internal'] = function(block) {
    var value_first = Blockly.Python.valueToCode(block, 'first', Blockly.Python.ORDER_ATOMIC);
    var text_choose = block.getFieldValue('choose');
    var value_last = Blockly.Python.valueToCode(block, 'last', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_first+ ' ' +text_choose+ ' ' +value_last;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  Python['andor'] = Python['internal'];

  Python['not'] = function (block) {
    var value_bool = Blockly.Python.valueToCode(block, 'bool', Blockly.Python.ORDER_ATOMIC);
    const code = 'not ' +  value_bool;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['break'] = function (block) {
    const code = 'break\n ';
    return code;
  };

  Python['textinline'] = function(block) {
    var text_text = block.getFieldValue('text');
    // TODO: Assemble Python into code variable.
    var code = text_text;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['stringinline'] = function(block) {
    var text_text = block.getFieldValue('text');
    // TODO: Assemble Python into code variable.
    var code = '"' + text_text + '"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['sliderinline'] = function(block) {
    var text_text = block.getFieldValue('slider');
    // TODO: Assemble Python into code variable.
    var code = text_text;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };


  Python['varinlines'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var text_text = block.getFieldValue('NAME');
    var value_name = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_name + ' ' +text_text+ ' ' +value_name+ '\n';
    return code;
  };

  Python['boolstatus'] = function(block) {
    var dropdown_bool = block.getFieldValue('bool');
    var code = dropdown_bool;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

 
}
