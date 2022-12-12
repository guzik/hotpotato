input.onButtonPressed(Button.A, function () {
    if (start == 0) {
        if (indeks == lista_tekstowa.length - 1) {
            indeks = 1
        } else {
            indeks += 1
        }
        basic.showString("" + (lista_tekstowa[indeks]))
    }
})
input.onButtonPressed(Button.B, function () {
    start = 1
    basic.showIcon(IconNames.Happy)
})
radio.onReceivedValue(function (name, value) {
    if (start == 1) {
        if (name == lista_tekstowa[indeks]) {
            if (value == 0) {
                basic.showIcon(IconNames.Skull)
                start = 3
            } else {
                basic.showNumber(timer)
                basic.pause(2000)
                basic.showIcon(IconNames.Heart)
                timer += value - 1
                next = indeks
                while (next == indeks) {
                    next = randint(1, lista_tekstowa.length - 1)
                }
                start = 2
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (start == 2) {
        radio.sendValue(lista_tekstowa[next], timer)
        start = 1
    }
})
let next = 0
let start = 0
let indeks = 0
let timer = 0
let lista_tekstowa: string[] = []
basic.showIcon(IconNames.Chessboard)
radio.setGroup(74)
lista_tekstowa = [
"X",
"a",
"b",
"c",
"d"
]
timer = 0
indeks = 0
