let start = 0
input.onButtonPressed(Button.A, function () {
     start = input.runningTime()
      basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    let elapsed = input.runningTime() - start
    let score = Math.abs(elapsed - 7000)
    basic.showNumber(score)  
})