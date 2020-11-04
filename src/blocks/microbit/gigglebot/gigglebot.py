import microbit

GET_FIRMWARE_VERSION = 1
GET_BOARD = 3
GET_VOLTAGE_BATTERY = 4
GET_LINE_SENSORS = 5
GET_LIGHT_SENSORS = 6
SET_MOTOR_POWERS = 10
LEFT = 0
RIGHT = 1
BOTH = 2
FORWARD = 1
BACKWARD = -1
motor_power_left = 50
motor_power_right = 50
neopixelstrip = None

def _read(reg, size=8, repeat=False):
	microbit.i2c.write(0x04, bytes([reg]), repeat)
	outbuf = microbit.i2c.read(0x04, 1 if size==8 else 2, repeat)
	return outbuf[0] if size==8 else outbuf[0] * 255 + outbuf[1]

def _get_sensors(reg, repeat=False):
	microbit.i2c.write(0x04, bytes([reg]), repeat)
	outbuf = []
	buf = microbit.i2c.read(0x04, 3, repeat)
	outbuf.append(1023 - ( buf[0] << 2 | ((buf[2] & 0xC0) >> 6)))
	outbuf.append(1023 - ( buf[1] << 2 | ((buf[2] & 0x30) >> 4)))
	return outbuf

def volt():
	return (_read(GET_VOLTAGE_BATTERY, size=16)/1000)

def drive(dir=FORWARD, milliseconds=-1):
	microbit.i2c.write(0x04, bytes([SET_MOTOR_POWERS, motor_power_left*dir, motor_power_right*dir]), False)
	if milliseconds >= 0:
		microbit.sleep(milliseconds)
		stop()

def turn(dir=LEFT, milliseconds=-1):
	if dir==LEFT: microbit.i2c.write(0x04, bytes([SET_MOTOR_POWERS, motor_power_left, 0]), False)
	if dir==RIGHT: microbit.i2c.write(0x04, bytes([SET_MOTOR_POWERS, 0, motor_power_right]), False)
	if milliseconds >= 0:
		microbit.sleep(milliseconds)
		stop()        

def set_speed(power_left, power_right):
	global motor_power_left, motor_power_right
	motor_power_left = power_left
	motor_power_right = power_right

def stop():
	microbit.i2c.write(0x04, bytes([SET_MOTOR_POWERS, 0, 0]), False)

def set_servo(which, degrees):
	us = min(2400, max(600, 600 + (1800 * degrees // 180)))
	duty = round(us * 1024 * 50 // 1000000)
	if which == LEFT or which == BOTH:
		microbit.pin14.set_analog_period(20)
		microbit.pin14.write_analog(duty)
	if which == RIGHT or which == BOTH:
		microbit.pin13.set_analog_period(20)
		microbit.pin13.write_analog(duty)
		
def servo_off(which):
	if which == LEFT or which == BOTH: microbit.pin14.write_digital(0)
	if which == RIGHT or which == BOTH: microbit.pin13.write_digital(0)
	
def set_smile(R=25,G=0,B=0):
	neopix = range(2,9)
	for i in neopix: neopixelstrip[i] = (R,G,B)
	neopixelstrip.show()

def set_eyes(which=BOTH, R=0, G=0, B=10):
	if which != LEFT:
		neopixelstrip[0] = (R,G,B)
	if which != RIGHT:
		neopixelstrip[1]= (R,G,B)
	neopixelstrip.show()

def set_eye_color_on_start():
	if _read(GET_VOLTAGE_BATTERY, size=16) < 3400:
		neopixelstrip[0] = (10, 0, 0)
		neopixelstrip[1]= (10, 0, 0)
	else:
		neopixelstrip[0] = (0, 0, 10)
		neopixelstrip[1]= (0, 0, 10)
	neopixelstrip.show()

def read_sensor(which_sensor, which_side):
	if (which_side == LEFT): return _get_sensors(which_sensor)[0]
	elif (which_side == RIGHT): return _get_sensors(which_sensor)[1]
	else: return _get_sensors(which_sensor)

def pixels_off():
	for i in range(9):
		neopixelstrip[i] = (0,0,0)
	neopixelstrip.show()
 
def init(): 
	from neopixel import NeoPixel
	global neopixelstrip
	stop()
	neopixelstrip = NeoPixel(microbit.pin8, 9); pixels_off()
	eyestrip = NeoPixel(microbit.pin8, 2)
	set_eye_color_on_start()