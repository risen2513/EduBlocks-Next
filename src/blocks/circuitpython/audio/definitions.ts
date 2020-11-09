export default function define(Blocks: Blockly.BlockDefinitions) {
  let audiocol = "#4CE254"
  Blocks['import_audio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import audioio');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
      this.setTooltip('Imports the DigitalIO library.');
      this.setHelpUrl('');
    },
  };

  Blocks['audio_enable'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("audio"), "pin")
          .appendField(".switch_to_output(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['audio_conf'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("audio"), "pin")
          .appendField(" = audioio.AudioOut(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['audio_wav'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("audio"), "pin")
          .appendField(" = audioio.WaveFile(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blocks['audio_open'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("data"), "data")
          .appendField(" = open(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blocks['audio_playing'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("audio"), "pin")
          .appendField(".playing");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['audio_raw'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("sample"), "pin")
          .appendField(" = audioio.RawSample(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['audio_play'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("audio"), "pin")
          .appendField(".play(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['audio_stop'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("audio"), "pin")
          .appendField(".stop()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(audiocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


}