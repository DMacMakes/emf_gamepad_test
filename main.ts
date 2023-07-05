basic.forever(function () {
    if (EMF_Gamepad.Button_status(EMF_Button.R_BUTTON, Button_State.JOYSTICK_PRESS_DOWN)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            `)
        EMF_Gamepad.Vibrate(103)
    }
    if (EMF_Gamepad.Button_status(EMF_Button.L_BUTTON, Button_State.JOYSTICK_PRESS_DOWN)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            `)
    }
    if (EMF_Gamepad.Button_status(EMF_Button.JOYSTICK_BUTTON_LEFT, Button_State.JOYSTICK_PRESS_DOWN)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
    }
    if (EMF_Gamepad.Button_status(EMF_Button.JOYSTICK_BUTTON_RIGHT, Button_State.JOYSTICK_PRESS_DOWN)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
    }
})
