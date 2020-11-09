export default function define(Blocks: Blockly.BlockDefinitions) {
  let digitalcol = "#2C97DF"
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
          .appendField(new Blockly.FieldTextInput(""), "pinno")
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
          .appendField(new Blockly.FieldTextInput(""), "direction");
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
          .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

}