Blockly.Blocks["import_mlmodel"] = {
  init: function() {
    this.appendDummyInput().appendField("from mlmodel import *");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff0066");
    this.setTooltip("Imports the mlmodel library.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["import_mltext"] = {
  init: function() {
    this.appendDummyInput().appendField("from mltext import *");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff0066");
    this.setTooltip("Imports the mltext library.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["import_mlimages"] = {
  init: function() {
    this.appendDummyInput().appendField("from mlimages import *");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff0066");
    this.setTooltip("Imports the mlimages library.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["import_imagedata"] = {
  init: function() {
    this.appendDummyInput().appendField("from imagedata import *");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff0066");
    this.setTooltip("Imports the mlimages library.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["import_time"] = {
  init: function() {
    this.appendDummyInput().appendField("import time");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Imports the time library.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["import_pygal"] = {
  init: function() {
    this.appendDummyInput().appendField("import pygal");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Imports the pygal library.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["import_processing"] = {
  init: function() {
    this.appendDummyInput().appendField("from processing import *");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Imports the pygal library.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["import_signal"] = {
  init: function() {
    this.appendDummyInput().appendField("from signal import pause");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Imports the signal library.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["pause_s"] = {
  init: function() {
    this.appendDummyInput().appendField("pause()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Pause");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["random"] = {
  init: function() {
    this.appendDummyInput().appendField("import random");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Imports the random library.");
    this.setHelpUrl("");
  }
};

//   deprecated
Blockly.Blocks["while_true"] = {
  init: function() {
    this.appendDummyInput().appendField("while True:");
    this.appendStatementInput("DO").appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Forever loop.");
    this.setHelpUrl("https://t.co/PCZC5EFe4D");
  }
};

Blockly.Blocks["pass"] = {
  init: function() {
    this.appendDummyInput().appendField("pass");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Pass to the next command");
    this.setHelpUrl("");
  }
};

//   deprecated
Blockly.Blocks["if"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("if")
      .appendField(new Blockly.FieldTextInput("0"), "var")
      .appendField(":");
    this.appendStatementInput("DO").appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("If Statement.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["class"] = {
  init: function() {
    this.appendDummyInput().appendField("class");
    this.appendValueInput("class").setCheck(null);
    this.appendDummyInput().appendField(":");
    this.appendStatementInput("DO").appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Class Statement.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["varprint"] = {
  init: function() {
    this.appendDummyInput().appendField("print(");
    this.appendValueInput("var").setCheck(null);
    this.appendDummyInput().appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip(
      "Use this to print a variable, a number, or even a string if you put in the quotes yourself."
    );
    this.setHelpUrl("");
  }
};

//   deprecated
Blockly.Blocks["ifcroc"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("if")
      .appendField(new Blockly.FieldTextInput("this"), "this")
      .appendField(
        new Blockly.FieldDropdown([
          [">", ">"],
          ["<", "<"]
        ]),
        "crocsigns"
      )
      .appendField(new Blockly.FieldTextInput("that"), "that")
      .appendField(":");
    this.appendStatementInput("DO").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("If statement with greater and less than");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["varminus"] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("0"), "1")
      .appendField("-=")
      .appendField(new Blockly.FieldTextInput("0"), "2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Variable with - and =");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["for"] = {
  init: function() {
    this.appendDummyInput().appendField("for");
    this.appendValueInput("letter").setCheck(null);
    this.appendDummyInput().appendField("in range(");
    this.appendValueInput("no").setCheck(null);
    this.appendDummyInput().appendField("):");
    this.appendStatementInput("DO").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("");
    this.setHelpUrl("Create a for loop");
  }
};

Blockly.Blocks["advancedforloops"] = {
  init: function() {
    this.appendDummyInput().appendField("for");
    this.appendValueInput("x").setCheck(null);
    this.appendDummyInput().appendField("in");
    this.appendValueInput("y").setCheck(null);
    this.appendDummyInput().appendField(":");
    this.appendStatementInput("DO").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//   deprecated
Blockly.Blocks["ifequals"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("if")
      .appendField(new Blockly.FieldTextInput("this"), "this")
      .appendField("==")
      .appendField(new Blockly.FieldTextInput("that"), "that");
    this.appendStatementInput("DO").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["importinputs"] = {
  init: function() {
    this.appendDummyInput().appendField("import inputs");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["return2"] = {
  init: function() {
    this.appendDummyInput().appendField("return");
    this.appendValueInput("return").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//   deprecated
Blockly.Blocks["elif"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("elif")
      .appendField(new Blockly.FieldTextInput("0"), "var")
      .appendField(":");
    this.appendStatementInput("DO").appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Elif Statement.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["else"] = {
  init: function() {
    this.appendDummyInput().appendField("else:");
    this.appendStatementInput("DO").appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Else statement");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["df"] = {
  init: function() {
    this.appendValueInput("def").setCheck(null);
    this.appendDummyInput().appendField("(");
    this.appendValueInput("params").setCheck(null);
    this.appendDummyInput().appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("call a define function");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["whileout"] = {
  init: function() {
    this.appendDummyInput().appendField("while");
    this.appendValueInput("cond").setCheck("Boolean");
    this.appendDummyInput().appendField(":");
    this.appendStatementInput("DO").appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["import_math"] = {
  init: function() {
    this.appendDummyInput().appendField("import math");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Imports the math library.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["import_audio"] = {
  init: function() {
    this.appendDummyInput().appendField("import audio");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Imports the audio library.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["sleep"] = {
  init: function() {
    this.appendDummyInput().appendField("sleep(");
    this.appendValueInput("sleep");
    this.appendDummyInput().appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Sleep");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["sleepnew"] = {
  init: function() {
    this.appendDummyInput().appendField("time.sleep(");
    this.appendValueInput("sleep").setCheck(null);
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Wait (in milliseconds)");
    this.setHelpUrl("");
  }
};

//deprecated

Blockly.Blocks["print"] = {
  init: function() {
    this.appendDummyInput().appendField('print("');
    this.appendValueInput("print").setCheck(null);
    this.appendDummyInput().appendField('" )');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Use this to print to the output box.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["printnew"] = {
  init: function() {
    this.appendDummyInput().appendField('print("');
    this.appendValueInput("text").setCheck(null);
    this.appendDummyInput().appendField('" )');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Use this to print a string to the output box.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["equalsblock"] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("0"), "1")
      .appendField("=")
      .appendField(new Blockly.FieldTextInput("0"), "2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["equalsblocknew"] = {
  init: function() {
    this.appendValueInput("text1").setCheck(null);
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["=", "="],
        ["+=", "+="],
        ["-=", "-="]
      ]),
      "NAME"
    );
    this.appendValueInput("text2").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Assign, increment or decrement a variable");
    this.setHelpUrl("");
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    this.setOutput(true, "Boolean");
  }
};

Blockly.Blocks["define"] = {
  init: function() {
    this.appendDummyInput().appendField("def ");
    this.appendValueInput("1").setCheck(null);
    this.appendDummyInput().appendField("(");
    this.appendValueInput("2").setCheck(null);
    this.appendDummyInput().appendField("):");
    this.appendStatementInput("DO").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//   deprecated
Blockly.Blocks["greater"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("while")
      .appendField(new Blockly.FieldTextInput(""), "1")
      .appendField(">")
      .appendField(new Blockly.FieldTextInput(""), "v")
      .appendField(":");
    this.appendStatementInput("DO").appendField("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["ifinline"] = {
  init: function() {
    this.appendDummyInput().appendField("if");
    this.appendValueInput("iftext").setCheck("Boolean");
    this.appendDummyInput().appendField(":");
    this.appendStatementInput("ifstate").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("If block with inline input");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["typeanything"] = {
  init: function() {
    this.appendValueInput("stuff").setCheck(null);
    this.appendDummyInput().appendField("# your own code");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("Type any python code into this block");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["elifinline"] = {
  init: function() {
    this.appendDummyInput().appendField("elif");
    this.appendValueInput("iftext").setCheck(null);
    this.appendDummyInput().appendField(":");
    this.appendStatementInput("ifstate").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("ElIf block with inline input");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["buttonapressed"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("button_")
      .appendField(
        new Blockly.FieldDropdown([
          ["a", "a"],
          ["b", "b"]
        ]),
        "NAME"
      )
      .appendField(".is_pressed()");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    this.setColour("#FF0066");
    this.setTooltip("Button A Pressed");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["internal"] = {
  init: function() {
    // should you translate to other languages
    // var rtlOperators = [
    //     // ['=', 'EQ'],
    //     // ['\u2260', 'NEQ'],
    //     ['\u200F<\u200F', 'LT'],
    //     ['\u200F\u2264\u200F', 'LTE'],
    //     ['\u200F>\u200F', 'GT'],
    //     ['\u200F\u2265\u200F', 'GTE']
    //   ];
    const ltrOperators = [
      ["==", "=="],
      ["!=", "!="],
      ["<", "<"],
      ["<=", "<="],
      [">", ">"],
      [">=", ">="]
    ];
    const OPERATORS = ltrOperators;
    this.appendValueInput("first").setCheck(null);
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown(OPERATORS),
      "choose"
    );
    this.appendValueInput("last").setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    this.setColour("#FF0066");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["textinline"] = {
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

Blockly.Blocks["stringinline"] = {
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

Blockly.Blocks["sliderinline"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldSlider("0", "0", "1", "1", "1", "Value"),
      "slider"
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    this.setColour("#FFFFFF", "#FFFFFF", "#FFFFFF");
    this.setTooltip("Slider input for inline input");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["varinlines"] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("variable"), "var")
      .appendField(
        new Blockly.FieldDropdown([
          ["=", "="],
          ["+=", "+="],
          ["-=", "-="]
        ]),
        "NAME"
      );
    this.appendValueInput("value").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("assign a value, increment, or decrement a variable");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["boolstatus"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["True", "True"],
        ["False", "False"]
      ]),
      "bool"
    );
    this.setOutput(true, "Boolean");
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    this.setColour("#FF0066");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["andor"] = {
  init: function() {
    this.appendValueInput("first").setCheck(null);
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["and", "and"],
        ["or", "or"]
      ]),
      "choose"
    );
    this.appendValueInput("last").setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    this.setColour("#FF0066");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["not"] = {
  init: function() {
    this.appendDummyInput().appendField("not");
    this.appendValueInput("bool").setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
    this.setColour("#FF0066");
    this.setTooltip("negates a Boolean value");
    this.setHelpUrl("");
  }
};

Blockly.Blocks["break"] = {
  init: function() {
    this.appendDummyInput().appendField("break");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF0066");
    this.setTooltip("breaks out of a loop");
    this.setHelpUrl("");
  }
};
