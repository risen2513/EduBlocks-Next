export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['import_requests'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import requests');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip('Imports the requests library.');
      this.setHelpUrl('');
    },
  };

  Blocks['import_json'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import json');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip('Imports the JSON library.');
      this.setHelpUrl('');
    },
  };

  Blocks['requests_get'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("r"), "r")
        .appendField(" = requests.get(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['json_reference'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("r"), "r")
          .appendField(".json()[");
      this.appendValueInput("input")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#FF69B4");
   this.setTooltip("Reference some JSON code");
   this.setHelpUrl("");
    }
  };

  Blocks['requests_post'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("r"), "r")
        .appendField(" = requests.post(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['requests_put'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("r"), "r")
        .appendField(" = requests.put(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['requests_delete'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("r"), "r")
        .appendField(" = requests.delete(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['requests_head'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("r"), "r")
        .appendField(" = requests.head(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['requests_options'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("r"), "r")
        .appendField(" = requests.options(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['requests_url'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("r"), "r")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["url", "url"], ["text", "text"], ["encoding", "encoding"], ["content", "content"], ["json", "json"], ["raw", "raw"], ["status_code", "status_code"], ["headers", "headers"], ["history", "history"], ["ok", "ok"]]), "NAME");
      this.setOutput(true, null);
      this.setColour("#FF69B4");
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['requests_url_func'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("r"), "r")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["url", "url"], ["text", "text"], ["encoding", "encoding"], ["content", "content"], ["json", "json"], ["raw", "raw"], ["status_code", "status_code"], ["headers", "headers"], ["history", "history"], ["ok", "ok"]]), "NAME")
        .appendField("()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['requests_cookies'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("r"), "r")
        .appendField(".cookies[");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField("]");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['requests_rjar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("jar"), "jar")
        .appendField(" = requests.cookies.RequestsCookieJar()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['requests_jset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("jar"), "jar")
        .appendField(".set(");
      this.appendValueInput("NAME")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['requests_hget'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("r"), "r")
        .appendField(".headers.get(");
      this.appendValueInput("NAME")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['requests_raise'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("r"), "r")
        .appendField(".raise_for_status()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF69B4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

}
