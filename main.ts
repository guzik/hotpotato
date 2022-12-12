input.onButtonPressed(Button.A, function () {
    if (stan == 0) {
        if (indeks == lista_tekstowa.length - 1) {
            indeks = 1
        } else {
            indeks += 1
        }
        basic.showString("" + (lista_tekstowa[indeks]))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (stan == 4) {
        while (next == indeks) {
            next = randint(1, ilosc_graczy)
        }
        radio.sendValue("ilosc_graczy", ilosc_graczy)
        basic.showIcon(IconNames.Happy)
        stan = 2
    }
})
input.onButtonPressed(Button.B, function () {
    if (stan == 0 && indeks != 0) {
        if (indeks == 1) {
            stan = 4
            timer = randint(10, 20)
            next = indeks
            basic.showIcon(IconNames.Yes)
        } else {
            stan = 5
            radio.sendValue("rejestracja", indeks)
            basic.showIcon(IconNames.Yes)
        }
    }
})
radio.onReceivedValue(function (name, value) {
    if (stan == 1) {
        if (name == lista_tekstowa[indeks]) {
            if (value == 0) {
                basic.showIcon(IconNames.Skull)
                music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 775, 1444, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
                stan = 3
            } else {
                music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
                basic.showNumber(value)
                basic.showIcon(IconNames.Yes)
                timer = value - 1
                next = indeks
                while (next == indeks) {
                    next = randint(1, ilosc_graczy)
                }
                stan = 2
            }
        }
    } else if (stan == 4) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        ilosc_graczy += 1
    } else {
        if (stan == 5) {
            ilosc_graczy = value
            stan = 1
            basic.showIcon(IconNames.Happy)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (stan == 2) {
        stan = 1
        radio.sendValue(lista_tekstowa[next], timer)
        basic.showIcon(IconNames.Heart)
    }
})
let next = 0
let stan = 0
let ilosc_graczy = 0
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
"d",
"e",
"f",
"g",
"h"
]
timer = 0
indeks = 0
ilosc_graczy = 1
