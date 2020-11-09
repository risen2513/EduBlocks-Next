export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['setneo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("np"), "NAME")
          .appendField(" = neopixel.NeoPixel(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Configure Neopixels");
   this.setHelpUrl("");
    }
  }; 

  Blocks['fill'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("np"), "NAME")
          .appendField(".fill(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Configure Neopixels");
   this.setHelpUrl("");
    }
  };
  

  Blocks['neovarnew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("np"), "NAME")
          .appendField("[")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("] = (")
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Set Neopixel Colour");
   this.setHelpUrl("");
    }
};

  Blocks['importneo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("import neopixel")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Import Neopixel Library");
   this.setHelpUrl("");
    }
  };

  Blocks['neoshow'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("np"), "NAME")
          .appendField(".show()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Show the set neopixel config");
   this.setHelpUrl("");
    }
  };

  Blocks['neoclear'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("np"), "NAME")
          .appendField(".clear()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Clear the set neopixel config");
   this.setHelpUrl("");
    }
  };

}