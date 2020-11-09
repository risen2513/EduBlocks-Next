export default function define(Blocks: Blockly.BlockDefinitions) {
  let servocol = "#9C56B8"
  
  Blocks['import_servo'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from adafruit_motor import servo');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(servocol);
      this.setTooltip('Imports the Adafruit Motor Servo library.');
      this.setHelpUrl('');
    },
  };

  Blocks['servo_conf'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("my_servo"), "pin")
          .appendField(" = servo.Servo(")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(servocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['servo_value'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("my_servo"), "pin")
          .appendField(".angle = ")
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(servocol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

}