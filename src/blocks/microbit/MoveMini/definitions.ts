export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['import_movemini'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("from movemini import *");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#02AD4D");
          this.setTooltip("Imports movemini library.");
          this.setHelpUrl("");
        }
    };
 
    Blocks['movemini_init'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("robot"), "robot")
            .appendField(" = MoveMini()");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#02AD4D");
     this.setTooltip("Initialise movemini");
     this.setHelpUrl("");
      }
    };

    Blocks['movemini_direction'] = {
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
        this.setColour("#02AD4D");
     this.setTooltip("Drive the movemini");
     this.setHelpUrl("");
      }
    };

  
    Blocks['movemini_stop'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("robot"), "robot")
            .appendField(".stop()");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#02AD4D");
     this.setTooltip("Stop the robot");
     this.setHelpUrl("");
      }
    };

}
