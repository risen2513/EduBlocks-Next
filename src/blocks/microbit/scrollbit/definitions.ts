export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['scrollbit_import'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from scrollbit import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('Imports the scroll:bit library');
      this.setHelpUrl('https://github.com/pimoroni/micropython-scrollbit');
    },
  };

  Blocks['scrollbit_scroll'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("scroll(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
   this.setTooltip("Scroll text on scroll:bit");
   this.setHelpUrl("https://github.com/pimoroni/micropython-scrollbit");
    }
  };

  Blocks['scrollbit_write'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("write(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
   this.setTooltip("Write text on scroll:bit");
   this.setHelpUrl("https://github.com/pimoroni/micropython-scrollbit");
    }
  };

  Blocks['scrollbit_draw'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw_icon(")
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(", ")
      this.appendValueInput("text2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(", ")
      this.appendValueInput("text3")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
   this.setTooltip("Draw an Icon");
   this.setHelpUrl("https://github.com/pimoroni/micropython-scrollbit");
    }
  };

  Blocks['scrollbit_pixel'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("set_pixel(")
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(", ")
      this.appendValueInput("text2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(", ")
      this.appendValueInput("text3")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
   this.setTooltip("Set a pixel");
   this.setHelpUrl("https://github.com/pimoroni/micropython-scrollbit");
    }
  };

  Blocks['scrollbit_show'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("show()")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
   this.setTooltip("Show text on scroll:bit");
   this.setHelpUrl("https://github.com/pimoroni/micropython-scrollbit");
    }
  };

  Blocks['scrollbit_clear'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("clear()")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
   this.setTooltip("Clear text on scroll:bit");
   this.setHelpUrl("https://github.com/pimoroni/micropython-scrollbit");
    }
  };
}