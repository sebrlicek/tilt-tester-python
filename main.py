def on_button_pressed_a():
    global oprava
    oprava = zrychlení
input.on_button_pressed(Button.A, on_button_pressed_a)

naklon = 0
zrychlení = 0
oprava = 0
oprava = 0

def on_forever():
    global zrychlení, naklon
    zrychlení = input.acceleration(Dimension.X)
    naklon = zrychlení - oprava
    basic.clear_screen()
    if naklon > 100:
        led.plot(0, 2)
    elif naklon > 15:
        led.plot(1, 2)
    elif naklon < -100:
        led.plot(4, 2)
    elif naklon > -15:
        led.plot(3, 2)
    else:
        led.plot(2, 2)
    if naklon > 100:
        led.plot(2, 0)
    elif naklon > 15:
        led.plot(2, 1)
    elif naklon < -100:
        led.plot(2, 4)
    elif naklon > -15:
        led.plot(2, 3)
    else:
        led.plot(2, 2)
basic.forever(on_forever)
