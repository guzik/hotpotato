input.onButtonPressed(Button.A, function () {
    id += 1
    if (id > players) {
        id = 1
    }
    basic.showNumber(id)
})
input.onButtonPressed(Button.B, function () {
    if (id != 0) {
        start = 1
    }
    basic.showIcon(IconNames.Happy)
})
let start = 0
let players = 0
let id = 0
radio.setGroup(74)
id = 0
players = 5
start = 0
let timer = randint(30, 60)
