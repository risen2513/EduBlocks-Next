from microbit import *

class DriveBit:
    def __init__(self):
        pass

    class motor:
        class one:
            def forward(speed):
                    pin12.write_analog (speed)
                    pin13.write_analog (0)
                    
            def backward(speed):
                    pin12.write_analog (0)
                    pin13.write_analog (speed)
                    
            def stop():
                    pin12.write_analog (0)
                    pin13.write_analog (0)
        
        class two:
            def forward(speed):
                    pin14.write_analog (speed)
                    pin15.write_analog (0)
                    
            def backward(speed):
                    pin14.write_analog (0)
                    pin15.write_analog (speed)
                    
            def stop():
                    pin14.write_analog (0)
                    pin15.write_analog (0)