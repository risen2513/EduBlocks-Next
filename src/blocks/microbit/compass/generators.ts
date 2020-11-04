export default function define(Python: Blockly.BlockGenerators) {

  Python['compasscalibrate'] = function (block) {
    // TODO: Assemble Python into code variable.
    let code = 'compass.calibrate()\n';
    return code;
  };

  Python['compasscalibrated'] = function (block) {
    let code = 'compass.is_calibrated()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}
