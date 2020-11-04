export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['accisgesturenew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("accelerometer.is_gesture(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true); 
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setOutput(true, null);
      this.setColour("#E57E16","#E57E16","#b87533");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['accisgesture'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('accelerometer.is_gesture(')
        .appendField(new Blockly.FieldTextInput(""), "gesture1")
        .appendField(')');
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E57E16","#E57E16","#b87533");
      this.setTooltip('If the gesture is this, then do this');
      this.setHelpUrl('');
    },
  };


  Blocks['accwasgesturenew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("accelerometer.was_gesture(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true); 
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E57E16","#E57E16","#b87533");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['accwasgesture'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('accelerometer.was_gesture(')
        .appendField(new Blockly.FieldTextInput(""), "gesture2")
        .appendField(')');
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E57E16","#E57E16","#b87533");
      this.setTooltip('If the gesture is this, then do this');
      this.setHelpUrl('');
    },
  };

var gesture_dropdown = [
    ["'shake'", "'shake'"],
    ["'up'","'up'"], 
    ["'down'","'down'"], 
    ["'left'","'left'"],
    ["'right'", "'right'"],
    ["'face up'", "'face up'"],
    ["'face down'", "'face down'"],
    ["'freefall'", "'freefall'"],
    ["'3g'", "'3g'"],
    ["'6g'", "'6g'"],
    ["'8g'", "'8g'"],
    ];
  Blocks['accgestures'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(gesture_dropdown), "gestures");
      this.setOutput(true,"String");
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E57E16","#E57E16","#b87533");
   this.setTooltip("list of possible gestures");
   this.setHelpUrl("");
    }
  };

Blocks["acccurrentgesture"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("accelerometer.current_gesture()")
      this.setOutput(true, "String");
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E57E16","#E57E16","#b87533");
      this.setTooltip("reads the current gesture");
    }
  };

Blocks['accget'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("accelerometer.")
        .appendField(new Blockly.FieldDropdown([
          ["get_x()", "get_x()"],
          ["get_y()", "get_y()"],
          ["get_z()", "get_z()"]
        ]), "axis");
      this.setOutput(true,"Number");
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#E57E16","#E57E16","#b87533");
      this.setTooltip("reads the current movement on the selected axis");
    }
  }

}