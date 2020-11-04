export default function define(Python: Blockly.BlockGenerators) {
    Python['import_DriveBit'] = function(block) {
        var code = 'from DriveBit import *\n';
        return code;
    };

    Python['DriveBit_init'] = function(block) {
        var variable_robot = Blockly.Python.variableDB_.getName(block.getFieldValue('robot'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble Python into code variable.
        var code = variable_robot + ' = DriveBit()\n';
        return code;
      };

      Python['DriveBit_direction'] = function(block) {
        var variable_robot = Blockly.Python.variableDB_.getName(block.getFieldValue('robot'), Blockly.Variables.NAME_TYPE);
        var dropdown_motor = block.getFieldValue('motor');
        var dropdown_direction = block.getFieldValue('direction');
        var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_robot+ '.motor.' +dropdown_motor+ '.' +dropdown_direction+ '(' +value_name+ ')\n';
        return code;
      };

      Python['DriveBit_stop'] = function(block) {
        var variable_robot = Blockly.Python.variableDB_.getName(block.getFieldValue('robot'), Blockly.Variables.NAME_TYPE);
        var dropdown_motor = block.getFieldValue('motor');
        // TODO: Assemble Python into code variable.
        var code = variable_robot+ '.motor.' +dropdown_motor+ '.stop()\n';
        return code;
      };

    Python['sliderinlinerobot'] = function(block) {
        var text_text = block.getFieldValue('slider');
        // TODO: Assemble Python into code variable.
        var code = text_text;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
    };
      

   
}
