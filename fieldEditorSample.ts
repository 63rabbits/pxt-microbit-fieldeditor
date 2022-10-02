
enum G {
    //% block="shake"
    Shake,
    //% block="tilt up"
    TiltUp,
    //% block="tilt down"
    TiltDown,
    //% block="tilt left"
    TiltLeft,
    //% block="tilt right"
    TiltRight,
    //% block="face up"
    FaceUp,
    //% block="face down"
    FaceDown,
    //% block="free fall"
    FreeFall

}

//% block="Field Editor Sample"
//% block.loc.ja="フィールド・エディタ・サンプル"
//% weight=10
//% color=#0fbc11
//% icon="\uf0c3"
namespace fieldEditorSample {



    // ----- Range

    //% block
    //% x.min=-100
    //% x.max=100
    //% weight=200
    //% subcategory="range"
    export function func(x: number) {

    }



    // ----- Color Picker

    //% block="show color $color"
    //% color.shadow="colorNumberPicker"
    //% subcategory="color picker"
    export function showColor(color: number) {

    }

    //% block="show wheel $color"
    //% color.shadow="colorWheelPicker"
    //% subcategory="color picker"
    export function showColorWheel(color: number) {

    }

    //% block="show wheel hsv $color"
    //% color.shadow="colorWheelHsvPicker"
    //% subcategory="color picker"
    export function showColorWheelHsv(color: number) {

    }



    // ----- Toggle

    //% block="$yes"
    //% yes.shadow="toggleYesNo"
    //% subcategory="toggle"
    export function yesNo(yes: boolean): boolean {
        return yes;
    }

    //% block="$on"
    //% on.shadow="toggleOnOff"
    //% subcategory="toggle"
    export function onOff(on: boolean): boolean {
        return on;
    }

    //% block="$high"
    //% high.shadow="toggleHighLow"
    //% subcategory="toggle"
    export function highLow(high: boolean): boolean {
        return high;
    }

    //% block="$up"
    //% up.shadow="toggleUpDown"
    //% subcategory="toggle"
    export function upDown(up: boolean): boolean {
        return up;
    }

    //% block="$down"
    //% down.shadow="toggleDownUp"
    //% subcategory="toggle"
    export function downUp(down: boolean): boolean {
        return down;
    }



    // ----- Time Picker

    //% block="pause $ms"
    //% ms.shadow="timePicker"
    //% subcategory="time picker"
    export function pause(ms: number) {

    }



    // ----- Protractor Picker

    //% block="turn $angle"
    //% angle.shadow="protractorPicker"
    //% subcategory="protractor picker"
    export function turn(angle: number) {

    }



    // ----- Speed Picker

    //% block="crickit run at $speed \\%"
    //% speed.shadow="speedPicker"
    //% subcategory="speed picker"
    export function run(speed: number) {

    }



    // ----- Turn Ratio Picker

    //% block="steer $turnRatio"
    //% turnRatio.shadow="turnRatioPicker"
    //% subcategory="turn ratio picker"
    export function steer(turnRatio: number) {

    }



    // ----- Grid Picker

    //% block
    //% g.fieldEditor="gridpicker"
    //% g.fieldOptions.width=220
    //% g.fieldOptions.columns=3
    //% subcategory="grid picker"
    export function onGesture(g: G) {

    }



    // ----- Note Picker

    //% block="play tone $note tone"
    //% note.shadow="device_note"
    //% subcategory="note picker"
    export function playTone(note: number) {

    }

    //% block="$note"
    //% blockId=device_note
    //% shim=TD_ID
    //% subcategory="note picker"
    export function noteFrequency(note: number) {
        return note;
    }



    // ----- Custom

    //% block="$n"
    //% blockId="Number"
    //% n.fieldEditor="numberdropdown"
    //% n.fieldOptions.decompileLiterals=true
    //% n.fieldOptions.data='[["一", 1], ["二", 2], ["三", 3], ["四", 4], ["五", 5]]'
    //% n.defl=1
    //% blockHidden=true
    //% subcategory="custom"
    export function __kanjiNumber(n: number) {
        return n;
    }

    //% block="set number $n"
    //% n.shadow="Number"
    //% subcategory="custom"
    export function setNumber(n: number) {

    }




}
