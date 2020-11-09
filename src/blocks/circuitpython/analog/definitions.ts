export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['import_analogio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from analogio import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E67D21");
      this.setTooltip('Imports the DigitalIO library.');
      this.setHelpUrl('');
    },
  };

  Blocks['analog_in'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("analogin"), "pin")
          .appendField(" = AnalogIn(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E67D21");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['analog_out'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("analog_out"), "pin")
          .appendField(" = AnalogOut(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E67D21");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['analogpinvalue'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".value = ")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E67D21");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['valinline'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".value");
      this.setOutput(true, null);
      this.setColour("#E67D21");
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

}