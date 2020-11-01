export default function define(Blocks: Blockly.BlockDefinitions) {
  let rand_col = "#8BC248"

  Blocks['random_choice'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.choice(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(rand_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Choose a random element from a non-empty sequence.");
      this.setHelpUrl("");
    }
  };
 
  Blocks['random_randint'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.randint(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(rand_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Return random integer in range [a, b], including both end points.");
      this.setHelpUrl("");
    }
  };

  Blocks['random_uniform'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.uniform(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(rand_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Return random decimal in range [a, b], including both end points.");
      this.setHelpUrl("");
    }
  };

  Blocks['random_random'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.random(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(rand_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("random() -> x in the interval [0, 1).");
      this.setHelpUrl("");
    }
  };

  Blocks['random_randrange'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.randrange(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(rand_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Choose a random item from range(start, stop[, step]).");
      this.setHelpUrl("");
    }
  };

  Blocks['random_seed'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.seed(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(rand_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Initialize internal state from hashable object.");
      this.setHelpUrl("");
    }
  };

  Blocks['random_shuffle'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.shuffle(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(rand_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("Shuffle list");
      this.setHelpUrl("");
    }
  };

}

