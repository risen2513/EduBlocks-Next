export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['webwhileout'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('while');
      this.appendValueInput("cond")
        .setCheck("Boolean");
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#644A9E");
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['webfor'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('for');
      this.appendValueInput('letter')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('in range(');
      this.appendValueInput('no')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('):');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#644A9E");
      this.setTooltip('');
      this.setHelpUrl('Create a for loop');
    },
  };

  Blocks['webadvancedforloops'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('for');
      this.appendValueInput('x')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('in');
      this.appendValueInput('y')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(":");
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#644A9E");
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['web_break'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("break");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#644A9E");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['loop_get'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("i"), "VAR");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#644A9E");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
}

