(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9996"],{"8de9":function(o,l,e){"use strict";function a(o){o["import_audio"]=function(o){const l="import audioio\n";return l},o["audio_conf"]=function(o){var l=Blockly.Python.variableDB_.getName(o.getFieldValue("pin"),Blockly.Variables.NAME_TYPE),e=Blockly.Python.valueToCode(o,"text",Blockly.Python.ORDER_ATOMIC)||"",a=l+" = audioio.AudioOut("+e+")\n";return a},o["audio_wav"]=function(o){var l=Blockly.Python.variableDB_.getName(o.getFieldValue("pin"),Blockly.Variables.NAME_TYPE),e=Blockly.Python.valueToCode(o,"text",Blockly.Python.ORDER_ATOMIC)||"",a=l+" = audioio.WaveFile("+e+")\n";return a},o["audio_enable"]=function(o){var l=Blockly.Python.variableDB_.getName(o.getFieldValue("pin"),Blockly.Variables.NAME_TYPE),e=Blockly.Python.valueToCode(o,"text",Blockly.Python.ORDER_ATOMIC)||"value = True",a=l+".switch_to_output("+e+")\n";return a},o["audio_open"]=function(o){var l=Blockly.Python.variableDB_.getName(o.getFieldValue("data"),Blockly.Variables.NAME_TYPE),e=Blockly.Python.valueToCode(o,"text",Blockly.Python.ORDER_ATOMIC)||"",a=l+" = open("+e+")\n";return a},o["audio_raw"]=function(o){var l=Blockly.Python.variableDB_.getName(o.getFieldValue("pin"),Blockly.Variables.NAME_TYPE),e=Blockly.Python.valueToCode(o,"text",Blockly.Python.ORDER_ATOMIC)||"",a=l+" = audioio.RawSample("+e+")\n";return a},o["audio_play"]=function(o){var l=Blockly.Python.variableDB_.getName(o.getFieldValue("pin"),Blockly.Variables.NAME_TYPE),e=Blockly.Python.valueToCode(o,"text",Blockly.Python.ORDER_ATOMIC)||"",a=l+".play("+e+")\n";return a},o["audio_stop"]=function(o){var l=Blockly.Python.variableDB_.getName(o.getFieldValue("pin"),Blockly.Variables.NAME_TYPE),e=l+".stop()\n";return e},o["audio_playing"]=function(o){var l=Blockly.Python.variableDB_.getName(o.getFieldValue("pin"),Blockly.Variables.NAME_TYPE),e=l+".playing";return[e,Blockly.Python.ORDER_ATOMIC]}}e.r(l),e.d(l,"default",(function(){return a}))}}]);
//# sourceMappingURL=chunk-2d0e9996.b1b702c6.js.map