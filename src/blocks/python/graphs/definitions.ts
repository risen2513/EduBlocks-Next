export default function define(Blocks: Blockly.BlockDefinitions) {

  let graphcol = "#008FD1"

  Blocks['chart_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("name"), "name")
          .appendField(" = pygal.")
          .appendField(new Blockly.FieldDropdown([["Line","Line"], ["StackedLine","StackedLine"], ["Bar","Bar"], ["StackedBar","StackedBar"], ["HorizontalBar","HorizontalBar"], ["StackedHorizontalBar","StackedHorizontalBar"], ["XY","XY"],["Pie","Pie"], ["Radar","Radar"]]), "chartTypes")
          .appendField("(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(graphcol);
   this.setTooltip("Specify which type of chart you want to use");
   this.setHelpUrl("");
    }
  };

  Blocks['chart_title'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("name"), "name")
          .appendField(".title = ");
      this.appendValueInput("text")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(graphcol);
   this.setTooltip("Add a title to the chart");
   this.setHelpUrl("");
    }
  };

  Blocks['chart_add'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("name"), "name")
          .appendField(".add(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(", [");
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("])");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(graphcol);
   this.setTooltip("Add values to your chart");
   this.setHelpUrl("");
    }
  };

  Blocks['chart_xlabels'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("name"), "name")
          .appendField(".x_labels = ");
      this.appendValueInput("text")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(graphcol);
   this.setTooltip("Create labels for the X axis");
   this.setHelpUrl("");
    }
  };

  Blocks['chart_render'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("name"), "name")
          .appendField(".render()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(graphcol);
   this.setTooltip("Render your chart");
   this.setHelpUrl("");
    }
  };


}

