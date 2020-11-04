pin1.set_analog_period(20)
pin2.set_analog_period(20)

class MoveMini:
    def __init__(self):
        pass

    def forward(self, time):
        pin1.write_analog(180)
        pin2.write_analog(1)
        sleep(time)

    def backward(self, time):
        pin1.write_analog(1)
        pin2.write_analog(180)
        sleep(time)

    def left(self, time):
        pin1.write_analog(1)
        pin2.write_analog(1)
        sleep(time)

    def right(self, time):
        pin1.write_analog(180)
        pin2.write_analog(180)
        sleep(time)

    def stop(self):
        pin1.write_analog(0)
        pin2.write_analog(0)
        sleep(time)
    