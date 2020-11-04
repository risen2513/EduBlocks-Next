export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['import_minibit'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("from Minibit import *");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#0D2D6A");
          this.setTooltip("Imports gigglebot library.");
          this.setHelpUrl("");
        }
    };
 
    Blocks['minibit_init'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("robot"), "robot")
            .appendField(" = miniBit()");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#0D2D6A");
     this.setTooltip("Initialise minibit");
     this.setHelpUrl("");
      }
    };

    Blocks['minibit_direction'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("robot"), "robot")
            .appendField(".")
            .appendField(new Blockly.FieldDropdown([["forward","forward"], ["backward","backward"], ["left","left"], ["right","right"]]), "directions")
            .appendField("(");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#0D2D6A");
     this.setTooltip("Drive the Minibit");
     this.setHelpUrl("");
      }
    };

    Blocks['sliderinlinerobot'] = {
      init: function() {
        this.appendDummyInput()
          .appendField(new Blockly.FieldSlider("1023", "0", "1023", "1", "1", "Speed"), 'slider');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
        this.setColour("#FFFFFF", "#FFFFFF", "#FFFFFF");
        this.setTooltip("Slider input for inline input");
        this.setHelpUrl("");
      }
    };

    Blocks['minineovarnew'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("robot"), "robot")
            .appendField(".leds[")
        this.appendValueInput("text")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("] = (")
        this.appendValueInput("text1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#0D2D6A");
     this.setTooltip("Set Neopixel Colour");
     this.setHelpUrl("");
      }
    };

    Blocks['minineoshow'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("robot"), "robot")
            .appendField("leds.show()");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#0D2D6A");
     this.setTooltip("Show the set neopixel config");
     this.setHelpUrl("");
      }
    };
  
    Blocks['minineoclear'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("robot"), "robot")
            .appendField("leds.clear()");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#0D2D6A");
     this.setTooltip("Clear the set neopixel config");
     this.setHelpUrl("");
      }
    };

    Blocks['minibit_stop'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("robot"), "robot")
            .appendField(".stop(");
        this.appendValueInput("stop")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#0D2D6A");
     this.setTooltip("Stop the robot");
     this.setHelpUrl("");
      }
    };

    Blocks['minibit_sonar'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("robot"), "robot")
            .appendField(".sonar_")
            .appendField(new Blockly.FieldDropdown([["cm","cm"], ["mm","mm"]]), "measure")
            .appendField("()");
        this.setOutput(true, null);
        this.setColour("#0D2D6A");
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
     this.setTooltip("Measure the sonar distance");
     this.setHelpUrl("");
      }
    };

     
}
