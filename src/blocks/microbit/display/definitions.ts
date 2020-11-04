export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['scrollnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.scroll("'); 
      this.appendValueInput("displaytext")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Scroll a Message');
      this.setHelpUrl('');
    },
  };

  //deprecated
  
  Blocks['scroll'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.scroll("')
        .appendField(new Blockly.FieldTextInput('Hello World'), 'message')
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Scroll a Message');
      this.setHelpUrl('');
    },
};

  Blocks['scrollvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.scroll(')
        .appendField(new Blockly.FieldTextInput(''), 'message')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Scroll a variable');
      this.setHelpUrl('');
    },
  };

  Blocks['scrollvarnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.scroll('); 
      this.appendValueInput("displaytextvar")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Scroll a variable');
      this.setHelpUrl('');
    },
  };
  
  Blocks['imagenew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.show('); 
      this.appendValueInput("imagevar")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Show an image');
      this.setHelpUrl('');
    },
  };

  Blocks['image'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.show(')
        .appendField(new Blockly.FieldTextInput(''), 'image')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Display an image');
      this.setHelpUrl('');
    },
  };

  //deprecated

  Blocks['getpixel'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.get_pixel(')
        .appendField(new Blockly.FieldTextInput(''), 'xy')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Gets a pixel value');
      this.setHelpUrl('');
    },
  };

  Blocks['getpixelnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.get_pixel(')
        this.appendValueInput("text")
          .setCheck(null);
        this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Gets a pixel value');
      this.setHelpUrl('');
    },
  };

  //deprecated

  Blocks['setpixel'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.set_pixel(')
        .appendField(new Blockly.FieldTextInput(''), 'setpix')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Set a pixel');
      this.setHelpUrl('');
    },
  };

  Blocks['setpixelnew'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.set_pixel(')
        this.appendValueInput("text")
          .setCheck(null);
        this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Set a pixel');
      this.setHelpUrl('');
    },
  };


  Blocks['disclear'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.clear()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip('Clear the display');
      this.setHelpUrl('');
    },
  };

  Blocks['disonoff'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("display.")
          .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "NAME")
          .appendField("()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip("Turn the display on/off");
      this.setHelpUrl("");
    }
  };


  Blocks['imagecreate'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("image"), "image")
          .appendField(" = (\"")
          .appendField(new Blockly.FieldNumber(0, 9), "1")
          .appendField(new Blockly.FieldNumber(0, 9), "2")
          .appendField(new Blockly.FieldNumber(0, 9), "3")
          .appendField(new Blockly.FieldNumber(0, 9), "4")
          .appendField(new Blockly.FieldNumber(0, 9), "5")
          .appendField(":\"")
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(0, 9), "6")
          .appendField(new Blockly.FieldNumber(0, 9), "7")
          .appendField(new Blockly.FieldNumber(0, 9), "8")
          .appendField(new Blockly.FieldNumber(0, 9), "9")
          .appendField(new Blockly.FieldNumber(0, 9), "10")
          .appendField(":\"")
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(0, 9), "11")
          .appendField(new Blockly.FieldNumber(0, 9), "12")
          .appendField(new Blockly.FieldNumber(0, 9), "13")
          .appendField(new Blockly.FieldNumber(0, 9), "14")
          .appendField(new Blockly.FieldNumber(0, 9), "15")
          .appendField(":\"")
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(0, 9), "16")
          .appendField(new Blockly.FieldNumber(0, 9), "17")
          .appendField(new Blockly.FieldNumber(0, 9), "18")
          .appendField(new Blockly.FieldNumber(0, 9), "19")
          .appendField(new Blockly.FieldNumber(0, 9), "20")
          .appendField(":\"")
          .setAlign(Blockly.ALIGN_RIGHT);
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(0, 9), "21")
          .appendField(new Blockly.FieldNumber(0, 9), "22")
          .appendField(new Blockly.FieldNumber(0, 9), "23")
          .appendField(new Blockly.FieldNumber(0, 9), "24")
          .appendField(new Blockly.FieldNumber(0, 9), "25")
          .appendField("\")")
          .setAlign(Blockly.ALIGN_RIGHT);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(false);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


  

var image_expressions = [
  ["Image.HEART","Image.HEART"], 
  ["Image.HEART_SMALL","Image.HEART_SMALL"], 
  ["Image.HAPPY","Image.HAPPY"],
  ["Image.SMILE","Image.SMILE"], 
  ["Image.SAD","Image.SAD"], 
  ["Image.CONFUSED","Image.CONFUSED"],
  ["Image.ANGRY","Image.ANGRY"], 
  ["Image.ASLEEP","Image.ASLEEP"],
  ["Image.SURPRISED","Image.SURPRISED"], 
  ["Image.SILLY","Image.SILLY"], 
  ["Image.FABULOUS","Image.FABULOUS"],
  ["Image.MEH","Image.MEH"]
];

  var image_clocks = [
    ["Image.CLOCK1","Image.CLOCK1"], 
    ["Image.CLOCK2","Image.CLOCK2"], 
    ["Image.CLOCK3","Image.CLOCK3"],
    ["Image.CLOCK4","Image.CLOCK4"], 
    ["Image.CLOCK5","Image.CLOCK5"], 
    ["Image.CLOCK6","Image.CLOCK6"],
    ["Image.CLOCK7","Image.CLOCK7"], 
    ["Image.CLOCK8","Image.CLOCK8"],
    ["Image.CLOCK9","Image.CLOCK9"], 
    ["Image.CLOCK10","Image.CLOCK10"], 
    ["Image.CLOCK11","Image.CLOCK11"],
    ["Image.CLOCK12","Image.CLOCK12"]
  ];
  
  var image_shapes = [
      ["Image.TRIANGLE","Image.TRIANGLE"], 
      ["Image.TRIANGLE_LEFT","Image.TRIANGLE_LEFT"], 
      ["Image.CHESSBOARD","Image.CHESSBOARD"],
      ["Image.DIAMOND","Image.DIAMOND"], 
      ["Image.DIAMOND_SMALL","Image.DIAMOND_SMALL"], 
      ["Image.SQUARE","Image.SQUARE"],
      ["Image.SQUARE_SMALL","Image.SQUARE_SMALL"], 
      ["Image.PITCHFORK","Image.PITCHFORK"],
      ["Image.MUSIC_CROTCHET","Image.MUSIC_CROTCHET"], 
      ["Image.MUSIC_QUAVER","Image.MUSIC_QUAVER"], 
      ["Image.MUSIC_QUAVERS","Image.MUSIC_QUAVERS"],
      ["Image.PITCHFORK","Image.PITCHFORK"],
      ["Image.XMAS","Image.XMAS"],
      ["Image.PACMAN","Image.PACMAN"],
      ["Image.TARGET","Image.TARGET"],
      ["Image.TSHIRT","Image.TSHIRT"],
      ["Image.ROLLERSKATE","Image.ROLLERSKATE"],
      ["Image.HOUSE","Image.HOUSE"],
      ["Image.SWORD","Image.SWORD"],
      ["Image.UMBRELLA","Image.UMBRELLA"]
    ];

    var image_animals = [
      ["Image.RABBIT","Image.RABBIT"], 
      ["Image.COW","Image.COW"], 
      ["Image.DUCK","Image.DUCK"],
      ["Image.TORTOISE","Image.TORTOISE"], 
      ["Image.BUTTERFLY","Image.BUTTERFLY"], 
      ["Image.STICKFIGURE","Image.STICKFIGURE"],
      ["Image.GHOST","Image.GHOST"], 
      ["Image.GIRAFFE","Image.GIRAFFE"],
      ["Image.SKULL","Image.SKULL"], 
      ["Image.SNAKE","Image.SNAKE"]
   ];

  Blocks['expressions'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(image_expressions), "image");
      this.setOutput(true, "String");
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setInputsInline(true);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip("Choose an expression");
      this.setHelpUrl("");
    }
  };

   Blocks['clocks'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(image_clocks), "image");
      this.setOutput(true, "String");
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setInputsInline(true);
      this.setColour("#C3E516","#C3E516","#a4b835");
      this.setTooltip("Choose a clock face");
      this.setHelpUrl("");
    }
  };

  Blocks['shapes'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(image_shapes), "image");
        this.setOutput(true, "String");
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
        this.setInputsInline(true);
        this.setColour("#C3E516","#C3E516","#a4b835");
        this.setTooltip("Choose a shape");
        this.setHelpUrl("");
      }
    };

    Blocks['animals'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(image_animals), "image");
        this.setOutput(true, "String");
        this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
        this.setInputsInline(true);
        this.setColour("#C3E516","#C3E516","#a4b835");
        this.setTooltip("Choose an animal");
        this.setHelpUrl("");
      }
    };
}