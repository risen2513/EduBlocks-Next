export default function define(Python: Blockly.BlockGenerators) {
    Python['import_bitbot'] = function(block) {
        var code = 'from BitBotXL import *\n';
        return code;
    };

    Python['bitbot_init'] = function(block) {
        var variable_robot = Blockly.Python.variableDB_.getName(block.getFieldValue('robot'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble Python into code variable.
        var code = variable_robot + ' = bitBotXL()\n';
        return code;
      };

    Python['bitbot_direction'] = function(block) {
        var variable_robot = Blockly.Python.variableDB_.getName(block.getFieldValue('robot'), Blockly.Variables.NAME_TYPE);
        var dropdown_directions = block.getFieldValue('directions');
        var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_robot+ '.' +dropdown_directions+ '(' +value_name+ ')\n';
        return code;
      };

    Python['bitbotneovarnew'] = function(block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('robot'), Blockly.Variables.NAME_TYPE);
        var text_neonum = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
        || 'True';
        var text_colour = Blockly.Python.valueToCode(block, 'text1', Blockly.Python.ORDER_ATOMIC)
        || 'True';
        // TODO: Assemble Python into code variable.
        var code = variable_name+ '.leds[' +text_neonum+ '] = (' +text_colour+ ')\n';
        return code;
      };

    Python['bitbotneoshow'] = function(block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('robot'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble Python into code variable.
        var code = variable_name+ 'leds.show()\n';
        return code;
    };

    Python['bitbotneoclear'] = function(block) {
        var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('robot'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble Python into code variable.
        var code = variable_name+ 'leds.clear()\n';
        return code;
    };

    Python['sliderinlinerobot'] = function(block) {
        var text_text = block.getFieldValue('slider');
        // TODO: Assemble Python into code variable.
        var code = text_text;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
    };
      

    Python['bitbot_stop'] = function(block) {
        var variable_robot = Blockly.Python.variableDB_.getName(block.getFieldValue('robot'), Blockly.Variables.NAME_TYPE);
        var value_stop = Blockly.Python.valueToCode(block, 'stop', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_robot+ '.stop(' +  value_stop+ ')\n';
        return code;
      };

    Python['bitbot_sonar'] = function(block) {
        var variable_robot = Blockly.Python.variableDB_.getName(block.getFieldValue('robot'), Blockly.Variables.NAME_TYPE);
        var dropdown_measure = block.getFieldValue('measure');
        // TODO: Assemble Python into code variable.
        var code = variable_robot + '.sonar_' +dropdown_measure+ '()';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
    };




}
