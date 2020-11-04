export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['microphone_current'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('microphone.current_sound()');
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setOutput(true, null);
      this.setColour('#008080');
      this.setTooltip('Get current sound loud/quiet');
      this.setHelpUrl('');
    },
  };

  Blocks['microphone_level'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("microphone.")
          .appendField(new Blockly.FieldDropdown([["LOUD","LOUD"], ["QUIET","QUIET"]]), "level");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#008080');
      this.setTooltip("Reference the onboard microphone level");
      this.setHelpUrl("");
    }
  };

  Blocks['microphone_sound'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("microphone.sound_level()")
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#008080');
      this.setTooltip("Reference the onboard microphone level");
      this.setHelpUrl("");
    }
  };

  Blocks['microphone_wassound'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("microphone.was_sound(");
      this.appendValueInput("level")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour('#008080');
   this.setTooltip("Check if a loud/quiet sound occurred since the last call to was_sound()");
   this.setHelpUrl("");
    }
  };

  Blocks['microphone_getsounds'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('microphone.get_sounds()');
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setOutput(true, null);
      this.setColour('#008080');
      this.setTooltip('Get history of sounds since last call to get_sounds()');
      this.setHelpUrl('');
    },
  };

}