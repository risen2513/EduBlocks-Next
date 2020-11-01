export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['webdefine'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('def ');
      this.appendValueInput('1')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('(');
      this.appendValueInput('2')
        .setCheck(null);
      this.appendDummyInput()
        .appendField('):');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#CDDA36");
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['inline_def'] = {
    init: function() {
      this.appendValueInput("def")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("(");
      this.appendValueInput("input")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setOutput(true, null);
      this.setColour("#CDDA36");
   this.setTooltip("");
   this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND)
   this.setHelpUrl("");
    }
  };

  Blocks['self'] = {
    init: function() {
      this.appendDummyInput()
        .appendField('self.')
        .appendField(new Blockly.FieldVariable(""), "VAR")
        .appendField(new Blockly.FieldDropdown([['=', '='], ['+=', '+='], ["-=", "-="]]), 'NAME')
      this.appendValueInput("varset")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#CDDA36");
      this.setTooltip("assign a value, increment, or decrement a variable");
      this.setHelpUrl("");
    }
  };

  Blocks['webreturn2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('return');
      this.appendValueInput('return')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setInputsInline(true);
      this.setColour("#CDDA36");
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['webclass'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('class')
      this.appendValueInput("class")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(':');
      this.appendStatementInput('DO')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#CDDA36");
      this.setTooltip('Class Statement.');
      this.setHelpUrl('');
    },
  };

}

