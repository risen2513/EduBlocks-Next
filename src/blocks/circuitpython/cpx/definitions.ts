export default function define(Blocks: Blockly.BlockDefinitions) {
  let cpxcol = "#556EE6"
  Blocks['import_cpx'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from adafruit_circuitplayground.express import cpx');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
      this.setTooltip('Imports the CPX library.');
      this.setHelpUrl('');
    },
  };

  Blocks['redled'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.red_led = ");
      this.appendValueInput("text")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['switch'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.switch");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['detect_taps'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.detect_taps =");
      this.appendValueInput("text")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['tapped'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.tapped");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['shake'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.shake(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['light'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.light");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['acc'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.acceleration");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['button'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.button_")
          .appendField(new Blockly.FieldDropdown([["a","a"], ["b","b"]]), "button");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['temp'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.acceleration");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['touchdrop'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.touch_")
          .appendField(new Blockly.FieldDropdown([["a1","a1"], ["a2","a2"], ["a3","a3"], ["a4","a4"], ["a5","a5"], ["a6","a6"], ["a7","a7"]]), "button");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['playtone'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.play_tone(");
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(", ");
      this.appendValueInput("text2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['starttone'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.start_tone(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['stoptone'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.stop_tone()");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['playfile'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cpx.play_file(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cpxcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  

}