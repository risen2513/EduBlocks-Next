export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['events_start_here'] = { 
      init: function() {
        this.appendDummyInput()
            .appendField("# Start Code Here"); 
            // other option is "#!/usr/bin/python3"
        this.setNextStatement(true, null);
        this.setColour("#FFBF00");
        Blockly.BlockSvg.START_HAT = true;
        // this.setTooltip(DexterMsg.Blockly.Blocks.Events.TOOLTIP_START_BLOCK);
        // this.setHelpUrl('');
      }
    };
}