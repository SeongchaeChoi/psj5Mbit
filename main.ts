let result = ""
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
basic.forever(function () {
    result = serial.readString()
    if (result == "0") {
        basic.showIcon(IconNames.Heart)
    } else if (result == "1") {
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.clearScreen()
    }
})
