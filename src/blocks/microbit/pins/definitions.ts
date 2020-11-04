export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['pintouchednew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".is_touched()");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E51616","#E51616","#a82f2f");
   this.setTooltip("If this pin is touched");
   this.setHelpUrl("");
    }
  };

  Blocks['logotouched'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin_logo.is_touched()")
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E51616","#E51616","#a82f2f");
   this.setTooltip("If logo pin is touched");
   this.setHelpUrl("");
    }
  };

  Blocks['pin_speaker'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin_speaker");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#E51616");
   this.setTooltip("Reference onboard speaker pin");
   this.setHelpUrl("");
    }
  };
  
  Blocks['analogreadnew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".read_analog()");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E51616","#E51616","#a82f2f");
   this.setTooltip("Read Analog");
   this.setHelpUrl("");
    }
  };

  Blocks['digitalreadnew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".read_digital()");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E51616","#E51616","#a82f2f");
   this.setTooltip("Read Digital");
   this.setHelpUrl("");
    }
  };

  Blocks['writeanalognew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".write_analog(")
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616","#E51616","#a82f2f");
   this.setTooltip("Write Analog");
   this.setHelpUrl("");
    }
  };

  Blocks['writedigitalnew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".write_digital(")
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616","#E51616","#a82f2f");
   this.setTooltip("Write Digital");
   this.setHelpUrl("");
    }
  };
  
  Blocks['pin_pull'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".set_pull(")
      this.appendValueInput("text1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616","#E51616","#a82f2f");
   this.setTooltip("Set Pin Pull Value");
   this.setHelpUrl("");
    }
  };

  Blocks['pintouched'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
          .appendField(new Blockly.FieldTextInput("0"), "pinno")
          .appendField(".is_touched()");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E51616","#E51616","#a82f2f");
   this.setTooltip("If this pin is touched");
   this.setHelpUrl("");
    }
  };
  
  Blocks['analogread'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
          .appendField(new Blockly.FieldTextInput("0"), "pinno")
          .appendField(".read_analog()");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E51616","#E51616","#a82f2f");
   this.setTooltip("Read Analog");
   this.setHelpUrl("");
    }
  };

  Blocks['digitalread'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
          .appendField(new Blockly.FieldTextInput("0"), "pinno")
          .appendField(".read_digital()");
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E51616","#E51616","#a82f2f");
   this.setTooltip("Read Digital");
   this.setHelpUrl("");
    }
  };

  Blocks['writeanalog'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
          .appendField(new Blockly.FieldTextInput("0"), "pinno")
          .appendField(".write_analog(")
          .appendField(new Blockly.FieldTextInput(""), "analog")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616","#E51616","#a82f2f");
   this.setTooltip("Write Analog");
   this.setHelpUrl("");
    }
  };

  Blocks['writedigital'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
          .appendField(new Blockly.FieldTextInput("0"), "pinno")
          .appendField(".write_digital(")
          .appendField(new Blockly.FieldTextInput(""), "digital")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E51616","#E51616","#a82f2f");
   this.setTooltip("Write Digital");
   this.setHelpUrl("");
    }
  };

}
