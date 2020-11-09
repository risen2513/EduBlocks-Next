export default function define(Blocks: Blockly.BlockDefinitions) {
  let touchcol = "#E84C3D"
  Blocks['import_touchio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import touchio');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(touchcol);
      this.setTooltip('Imports the TouchIO library.');
      this.setHelpUrl('');
    },
  };

  Blocks['touch_conf'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("touch"), "pin")
          .appendField(" = touchio.TouchIn(")
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(touchcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['touch_valinline'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("touch"), "pin")
          .appendField(".value");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(touchcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

}