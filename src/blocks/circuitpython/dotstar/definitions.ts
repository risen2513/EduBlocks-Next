export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['import_dotstar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import adafruit_dotstar');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516");
      this.setTooltip('Scroll a Message');
      this.setHelpUrl('');
    },
  };

  Blocks['vardotstar'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("led"), "led")
          .appendField(" = adafruit_dotstar.DotStar(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['ledfill'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("led"), "led")
          .appendField(".fill(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['dsbrightness'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("led"), "led")
          .appendField(".brightness = ")
      this.appendValueInput("text")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['dsvar'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("led"), "led")
          .appendField("[")
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("] = (")
      this.appendValueInput("text2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516");
   this.setTooltip("Set Neopixel Colour");
   this.setHelpUrl("");
    }
  };

}