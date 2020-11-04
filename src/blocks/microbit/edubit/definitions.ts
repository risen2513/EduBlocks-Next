export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['import_edubit'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("from EDUBIT import *");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff4800");
     this.setTooltip("Imports EDU:BIT library");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };

    Blocks['power_state_monitor'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("power_state_monitor()");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff4800");
     this.setTooltip("monitor the power switch and reset microbit when power cycled");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };

    Blocks['brake_motor'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("brake_motor(")
            .appendField(new Blockly.FieldDropdown([["M1","M1"], ["M2","M2"], ["All","All"]]), "motorChannel")
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff4800");
     this.setTooltip("Brakes the motor");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };
    Blocks['run_motor'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("run_motor(")
            .appendField(new Blockly.FieldDropdown([["M1","M1"], ["M2","M2"], ["All","All"]]), "motorChannel")
            .appendField(",")
            .appendField(new Blockly.FieldDropdown([["Forward","Forward"], ["Backward","Backward"]]), "direction")
            .appendField(", speed = ");
        this.appendValueInput("speed")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff4800");
     this.setTooltip("Runs the motor. '0' to stop, '255' to full speed");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };
    Blocks['disable_servo'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("disable_servo(")
            .appendField(new Blockly.FieldDropdown([["S1","S1"], ["S2","S2"], ["S3","S3"], ["All","All"]]), "servo")
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff4800");
     this.setTooltip("Disable the servo");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };

    Blocks['set_servo_position'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("set_servo_position(")
            .appendField(new Blockly.FieldDropdown([["S1","S1"], ["S2","S2"], ["S3","S3"], ["All","All"]]), "servo")
            .appendField(", position = ");
        this.appendValueInput("position")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff4800");
     this.setTooltip("Set servo position");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };
    Blocks['set_led'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("set_led(")
            .appendField(new Blockly.FieldDropdown([["Red","Red"], ["Yellow","Yellow"], ["Green","Green"], ["All","All"]]), "color")
            .appendField(",")
            .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "state")
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff4800");
     this.setTooltip("Sets traffic light bit");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };

    Blocks['sound_level'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("read_sound_value()");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
        this.setColour("#ff4800");
     this.setTooltip("Gets sound value");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };

    Blocks['pot_level'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("read_pot_value()");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
        this.setColour("#ff4800");
     this.setTooltip("Gets potentiometer value");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };

    Blocks['ir_state'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("read_IR_value()");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
        this.setColour("#ff4800");
     this.setTooltip("Gets IR value");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };

    Blocks['ir_triggered'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("is_IR_sensor_triggered()");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
        this.setColour("#ff4800");
     this.setTooltip("Gets IR state");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };

    Blocks['low_batt'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("is_low_batt()");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
        this.setColour("#ff4800");
     this.setTooltip("Gets low battery status");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };

    Blocks['over_voltage'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("is_overvoltage()");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
        this.setColour("#ff4800");
     this.setTooltip("Gets over voltage status");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };

    Blocks['read_vin'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("read_Vin()");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
        this.setColour("#ff4800");
     this.setTooltip("Gets input voltage value");
     this.setHelpUrl("https://github.com/Bhavithiran97/micropython-edubit");
      }
    };
}