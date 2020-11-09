let digitalcol = "#2C97DF"
export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['import_digitalio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from digitalio import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
      this.setTooltip('Imports the DigitalIO library.');
      this.setHelpUrl('');
    },
  };

  Blocks['pinconfig'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(" = DigitalInOut(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pindirection'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".direction = ")
      this.appendValueInput("text")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pull'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".pull = ")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pinvalue'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".value = ")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['valuein'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".value");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

}