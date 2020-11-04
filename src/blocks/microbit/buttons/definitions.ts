export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['buttonispressed'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('button_')
        .appendField(new Blockly.FieldDropdown([['a', 'a'], ['b', 'b']]), 'NAME')
        .appendField('.is_pressed()');
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#167EE5","#167EE5","#3775b3");
      this.setTooltip('Button Is Pressed');
      this.setHelpUrl('');
    },
  };

  Blocks['buttonwaspressed'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('button_')
        .appendField(new Blockly.FieldDropdown([['a', 'a'], ['b', 'b']]), 'NAME')
        .appendField('.was_pressed()');
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#167EE5","#167EE5","#3775b3");
      this.setTooltip('Button Was Pressed');
      this.setHelpUrl('');
    },
  };

}