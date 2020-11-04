export default function define(Blocks: Blockly.BlockDefinitions) {
  
  
  Blocks['musicimport'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import music')
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5BC16","#E5BC16","#a1882d");
      this.setTooltip('Import Music');
      this.setHelpUrl('');
    },
  };

  var musiclist = [
    ['music.DADADADUM', 'music.DADADADUM'],
    ['music.ENTERTAINER', 'music.ENTERTAINER'],
    ['music.PRELUDE', 'music.PRELUDE'],
    ['music.ODE', 'music.ODE'],
    ['music.NYAN', 'music.NYAN'],
    ['music.RINGTONE', 'music.RINGTONE'],
    ['music.FUNK', 'music.FUNK'],
    ['music.BLUES', 'music.BLUES'],
    ['music.BIRTHDAY', 'music.BIRTHDAY'],
    ['music.WEDDING', 'music.WEDDING'],
    ['music.FUNERAL', 'music.FUNERAL'],
    ['music.PUNCHLINE', 'music.PUNCHLINE'],
    ['music.PYTHON', 'music.PYTHON'],
    ['music.BADDY', 'music.BADDY'],
    ['music.CHASE', 'music.CHASE'],
    ['music.BA_DING', 'music.BA_DING'],
    ['music.WAWAWAWAA', 'music.WAWAWAWAA'],
    ['music.JUMP_UP', 'music.JUMP_UP'],
    ['music.JUMP_DOWN', 'music.JUMP_DOWN'],
    ['music.POWER_UP', 'music.POWER_UP'],
    ['music.POWER_DOWN', 'music.POWER_DOWN']
  ]

  Blocks['songs'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(musiclist), "songs");
      this.setOutput(true, "String");
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setInputsInline(true);
      this.setColour("#E5BC16","#E5BC16","#a1882d");
      this.setTooltip("Choose a song");
      this.setHelpUrl("");
    }
  };
  
  
  Blocks['musicplay'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('music.play(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5BC16","#E5BC16","#a1882d");
      this.setTooltip('Play Music');
      this.setHelpUrl('');
    },
  };

  Blocks['musicpitch'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('music.pitch(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5BC16","#E5BC16","#a1882d");
      this.setTooltip('Change music pitch');
      this.setHelpUrl('');
    },
  };

  Blocks['music_pin'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin = ");
      this.appendValueInput("pin")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#E5BC16");
   this.setTooltip("Assign pin to music");
   this.setHelpUrl("");
    }
  };

  Blocks['musicreset'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("music.reset()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5BC16","#E5BC16","#a1882d");
   this.setTooltip("Reset Music");
   this.setHelpUrl("");
    }
  };

  Blocks['musicstop'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('music.stop(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5BC16","#E5BC16","#a1882d");
      this.setTooltip('Stop music');
      this.setHelpUrl('');
    },
  };

  Blocks['musictempo'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('music.set_tempo(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E5BC16","#E5BC16","#a1882d");
      this.setTooltip('Change music tempo');
      this.setHelpUrl('');
    },
  };

  Blocks['musicgettempo'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('music.get_tempo()');
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E5BC16","#E5BC16","#a1882d");
      this.setTooltip('Get tempo');
      this.setHelpUrl('');
    },
  };

}