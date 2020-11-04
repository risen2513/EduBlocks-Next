export default function define(Python: Blockly.BlockGenerators) {
    Python['import_movemini'] = function(block) {
        var code = 'from movemini import *\n';
        return code;
    };

    Python['movemini_init'] = function(block) {
        var variable_robot = Blockly.Python.variableDB_.getName(block.getFieldValue('robot'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble Python into code variable.
        var code = variable_robot + ' = MoveMini()\n';
        return code;
      };

    Python['movemini_direction'] = function(block) {
        var variable_robot = Blockly.Python.variableDB_.getName(block.getFieldValue('robot'), Blockly.Variables.NAME_TYPE);
        var dropdown_directions = block.getFieldValue('directions');
        var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_robot+ '.' +dropdown_directions+ '(' +value_name+ ')\n';
        return code;
      };


    Python['movemini_stop'] = function(block) {
        var variable_robot = Blockly.Python.variableDB_.getName(block.getFieldValue('robot'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble Python into code variable.
        var code = variable_robot+ '.stop()\n';
        return code;
      };
}
