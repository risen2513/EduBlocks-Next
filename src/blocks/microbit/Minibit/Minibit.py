from microbit import *
# import neopixel
from utime import ticks_us, sleep_us

class miniBit:
    def __init__(self):
        pass

    # leds = neopixel.NeoPixel(pin13, 4)

    def forward(self, speed):
        if (speed > 1023) or (speed < 1):
            print("Error, speed must be a number 1-1023")
            display.scroll("Speed must be a number 1-1023")
        else:
            pin12.write_analog(speed)
            pin8.write_digital(0)
            pin16.write_analog(speed)
            pin14.write_digital(0)

    def backward(self, speed):
        if (speed > 1023) or (speed < 1):
            print("Error, speed must be a number 1-1023")
            display.scroll("Speed must be a number 1-1023")
        else:
            pin12.write_digital(0)
            pin8.write_analog(speed)
            pin16.write_digital(0)
            pin14.write_analog(speed)

    def left(self, speed):
        if (speed > 1023) or (speed < 1):
            print("Error, speed must be a number 1-1023")
            display.scroll("Speed must be a number 1-1023")
        else:
            pin12.write_analog(speed)
            pin8.write_digital(0)
            pin16.write_analog(1023)
            pin14.write_analog(1023)

    def right(self, speed):
        if (speed > 1023) or (speed < 1):
            print("Error, speed must be a number 1-1023")
            display.scroll("Speed must be a number 1-1023")
        else:
            pin16.write_analog(speed)
            pin14.write_digital(0)
            pin12.write_analog(1023)
            pin8.write_analog(1023)

    def stop(self, brake=True):
        if brake==True:
            pin12.write_analog(1023)
            pin8.write_analog(1023)
            pin16.write_analog(1023)
            pin14.write_analog(1023)
        else:
            pin12.write_digital(0)
            pin8.write_digital(0)
            pin16.write_digital(0)
            pin14.write_digital(0)

    def sonar_cm(self):
        pin15.write_digital(1)
        sleep_us(10)
        pin15.write_digital(0)
        while pin15.read_digital() == 0:
            pass
        start = ticks_us()
        while pin15.read_digital() == 1:
            pass
        end = ticks_us()
        echo = end-start
        distance = int(0.01715 * echo)
        return distance

    def sonar_mm(self):
        pin15.write_digital(1)
        sleep_us(10)
        pin15.write_digital(0)
        while pin15.read_digital() == 0:
            pass
        start = ticks_us()
        while pin15.read_digital() == 1:
            pass
        end = ticks_us()
        echo = end-start
        distance = int(0.01715 * echo*10)
        return distance