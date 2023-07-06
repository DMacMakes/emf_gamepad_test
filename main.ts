basic.forever(function () {
    if (EMF_Gamepad.Button_status(EMF_Button.R_BUTTON, Button_State.JOYSTICK_PRESS_DOWN)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            `)
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
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (EMF_Gamepad.Stick_position(Stick_Id.STICK_LEFT, Stick_Axis.STICK_Y) < 98) {
        serial.writeLine("go down")
    } else if (EMF_Gamepad.Stick_position(Stick_Id.STICK_LEFT, Stick_Axis.STICK_Y) > 148) {
        serial.writeLine("go up")
    } else {
    	
    }
})
