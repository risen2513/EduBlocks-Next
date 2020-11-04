export default function define(Python: Blockly.BlockGenerators) {
    Python['import_gigglebot'] = function(block) {
        var code = 'from gigglebot import *\n';
        return code;
    };

    Python['gigglebot_init'] = function(block) {
        var code = 'init()\n';
        return code;
    };

    Python['drive'] = function(block) {
        var dropdown_dir = block.getFieldValue('dir');
        var code = 'drive('+dropdown_dir+')\n';
        return code;
    };

    Python['drive_x_milliseconds'] = function(block) {
        var dropdown_dir = block.getFieldValue('dir');
        var value_milliseconds = Blockly.Python.valueToCode(block, 'milliseconds', Blockly.Python.ORDER_ATOMIC)
                             || '0';
        var code = 'drive('+dropdown_dir+', milliseconds='+value_milliseconds+')\n';
        return code;
    };

    Python['turn'] = function(block) {
        var dropdown_dir = block.getFieldValue('dir');
        var code = 'turn('+dropdown_dir+')\n';
        return code;
    };

    Python['turn_x_milliseconds'] = function(block) {
        var dropdown_dir = block.getFieldValue('dir');
        var number_milliseconds = Blockly.Python.valueToCode(block, 'milliseconds', Blockly.Python.ORDER_ATOMIC)
        var code = 'turn('+dropdown_dir+', milliseconds='+number_milliseconds+')\n';
        return code;
    };

    Python['stop'] = function(block) {
        var code = 'stop()\n';
        return code;
    };

    Python['set_speed'] = function(block) {
        var number_left = Blockly.Python.valueToCode(block, 'power_left', Blockly.Python.ORDER_ATOMIC)
                             || '0';
        var number_rigth = Blockly.Python.valueToCode(block, 'power_right', Blockly.Python.ORDER_ATOMIC)
        || '0';
        var code = 'set_speed(' + number_left + ', ' + number_rigth + ')\n';
        return code;
    };

    Python['set_servo'] = function(block) {
        var dropdown_which = block.getFieldValue('which');
        var number_degrees = Blockly.Python.valueToCode(block, 'degrees', Blockly.Python.ORDER_ATOMIC)
                            || '0';
        var code = 'set_servo('+dropdown_which+', degrees='+number_degrees+')\n';
        return code;
    };

    Python['servo_off'] = function(block) {
        var dropdown_which = block.getFieldValue('which');
        var code = 'servo_off('+dropdown_which+')\n';
        return code;
    };

    Python['set_smile'] = function(block) {
        var number_R = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC)
                         || '0';
        var number_G = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC)
                         || '0';
        var number_B = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC)
                        || '0';

        var code = 'set_smile(R=' + number_R + ', G=' + number_G + ', B=' + number_B + ')\n';
        return code;
    };

    Python['set_eyes'] = function(block) {
        var dropdown_which = block.getFieldValue('which');
        var number_R = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC)
                         || '0';
        var number_G = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC)
                         || '0';
        var number_B = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC)
                        || '0';
        var code = 'set_eyes('+ dropdown_which + ', R=' + number_R + ', G=' + number_G + ', B=' + number_B + ')\n';
        return code;
    };

    Python['read_sensor'] = function(block) {
        var dropdown_sensor = block.getFieldValue('sensor');
        var dropdown_which = block.getFieldValue('which');
        var code = 'read_sensor('+ dropdown_sensor + ', '+ dropdown_which + ')';
        return [code, Blockly.Python.ORDER_ATOMIC];
    };
    
    Python['volt'] = function(block) {
        var code = 'volt()';
        return [code, Blockly.Python.ORDER_ATOMIC];
    };


}
