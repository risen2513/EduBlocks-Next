export default function define(Blocks: Blockly.BlockDefinitions) {


  Blocks['radiosend'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('radio.send(')
        .appendField(new Blockly.FieldTextInput('"hello"'), 'send')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#7EE516', '#7EE516', '#72ad33');
      this.setTooltip('Send a radio command');
      this.setHelpUrl('');
    },
  };

  Blocks['radiosendnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('radio.send(');
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#7EE516', '#7EE516', '#72ad33');
      this.setTooltip('Send a radio command');
      this.setHelpUrl('');
    },
  };


  Blocks['radioconf'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('radio.config(')
        .appendField(new Blockly.FieldTextInput(''), 'conf')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#7EE516', '#7EE516', '#72ad33');
      this.setTooltip('Configure Radio');
      this.setHelpUrl('');
    },
  };

  Blocks['radioconfnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('radio.config(');
      this.appendValueInput('text')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#7EE516', '#7EE516', '#72ad33');
      this.setTooltip('Configure Radio');
      this.setHelpUrl('');
    },
  };

  Blocks['imradio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import radio');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#7EE516', '#7EE516', '#72ad33');
      this.setTooltip('Import Radio');
      this.setHelpUrl('');
    },
  };

  Blocks['radioon'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('radio.on()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#7EE516', '#7EE516', '#72ad33');
      this.setTooltip('Turn Radio On');
      this.setHelpUrl('');
    },
  };

  Blocks['ifradio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('if ')
        .appendField(new Blockly.FieldVariable('incoming'), 'incoming')
        .appendField(' == ')
        .appendField(new Blockly.FieldTextInput(''), 'sentitem')
        .appendField(':');
      this.appendStatementInput('DO')
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#7EE516', '#7EE516', '#72ad33');
      this.setTooltip('Check if there is an incoming radio command.');
      this.setHelpUrl('');
    },
  };

  Blocks['incoming'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('incoming'), 'incoming')
        .appendField(' = radio.receive()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#7EE516', '#7EE516', '#72ad33');
      this.setTooltip('Initialize receiver');
      this.setHelpUrl('');
    },
  };



}