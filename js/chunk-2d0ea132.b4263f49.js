(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ea132"],{"8ff4":function(t,e,s){"use strict";function i(t){t["accisgesturenew"]={init:function(){this.appendDummyInput().appendField("accelerometer.is_gesture("),this.appendValueInput("text").setCheck(null),this.appendDummyInput().appendField(")"),this.setInputsInline(!0),this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND),this.setOutput(!0,null),this.setColour("#E57E16","#E57E16","#b87533"),this.setTooltip(""),this.setHelpUrl("")}},t["accisgesture"]={init:function(){this.appendDummyInput().appendField("accelerometer.is_gesture(").appendField(new Blockly.FieldTextInput(""),"gesture1").appendField(")"),this.setInputsInline(!1),this.setOutput(!0,null),this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND),this.setColour("#E57E16","#E57E16","#b87533"),this.setTooltip("If the gesture is this, then do this"),this.setHelpUrl("")}},t["accwasgesturenew"]={init:function(){this.appendDummyInput().appendField("accelerometer.was_gesture("),this.appendValueInput("text").setCheck(null),this.appendDummyInput().appendField(")"),this.setInputsInline(!0),this.setOutput(!0,null),this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND),this.setColour("#E57E16","#E57E16","#b87533"),this.setTooltip(""),this.setHelpUrl("")}},t["accwasgesture"]={init:function(){this.appendDummyInput().appendField("accelerometer.was_gesture(").appendField(new Blockly.FieldTextInput(""),"gesture2").appendField(")"),this.setInputsInline(!1),this.setOutput(!0,null),this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND),this.setColour("#E57E16","#E57E16","#b87533"),this.setTooltip("If the gesture is this, then do this"),this.setHelpUrl("")}};var e=[["'shake'","'shake'"],["'up'","'up'"],["'down'","'down'"],["'left'","'left'"],["'right'","'right'"],["'face up'","'face up'"],["'face down'","'face down'"],["'freefall'","'freefall'"],["'3g'","'3g'"],["'6g'","'6g'"],["'8g'","'8g'"]];t["accgestures"]={init:function(){this.appendDummyInput().appendField(new Blockly.FieldDropdown(e),"gestures"),this.setOutput(!0,"String"),this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND),this.setColour("#E57E16","#E57E16","#b87533"),this.setTooltip("list of possible gestures"),this.setHelpUrl("")}},t["acccurrentgesture"]={init:function(){this.appendDummyInput().appendField("accelerometer.current_gesture()"),this.setOutput(!0,"String"),this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND),this.setColour("#E57E16","#E57E16","#b87533"),this.setTooltip("reads the current gesture")}},t["accget"]={init:function(){this.appendDummyInput().appendField("accelerometer.").appendField(new Blockly.FieldDropdown([["get_x()","get_x()"],["get_y()","get_y()"],["get_z()","get_z()"]]),"axis"),this.setOutput(!0,"Number"),this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND),this.setColour("#E57E16","#E57E16","#b87533"),this.setTooltip("reads the current movement on the selected axis")}}}s.r(e),s.d(e,"default",(function(){return i}))}}]);
//# sourceMappingURL=chunk-2d0ea132.b4263f49.js.map