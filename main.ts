input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
})
basic.showIcon(IconNames.No)
music.playMelody("E B C5 A B G A F ", 180)
basic.forever(function () {
    basic.showString("Hello!")
})
