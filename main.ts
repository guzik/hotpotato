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
input.onButtonPressed(Button.AB, function () {
    if (start == 4) {
        timer = randint(10, 20)
        while (next == indeks) {
            next = randint(1, lista_tekstowa.length - 1)
        }
        basic.showIcon(IconNames.Happy)
        start = 2
    }
})
input.onButtonPressed(Button.B, function () {
    if (start == 0 && indeks != 0) {
        if (indeks == 1) {
            start = 4
            next = indeks
            basic.showIcon(IconNames.Yes)
        } else {
            start = 1
            basic.showIcon(IconNames.Happy)
        }
    }
})
radio.onReceivedValue(function (name, value) {
    if (start == 1) {
        if (name == lista_tekstowa[indeks]) {
            if (value == 0) {
                basic.showIcon(IconNames.Skull)
                start = 3
            } else {
                music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
                basic.showNumber(value)
                basic.pause(500)
                basic.showIcon(IconNames.Yes)
                timer = value - 1
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
        start = 1
        radio.sendValue(lista_tekstowa[next], timer)
        basic.showIcon(IconNames.Heart)
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
