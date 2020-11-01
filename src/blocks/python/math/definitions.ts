export default function define(Blocks: Blockly.BlockDefinitions) {
  let math_col = "#1B173D"
  
  Blocks['operators2'] = {
    init: function() {
      this.appendValueInput("first")
          .setCheck(null);
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["/","/"], ["%","%"], ["*","*"]]), "operators");
      this.appendValueInput("last")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#1B173D");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['math_acos'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.acos(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_acosh'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.acosh(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_asin'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.asin(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_asinh'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.asinh(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_atan'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.atan(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_atanh'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.atanh(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_ceil'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.ceil(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_cos'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.cos(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_cosh'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.cosh(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_degrees'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.degrees(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_exp'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.exp(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_fabs'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.fabs(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_factorial'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.factorial(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_floor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.floor(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_hypot'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.hypot(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_log'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.log(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_log10'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.log10(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_pow'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.pow(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_radians'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.radians(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_sin'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.sin(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_sinh'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.sinh(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_st'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.sqrt(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_tan'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.tan(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_tanh'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.tanh(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['math_trunc'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("math.trunc(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(math_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

}
 
