Blockly.Blocks['import_mlmodel'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('from mlmodel import *');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff0066");
    this.setTooltip('Imports the mlmodel library.');
    this.setHelpUrl('');
  },
};

Blockly.Python['import_mlmodel'] = function (block) {
  const code = 'from mlmodel import *\n';
  return code;
};
