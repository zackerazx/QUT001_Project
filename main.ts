function Light_Function () {
    if (input.lightLevel() >= 200) {
        Light_level_Recording()
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(500)
        basic.showNumber(input.lightLevel())
    } else if (input.lightLevel() < 200 && input.lightLevel() >= 100) {
        Light_level_Recording()
        if (light_decreasing_detected && Hike_Length == 1) {
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            for (let index = 0; index < 3; index++) {
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # # # # #
                    . # # # .
                    . . # . .
                    `)
                basic.pause(100)
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    # # # # #
                    . # # # .
                    . . # . .
                    `)
                basic.pause(100)
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . # . .
                    . # . # .
                    . . . . .
                    `)
                basic.pause(200)
            }
        } else {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . # . #
                . # . # .
                . . # . .
                `)
        }
        basic.pause(500)
        basic.showNumber(input.lightLevel())
    } else if (Hike_Length == 1) {
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.pause(500)
        basic.showNumber(input.lightLevel())
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.pause(500)
        basic.showNumber(input.lightLevel())
    }
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (Started == true) {
        basic.showString("Selected A")
        Hike_Length = 1
        Started = false
        hikeStarted = true
    } else {
        Light_Function()
    }
})
input.onGesture(Gesture.FreeFall, function () {
	
})
function Light_level_Recording () {
    let list: number[] = []
    Light_level_recorded.push(input.lightLevel())
    if (list[0] > list[1] && list[1] > list[2] && input.lightLevel() < 150) {
        light_decreasing_detected = true
    } else if (input.lightLevel() < 50) {
        light_decreasing_detected = true
    } else {
        light_decreasing_detected = false
    }
    if (Light_level_recorded.length >= 4) {
        Light_level_recorded.shift()
    }
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (Started == true) {
        Hike_Length = 0
        Started = false
        hikeStarted = true
    } else {
    	
    }
})
let light_decreasing_detected = false
let Hike_Length = 0
let Light_level_recorded: number[] = []
let Started = false
let hikeStarted = false
if (!(hikeStarted)) {
    Started = true
    Light_level_recorded = []
    basic.showString("ON")
    basic.pause(100)
    basic.showString("A for Long Hike, B for short")
}
basic.forever(function () {
	
})
