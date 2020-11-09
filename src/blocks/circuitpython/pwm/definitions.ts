export default function define(Blocks: Blockly.BlockDefinitions) {
  let pwmcol = "#FF4A60"
  Blocks['import_pulseio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import pulseio');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
      this.setTooltip('Imports the PulseIO library.');
      this.setHelpUrl('');
    },
  };

  Blocks['import_simpleio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import simpleio');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
      this.setTooltip('Imports the PulseIO library.');
      this.setHelpUrl('');
    },
  };

  Blocks['pwm_conf'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pwm"), "pwm")
          .appendField(" = pulseio.PWMOut(")
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(", duty_cycle=")
      this.appendValueInput("text2")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(", frequency = ")
      this.appendValueInput("text3")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pwm_conf2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(" = pulseio.PWMOut(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['simple_tone'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("simple.tone(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pwm_dc'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".duty_cycle = ")
      this.appendValueInput("text")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pwm_freq'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".frequency = ")
      this.appendValueInput("text")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


}