input.onButtonPressed(Button.A, function () {
    if (Menu == 1) {
    	
    } else if (Menu == 2) {
    	
    } else if (Menu == 4) {
        music.setVolume(255)
        basic.pause(100)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        Menu = 3
    } else {
        if (Player_X == Car_X && Player_Y == Car_Y) {
        	
        } else {
            if (Player_X == 0) {
            	
            } else {
                led.unplot(Player_X, Player_Y)
                Player_X += -1
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Menu == 2) {
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        Menu = 5
    } else if (Menu == 6) {
        basic.clearScreen()
        Menu = 4
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (Menu == 1) {
    	
    } else if (Menu == 2) {
    	
    } else if (Menu == 4) {
        basic.pause(100)
        Menu = 3
    } else {
        if (Player_X == Car_X && Player_Y == Car_Y) {
        	
        } else {
            if (Player_X == 4) {
            	
            } else {
                led.unplot(Player_X, Player_Y)
                Player_X += 1
            }
        }
    }
})
let Fade = 0
let Score = 0
let Car_Y = 0
let Player_Y = 0
let Car_X = 0
let Player_X = 0
let Menu = 0
led.setBrightness(255)
music.setVolume(0)
basic.clearScreen()
Menu = 4
basic.forever(function () {
    if (Menu == 0) {
        if (Score >= 50) {
            for (let index = 0; index < 8; index++) {
                music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
                basic.pause(40)
            }
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            basic.pause(50)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            basic.pause(50)
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            basic.pause(50)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            basic.pause(50)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            basic.pause(50)
        } else {
            for (let index = 0; index < 8; index++) {
                music.play(music.tonePlayable(220, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                basic.pause(40)
            }
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.pause(50)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            basic.pause(50)
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.pause(50)
            music.play(music.tonePlayable(220, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            basic.pause(50)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.pause(50)
        }
    } else {
    	
    }
})
basic.forever(function () {
    // Menu 0 = Game
    // 
    // Menu 1 = Game Over
    // 
    // Menu 2 = Main Menu
    // 
    // Menu 3 = Intro
    if (Menu == 1) {
        Fade = 255
        led.setBrightness(Fade)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        for (let index = 0; index < 6; index++) {
            led.setBrightness(Fade)
            Fade += -50
            basic.pause(100)
        }
        basic.clearScreen()
        basic.pause(1000)
        Fade = Fade
        led.setBrightness(255)
        basic.pause(100)
        basic.showString("SCORE:")
        basic.showNumber(Score)
        basic.pause(1500)
        Menu = 2
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            # # # # #
            . # . # .
            `)
        basic.pause(1000)
        Fade = 255
        led.setBrightness(Fade)
        for (let index = 0; index < 6; index++) {
            led.setBrightness(Fade)
            Fade += -50
            basic.pause(100)
        }
        basic.clearScreen()
        basic.pause(500)
    } else if (Menu == 2) {
        Fade = 255
        led.setBrightness(Fade)
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
    } else if (Menu == 3) {
        Fade = 255
        led.setBrightness(Fade)
        for (let index = 0; index < 6; index++) {
            led.setBrightness(Fade)
            Fade += -50
            basic.pause(100)
        }
        basic.clearScreen()
        basic.pause(1000)
        Fade = 0
        led.setBrightness(Fade)
        basic.showLeds(`
            . # # # .
            # . . . #
            # # . # #
            # . . . #
            . # # # .
            `)
        basic.pause(100)
        for (let index = 0; index < 6; index++) {
            led.setBrightness(Fade)
            Fade += 50
            basic.pause(100)
        }
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.pause(1000)
        for (let index = 0; index < 6; index++) {
            led.setBrightness(Fade)
            Fade += -50
            basic.pause(100)
        }
        basic.clearScreen()
        basic.pause(1000)
        Fade = 0
        led.setBrightness(Fade)
        basic.showLeds(`
            . # . # .
            # . # . #
            . . . . .
            . # . # .
            # . # . #
            `)
        basic.pause(100)
        for (let index = 0; index < 6; index++) {
            led.setBrightness(Fade)
            Fade += 50
            basic.pause(100)
        }
        basic.pause(1000)
        for (let index = 0; index < 6; index++) {
            led.setBrightness(Fade)
            Fade += -50
            basic.pause(100)
        }
        basic.clearScreen()
        basic.pause(1000)
        Fade = 255
        led.setBrightness(Fade)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            # # # # #
            . # . # .
            `)
        basic.pause(1000)
        Fade = 255
        led.setBrightness(Fade)
        for (let index = 0; index < 6; index++) {
            led.setBrightness(Fade)
            Fade += -50
            basic.pause(100)
        }
        basic.clearScreen()
        basic.pause(500)
        Menu = 2
    } else if (Menu == 0) {
        basic.clearScreen()
        if (Score >= 50) {
            if (Player_X == Car_X && Player_Y == Car_Y) {
                Menu = 1
            } else {
                led.plot(Player_X, Player_Y)
                if (Car_Y != 4) {
                    led.plot(Car_X, Car_Y)
                    basic.pause(145)
                    led.unplot(Car_X, Car_Y)
                    Car_Y += 1
                } else {
                    led.plot(Car_X, Car_Y)
                    basic.pause(145)
                    led.unplot(Car_X, Car_Y)
                    Score += 1
                    Car_X = randint(0, 4)
                    Car_Y = 0
                }
            }
        } else {
            if (Player_X == Car_X && Player_Y == Car_Y) {
                Menu = 1
            } else {
                led.plot(Player_X, Player_Y)
                if (Car_Y != 4) {
                    led.plot(Car_X, Car_Y)
                    basic.pause(175)
                    led.unplot(Car_X, Car_Y)
                    Car_Y += 1
                } else {
                    led.plot(Car_X, Car_Y)
                    basic.pause(175)
                    led.unplot(Car_X, Car_Y)
                    Score += 1
                    Car_X = randint(0, 4)
                    Car_Y = 0
                }
            }
        }
    } else if (Menu == 4) {
        basic.showLeds(`
            . . # . .
            # # # . #
            # # # # #
            # # # . #
            . . # . .
            `)
    } else if (Menu == 5) {
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            # # # # #
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(1000)
        Score = 0
        Car_Y = 0
        Car_X = randint(0, 4)
        Player_X = 2
        Player_Y = 3
        Menu = 0
    } else {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showString("ERROR")
    }
})
