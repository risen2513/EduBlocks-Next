export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['import_envirobit'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("from envirobit import *");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("230","230","230");
            this.setTooltip("");
            this.setHelpUrl("");
        },
    };

    Blocks['temperature'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("temperature()");
          this.setInputsInline(false);
          this.setOutput(true, null);
          this.setColour("230","230","230");
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };

    Blocks['pressure'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("pressure()");
          this.setInputsInline(false);
          this.setOutput(true, null);
          this.setColour("230","230","230");
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };

      Blocks['humidity'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("humidity()");
          this.setInputsInline(false);
          this.setOutput(true, null);
          this.setColour("230","230","230");
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };

     Blocks['altitude'] = {
         init: function () {
             this.appendDummyInput()
                 .appendField("altitude()");
             this.setOutput(true, null);
             this.setColour("230","230","230");
             this.setTooltip("");
             this.setHelpUrl("");
         },
     };

     Blocks['set_qnh'] = {
         init: function() {
             this.appendDummyInput()
                 .appendField("set_qnh(");
             this.appendValueInput("VALUE")
                 .setCheck(null);
             this.appendDummyInput()
                 .appendField(")");
             this.setOutput(true, null);
             this.setColour("230","230","230");
             this.setTooltip("");
             this.setHelpUrl("");
         }
    };

}
