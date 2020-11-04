export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['imspeech'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import speech');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16E5E5","#16E5E5","#33a8a6");
      this.setTooltip('Imports the speech library');
      this.setHelpUrl('');
    },
  };

  Blocks['speechsay'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('speech.say("')
        .appendField(new Blockly.FieldTextInput(''), 'words')
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16E5E5","#16E5E5","#33a8a6");
      this.setTooltip('Say something');
      this.setHelpUrl('');
    },
  };

  Blocks['speechsaynew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('speech.say("')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16E5E5","#16E5E5","#33a8a6");
      this.setTooltip('Say something');
      this.setHelpUrl('');
    },
  };

  Blocks['speechpro'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('speech.pronounce("')
        .appendField(new Blockly.FieldTextInput(''), 'pro')
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16E5E5","#16E5E5","#33a8a6");
      this.setTooltip('Pronounce something');
      this.setHelpUrl('');
    },
  };

  Blocks['speechpronew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('speech.pronounce("')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16E5E5","#16E5E5","#33a8a6");
      this.setTooltip('Pronounce something');
      this.setHelpUrl('');
    },
  };
  

  Blocks['speechsing'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('speech.sing("')
        .appendField(new Blockly.FieldTextInput(''), 'sing')
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16E5E5","#16E5E5","#33a8a6");
      this.setTooltip('Sing something');
      this.setHelpUrl('');
    },
  };

  Blocks['speechsingnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('speech.sing(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#16E5E5","#16E5E5","#33a8a6");
      this.setTooltip('Sing something');
      this.setHelpUrl('');
    },
  };
}