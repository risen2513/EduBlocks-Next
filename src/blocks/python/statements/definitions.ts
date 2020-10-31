export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['websleepnew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("time.sleep(");
      this.appendValueInput("sleep")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip("Wait (in milliseconds)");
      this.setHelpUrl("");
    }
  };

  Blocks['webtypeanything'] = {
    init: function() {
      this.appendValueInput("stuff")
        .setCheck(null);
      this.appendDummyInput()   
          .appendField("# your own code");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip("Type any python code into this block");
      this.setHelpUrl("");
    }
  };


  Blocks['webdf'] = {
    init: function () {
      this.appendValueInput("def")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('(');
      this.appendValueInput("params")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('call a define function');
      this.setHelpUrl('');
    },
  };

  Blocks['webpass'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('pass');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Pass to the next command');
      this.setHelpUrl('');
    },
  };

  Blocks['webprintnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print("')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('" )');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Use this to print a string to the output box.');
      this.setHelpUrl('');
    },
  };

  Blocks["textinline"] = {
    init: function() {
      this.appendDummyInput().appendField(new Blockly.FieldTextInput(""), "text");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#FFFFFF", "#FFFFFF", "#FFFFFF");
      this.setTooltip("Text input for inline input");
      this.setHelpUrl("");
    }
  };

  Blocks["stringinline"] = {
    init: function() {
      this.appendDummyInput().appendField(new Blockly.FieldString(""), "text");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#FFFFFF", "#FFFFFF", "#FFFFFF");
      this.setTooltip("String input for inline input");
      this.setHelpUrl("");
    }
  };

  Blocks['brackets'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("(");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour('#F89621');
   this.setTooltip("Brackets");
   this.setHelpUrl("");
    }
  };

  Blocks['upper_lower'] = {
    init: function() {
      this.appendValueInput("string")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".")
          .appendField(new Blockly.FieldDropdown([["upper","upper"], ["lower","lower"]]), "upperlower")
          .appendField("()");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#F89621");
   this.setTooltip("Convert string to upper or lower case");
   this.setHelpUrl("");
    }
  };

  Blocks['global'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('global ');
      this.appendValueInput("text")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Make a variable global');
      this.setHelpUrl('');
    },
  };

  Blocks['webvarprint'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('print(')
      this.appendValueInput('var')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#F89621');
      this.setTooltip('Use this to print a variable, a number, or even a string if you put in the quotes yourself.');
      this.setHelpUrl('');
    },
  };

  Blocks['webint'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('int(');
      this.appendValueInput("bool")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
      this.setTooltip('Changes to an int');
      this.setHelpUrl('');
    },
  };

  Blocks['webcomma'] = {
    init: function() {
      this.appendValueInput("in1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["+","+"], [",",","]]), "commadd");
      this.appendValueInput("in2")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
    }
  };
  

  Blocks['input_web'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("input(");
      this.appendValueInput("NAME")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['webstr'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('str(');
      this.appendValueInput("bool")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#F89621');
      this.setTooltip('Changes to an str');
      this.setHelpUrl('');
    },
  };
}

