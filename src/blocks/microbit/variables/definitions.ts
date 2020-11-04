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

  
}

