radio.onReceivedNumber(function (receivedNumber) {
    frdDice = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(myDice)
    basic.pause(500)
    if (myDice != 0 && frdDice != 0) {
        if (myDice == frdDice) {
            basic.showIcon(IconNames.Asleep)
        } else if (myDice > frdDice) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
        myDice = 0
        frdDice = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    myDice = randint(0, 9)
    radio.sendNumber(myDice)
    basic.showNumber(myDice)
})
let frdDice = 0
let myDice = 0
myDice = 0
frdDice = 0
