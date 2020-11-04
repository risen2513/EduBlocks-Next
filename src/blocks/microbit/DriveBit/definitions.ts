export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['import_DriveBit'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("from DriveBit import *");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#c51a4a");
          this.setTooltip("Imports DriveBit library.");
          this.setHelpUrl("");
        }
    };
 
    Blocks['DriveBit_init'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("robot"), "robot")
            .appendField(" = DriveBit()");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#c51a4a");
     this.setTooltip("Initialise DriveBit");
     this.setHelpUrl("");
      }
    };

    Blocks['DriveBit_direction'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("robot"), "robot")
            .appendField(".motor.")
            .appendField(new Blockly.FieldDropdown([["one","one"], ["two","two"]]), "motor")
            .appendField(".")
            .appendField(new Blockly.FieldDropdown([["forward","forward"], ["backward","backward"]]), "direction")
            .appendField("(");
        this.appendValueInput("NAME")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#c51a4a");
     this.setTooltip("");
     this.setHelpUrl("");
      }
    };

    Blocks['DriveBit_stop'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("robot"), "robot")
            .appendField(".motor.")
            .appendField(new Blockly.FieldDropdown([["one","one"], ["two","two"]]), "motor")
            .appendField(".stop()");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#c51a4a");
     this.setTooltip("");
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


     
}
