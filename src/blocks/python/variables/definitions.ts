export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['variables_get'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("var"), "VAR");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#0000CD");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blocks['variables_set'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(""), "VAR")
        .appendField(new Blockly.FieldDropdown([['=', '='], ['+=', '+='], ["-=", "-="]]), 'NAME')
      this.appendValueInput("varset")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0000CD");
      this.setTooltip("assign a value, increment, or decrement a variable");
      this.setHelpUrl("");
    }
  };

  Blocks['textinline'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "text");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#FFFFFF", "#FFFFFF", "#FFFFFF");
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Text input for inline input");
      this.setHelpUrl("");
    }
  };

  
}

