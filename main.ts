let bool = false
basic.forever(function () {
    fieldEditorSample.func(0)
    fieldEditorSample.showColorWheelHsv(10)
    fieldEditorSample.showColorWheel(10)
    fieldEditorSample.showColor(0xff0000)
    bool = fieldEditorSample.yesNo(false) || (fieldEditorSample.onOff(false) || (fieldEditorSample.highLow(false) || (fieldEditorSample.upDown(false) || fieldEditorSample.downUp(false))))
    fieldEditorSample.pause(500)
    fieldEditorSample.turn(180)
    fieldEditorSample.run(6)
    fieldEditorSample.steer(103)
    fieldEditorSample.onGesture(G.TiltUp)
    fieldEditorSample.playTone(440)
    fieldEditorSample.setNumber(fieldEditorSample.__kanjiNumber(5))
})