input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    oprava = zrychlení
})
let naklon = 0
let zrychlení = 0
let oprava = 0
oprava = 0
basic.forever(function on_forever() {
    
    zrychlení = input.acceleration(Dimension.X)
    naklon = zrychlení - oprava
    basic.clearScreen()
    if (naklon > 100) {
        led.plot(0, 2)
    } else if (naklon > 15) {
        led.plot(1, 2)
    } else if (naklon < -100) {
        led.plot(4, 2)
    } else if (naklon > -15) {
        led.plot(3, 2)
    } else {
        led.plot(2, 2)
    }
    
    if (naklon > 100) {
        led.plot(2, 0)
    } else if (naklon > 15) {
        led.plot(2, 1)
    } else if (naklon < -100) {
        led.plot(2, 4)
    } else if (naklon > -15) {
        led.plot(2, 3)
    } else {
        led.plot(2, 2)
    }
    
})
