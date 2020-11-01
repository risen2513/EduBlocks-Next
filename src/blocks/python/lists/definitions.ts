export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['create_list'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("list"), "list")
          .appendField(" = [");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("]");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#15BAD4");
   this.setTooltip("Create a list");
   this.setHelpUrl("");
    }
  };
  
  Blocks['calllist'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("list"), "list");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#15BAD4");
   this.setTooltip("Call a list");
   this.setHelpUrl("");
    }
  };

  Blocks['selectlist'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("list"), "list")
          .appendField("[");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("]");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#15BAD4");
   this.setTooltip("Pick from a list");
   this.setHelpUrl("");
    }
  };

  Blocks['selectlist2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("list"), "list")
          .appendField("[");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#15BAD4");
   this.setTooltip("Pick from a list");
   this.setHelpUrl("");
    }
  };

  Blocks['optionlist'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("list"), "list")
          .appendField(".")
          .appendField(new Blockly.FieldDropdown([["append","append"], ["insert","insert"], ["extend","extend"], ["pop","pop"], ["remove","remove"]]), "options")
          .appendField("(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#15BAD4");
   this.setTooltip("Do a variety of actions with a list");
   this.setHelpUrl("");
    }
  };
}

