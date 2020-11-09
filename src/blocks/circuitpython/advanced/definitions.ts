export default function define(Blocks: Blockly.BlockDefinitions) {
  let advcol = "#22a6b3"

  // CPU Temp

  Blocks['import_micro'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import microcontroller');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(advcol);
      this.setTooltip('Imports the microcontroller library.');
      this.setHelpUrl('');
    },
  };

  Blocks['cputemp'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("microcontroller.cpu.temperature");
      this.setOutput(true, null);
      this.setColour(advcol);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

 // Storage

 Blocks['import_storage'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('import storage');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(advcol);
    this.setTooltip('Imports the storage library.');
    this.setHelpUrl('');
    },
  };

  Blocks['storage_remount'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("storage.remount(");
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("text2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(advcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['open'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("open(");
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("text2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(advcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['write'] = {
    init: function() {
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".write(");
      this.appendValueInput("text2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(advcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


}