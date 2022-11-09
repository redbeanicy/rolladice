radio.onReceivedNumber(function (receivedNumber) {
    frdDice = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
    myDice = randint(1, 6)
    radio.sendNumber(myDice)
    basic.showNumber(myDice)
    basic.pause(1000)
})
let frdDice = 0
let myDice = 0
myDice = 0
frdDice = 0
basic.forever(function () {
    if (myDice != 0 && frdDice != 0) {
        basic.showNumber(myDice)
        basic.pause(1000)
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
