export default function define(Python: Blockly.BlockGenerators) {
  Python['import_turtle'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from turtle import *\n';
    return code;
  }; 

  Python['turtle'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+ ' = Turtle()\n';
    return code;
  };
  
  Python['screeninit'] = function(block) {
    var variable_wn = Blockly.Python.variableDB_.getName(block.getFieldValue('wn'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_wn+ ' = Screen()\n';
    return code;
  };

  Python['background'] = function(block) {
    var variable_wn = Blockly.Python.variableDB_.getName(block.getFieldValue('wn'), Blockly.Variables.NAME_TYPE);
    let text_color = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_wn+ '.bgcolor(' +text_color+ ')\n';
    return code;
  };

  Python['directions'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    var dropdown_options = block.getFieldValue('options');
    let text_dist = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+ '.' +dropdown_options+ '(' +text_dist+ ')\n';
    return code;
  };

  Python['penud'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    var dropdown_options = block.getFieldValue('options');
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+ '.pen' +dropdown_options+ '()\n';
    return code;
  };

  Python['pen'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+'.Pen()\n';
    return code;
  };

  Python['colourpen'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    let text_dist = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+'.pencolor(' +text_dist+ ')\n';
    return code;
  };

  Python['colour'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    let text_dist = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+'.color(' +text_dist+ ')\n';
    return code;
  };

  Python['colourmode'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('wn'), Blockly.Variables.NAME_TYPE);
    let text_dist = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+'.colormode(' +text_dist+ ')\n';
    return code;
  };

  Python['penwidth'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    let text_dist = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+'.width(' +text_dist+ ')\n';
    return code;
  };
  
  Python['turtlespeed'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    let text_dist = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+'.speed(' +text_dist+ ')\n';
    return code;
  };

  Python['turtleshape'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    let text_dist = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+'.shape(' +text_dist+ ')\n';
    return code;
  };

  Python['circle'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    let text_dist = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+'.circle(' +text_dist+ ')\n';
    return code;
  };

  Python['goto'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    let text_dist = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+'.goto(' +text_dist+ ')\n';
    return code;
  };
}
