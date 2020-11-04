export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['compasscalibrate'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('compass.calibrate()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#A016E5', '#A016E5', '#732c91');
      this.setTooltip('Calibrate the compass module');
      this.setHelpUrl('');
    },
  };

  Blocks['compasscalibrated'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('compass.is_calibrated()');
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour('#A016E5', '#A016E5', '#732c91');
      this.setTooltip('Is the compass calibrated?');
      this.setHelpUrl('');
    },
  };

  Blocks['compassclear'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('compass.clear_calibration()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#A016E5', '#A016E5', '#732c91');
      this.setTooltip('Undoes the calibration, making the compass uncalibrated again.');
      this.setHelpUrl('');
    },
  };

}