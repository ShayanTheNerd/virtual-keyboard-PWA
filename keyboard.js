// Capslock light
let CapsLightOn = false;
function capsLockLight() {
    if (!CapsLightOn) {
        CapsLight.classList.add("small-light");
        CapsLightOn = true;
    }
    else {
        CapsLight.classList.remove("small-light");
        CapsLightOn = false;
    }
};

// Numlock light
let NumLightOn = false;
function numLockLight() {
    if (!NumLightOn) {
        NumLight.classList.add("small-light");
        NumLightOn = true;
    }
    else {
        NumLight.classList.remove("small-light");
        NumLightOn = false;
    }
};

// Keyboard key effects
window.addEventListener('keydown', function (codeOfKey) {
    let keyCode = codeOfKey.code;
    if (SoundOn) {
        document.getElementById('keySound').play();
    }
    switch (keyCode) {
        case "Escape":
            Escape.classList.add("key-down");
            break;
        case "F1":
            F1.classList.add("key-down");
            codeOfKey.preventDefault();
            break;
        case "F2":
            F2.classList.add("key-down");
            break;
        case "F3":
            F3.classList.add("key-down");
            codeOfKey.preventDefault();
            break;
        case "F4":
            F4.classList.add("key-down");
            codeOfKey.preventDefault();
            break;
        case "F5":
            F5.classList.add("key-down");
            break;
        case "F6":
            F6.classList.add("key-down");
            codeOfKey.preventDefault();
            break;
        case "F7":
            F7.classList.add("key-down");
            codeOfKey.preventDefault();
            break;
        case "F8":
            F8.classList.add("key-down");
            break;
        case "F9":
            F9.classList.add("key-down");
            break;
        case "F10":
            F10.classList.add("key-down");
            codeOfKey.preventDefault();
            break;
        case "F11":
            F11.classList.add("key-down");
            break;
        case "F12":
            F12.classList.add("key-down");
            break;
        case "Insert":
            Insert.classList.add("key-down");
            break;
        case "Delete":
            Delete.classList.add("key-down");
            break;
        case "Backquote":
            Backquote.classList.add("key-down");
            break;
        case "Digit1":
            Digit1.classList.add("key-down");
            break;
        case "Digit2":
            Digit2.classList.add("key-down");
            break;
        case "Digit3":
            Digit3.classList.add("key-down");
            break;
        case "Digit4":
            Digit4.classList.add("key-down");
            break;
        case "Digit5":
            Digit5.classList.add("key-down");
            break;
        case "Digit6":
            Digit6.classList.add("key-down");
            break;
        case "Digit7":
            Digit7.classList.add("key-down");
            break;
        case "Digit8":
            Digit8.classList.add("key-down");
            break;
        case "Digit9":
            Digit9.classList.add("key-down");
            break;
        case "Digit0":
            Digit0.classList.add("key-down");
            break;
        case "Digit0":
            Digit0.classList.add("key-down");
            break;
        case "Minus":
            Minus.classList.add("key-down");
            break;
        case "Equal":
            Equal.classList.add("key-down");
            break;
        case "Backspace":
            Backspace.classList.add("key-down");
            break;
        case "Tab":
            Tab.classList.add("key-down");
            codeOfKey.preventDefault();
            break;
        case "KeyQ":
            KeyQ.classList.add("key-down");
            break;
        case "KeyW":
            KeyW.classList.add("key-down");
            break;
        case "KeyE":
            KeyE.classList.add("key-down");
            break;
        case "KeyR":
            KeyR.classList.add("key-down");
            break;
        case "KeyT":
            KeyT.classList.add("key-down");
            break;
        case "KeyY":
            KeyY.classList.add("key-down");
            break;
        case "KeyU":
            KeyU.classList.add("key-down");
            break;
        case "KeyI":
            KeyI.classList.add("key-down");
            break;
        case "KeyO":
            KeyO.classList.add("key-down");
            break;
        case "KeyP":
            KeyP.classList.add("key-down");
            break;
        case "BracketLeft":
            BracketLeft.classList.add("key-down");
            break;
        case "BracketRight":
            BracketRight.classList.add("key-down");
            break;
        case "Backslash":
            Backslash.classList.add("key-down");
            break;
        case "CapsLock":
            CapsLock.classList.add("key-down");
            capsLockLight();
            break;
        case "KeyA":
            KeyA.classList.add("key-down");
            break;
        case "KeyS":
            KeyS.classList.add("key-down");
            break;
        case "KeyD":
            KeyD.classList.add("key-down");
            break;
        case "KeyF":
            KeyF.classList.add("key-down");
            break;
        case "KeyG":
            KeyG.classList.add("key-down");
            break;
        case "KeyH":
            KeyH.classList.add("key-down");
            break;
        case "KeyJ":
            KeyJ.classList.add("key-down");
            break;
        case "KeyK":
            KeyK.classList.add("key-down");
            break;
        case "KeyL":
            KeyL.classList.add("key-down");
            break;
        case "Semicolon":
            Semicolon.classList.add("key-down");
            break;
        case "Quote":
            Quote.classList.add("key-down");
            break;
        case "Enter":
            Enter.classList.add("key-down");
            break;
        case "ShiftLeft":
            ShiftLeft.classList.add("key-down");
            break;
        case "KeyZ":
            KeyZ.classList.add("key-down");
            break;
        case "KeyX":
            KeyX.classList.add("key-down");
            break;
        case "KeyC":
            KeyC.classList.add("key-down");
            break;
        case "KeyV":
            KeyV.classList.add("key-down");
            break;
        case "KeyB":
            KeyB.classList.add("key-down");
            break;
        case "KeyN":
            KeyN.classList.add("key-down");
            break;
        case "KeyM":
            KeyM.classList.add("key-down");
            break;
        case "Comma":
            Comma.classList.add("key-down");
            break;
        case "Period":
            Period.classList.add("key-down");
            break;
        case "Slash":
            Slash.classList.add("key-down");
            break;
        case "ShiftRight":
            ShiftRight.classList.add("key-down");
            break;
        case "ControlLeft":
            ControlLeft.classList.add("key-down");
            break;
        case "MetaLeft":
            MetaLeft.classList.add("key-down");
            break;
        case "AltLeft":
            AltLeft.classList.add("key-down");
            codeOfKey.preventDefault();
            break;
        case "Space":
            Space.classList.add("key-down");
            break;
        case "AltRight":
            AltRight.classList.add("key-down");
            codeOfKey.preventDefault();
            break;
        case "ControlRight":
            ControlRight.classList.add("key-down");
            break;
        case "ArrowLeft":
            ArrowLeft.classList.add("key-down");
            break;
        case "ArrowUp":
            ArrowUp.classList.add("key-down");
            break;
        case "ArrowDown":
            ArrowDown.classList.add("key-down");
            break;
        case "ArrowRight":
            ArrowRight.classList.add("key-down");
            break;
        case "Home":
            Home.classList.add("key-down");
            break;
        case "End":
            End.classList.add("key-down");
            break;
        case "PageUp":
            PageUp.classList.add("key-down");
            break;
        case "PageDown":
            PageDown.classList.add("key-down");
            break;
        case "NumLock":
            NumLock.classList.add("key-down");
            numLockLight();
            break;
        case "NumpadDivide":
            NumpadDivide.classList.add("key-down");
            break;
        case "NumpadMultiply":
            NumpadMultiply.classList.add("key-down");
            break;
        case "NumpadSubtract":
            NumpadSubtract.classList.add("key-down");
            break;
        case "Numpad7":
            Numpad7.classList.add("key-down");
            break;
        case "Numpad8":
            Numpad8.classList.add("key-down");
            break;
        case "Numpad9":
            Numpad9.classList.add("key-down");
            break;
        case "NumpadAdd":
            NumpadAdd.classList.add("key-down");
            break;
        case "Numpad4":
            Numpad4.classList.add("key-down");
            break;
        case "Numpad5":
            Numpad5.classList.add("key-down");
            break;
        case "Numpad6":
            Numpad6.classList.add("key-down");
            break;
        case "Numpad1":
            Numpad1.classList.add("key-down");
            break;
        case "Numpad2":
            Numpad2.classList.add("key-down");
            break;
        case "Numpad3":
            Numpad3.classList.add("key-down");
            break;
        case "NumpadEnter":
            NumpadEnter.classList.add("key-down");
            break;
        case "Numpad0":
            Numpad0.classList.add("key-down");
            break;
        case "NumpadDecimal":
            NumpadDecimal.classList.add("key-down");
            break;
        default:
            break;
    }
}, false);

window.addEventListener('keyup', function (codeOfKey) {
    let keyCode = codeOfKey.code;
    switch (keyCode) {
        case "Escape":
            Escape.classList.remove("key-down");
            break;
        case "F1":
            F1.classList.remove("key-down");
            break;
        case "F2":
            F2.classList.remove("key-down");
            break;
        case "F3":
            F3.classList.remove("key-down");
            break;
        case "F4":
            F4.classList.remove("key-down");
            break;
        case "F5":
            F5.classList.remove("key-down");
            break;
        case "F6":
            F6.classList.remove("key-down");
            break;
        case "F7":
            F7.classList.remove("key-down");
            break;
        case "F8":
            F8.classList.remove("key-down");
            break;
        case "F9":
            F9.classList.remove("key-down");
            break;
        case "F10":
            F10.classList.remove("key-down");
            break;
        case "F11":
            F11.classList.remove("key-down");
            break;
        case "F12":
            F12.classList.remove("key-down");
            break;
        case "Insert":
            Insert.classList.remove("key-down");
            break;
        case "Delete":
            Delete.classList.remove("key-down");
            break;
        case "Backquote":
            Backquote.classList.remove("key-down");
            break;
        case "Digit1":
            Digit1.classList.remove("key-down");
            break;
        case "Digit2":
            Digit2.classList.remove("key-down");
            break;
        case "Digit3":
            Digit3.classList.remove("key-down");
            break;
        case "Digit4":
            Digit4.classList.remove("key-down");
            break;
        case "Digit5":
            Digit5.classList.remove("key-down");
            break;
        case "Digit6":
            Digit6.classList.remove("key-down");
            break;
        case "Digit7":
            Digit7.classList.remove("key-down");
            break;
        case "Digit8":
            Digit8.classList.remove("key-down");
            break;
        case "Digit9":
            Digit9.classList.remove("key-down");
            break;
        case "Digit0":
            Digit0.classList.remove("key-down");
            break;
        case "Digit0":
            Digit0.classList.remove("key-down");
            break;
        case "Minus":
            Minus.classList.remove("key-down");
            break;
        case "Equal":
            Equal.classList.remove("key-down");
            break;
        case "Backspace":
            Backspace.classList.remove("key-down");
            break;
        case "Tab":
            Tab.classList.remove("key-down");
            break;
        case "KeyQ":
            KeyQ.classList.remove("key-down");
            break;
        case "KeyW":
            KeyW.classList.remove("key-down");
            break;
        case "KeyE":
            KeyE.classList.remove("key-down");
            break;
        case "KeyR":
            KeyR.classList.remove("key-down");
            break;
        case "KeyT":
            KeyT.classList.remove("key-down");
            break;
        case "KeyY":
            KeyY.classList.remove("key-down");
            break;
        case "KeyU":
            KeyU.classList.remove("key-down");
            break;
        case "KeyI":
            KeyI.classList.remove("key-down");
            break;
        case "KeyO":
            KeyO.classList.remove("key-down");
            break;
        case "KeyP":
            KeyP.classList.remove("key-down");
            break;
        case "BracketLeft":
            BracketLeft.classList.remove("key-down");
            break;
        case "BracketRight":
            BracketRight.classList.remove("key-down");
            break;
        case "Backslash":
            Backslash.classList.remove("key-down");
            break;
        case "CapsLock":
            CapsLock.classList.remove("key-down");
            break;
        case "KeyA":
            KeyA.classList.remove("key-down");
            break;
        case "KeyS":
            KeyS.classList.remove("key-down");
            break;
        case "KeyD":
            KeyD.classList.remove("key-down");
            break;
        case "KeyF":
            KeyF.classList.remove("key-down");
            break;
        case "KeyG":
            KeyG.classList.remove("key-down");
            break;
        case "KeyH":
            KeyH.classList.remove("key-down");
            break;
        case "KeyJ":
            KeyJ.classList.remove("key-down");
            break;
        case "KeyK":
            KeyK.classList.remove("key-down");
            break;
        case "KeyL":
            KeyL.classList.remove("key-down");
            break;
        case "Semicolon":
            Semicolon.classList.remove("key-down");
            break;
        case "Quote":
            Quote.classList.remove("key-down");
            break;
        case "Enter":
            Enter.classList.remove("key-down");
            break;
        case "ShiftLeft":
            ShiftLeft.classList.remove("key-down");
            break;
        case "KeyZ":
            KeyZ.classList.remove("key-down");
            break;
        case "KeyX":
            KeyX.classList.remove("key-down");
            break;
        case "KeyC":
            KeyC.classList.remove("key-down");
            break;
        case "KeyV":
            KeyV.classList.remove("key-down");
            break;
        case "KeyB":
            KeyB.classList.remove("key-down");
            break;
        case "KeyN":
            KeyN.classList.remove("key-down");
            break;
        case "KeyM":
            KeyM.classList.remove("key-down");
            break;
        case "Comma":
            Comma.classList.remove("key-down");
            break;
        case "Period":
            Period.classList.remove("key-down");
            break;
        case "Slash":
            Slash.classList.remove("key-down");
            break;
        case "ShiftRight":
            ShiftRight.classList.remove("key-down");
            break;
        case "ControlLeft":
            ControlLeft.classList.remove("key-down");
            break;
        case "MetaLeft":
            MetaLeft.classList.remove("key-down");
            break;
        case "AltLeft":
            AltLeft.classList.remove("key-down");
            break;
        case "Space":
            Space.classList.remove("key-down");
            break;
        case "AltRight":
            AltRight.classList.remove("key-down");
            break;
        case "ControlRight":
            ControlRight.classList.remove("key-down");
            break;
        case "ArrowLeft":
            ArrowLeft.classList.remove("key-down");
            break;
        case "ArrowUp":
            ArrowUp.classList.remove("key-down");
            break;
        case "ArrowDown":
            ArrowDown.classList.remove("key-down");
            break;
        case "ArrowRight":
            ArrowRight.classList.remove("key-down");
            break;
        case "Home":
            Home.classList.remove("key-down");
            break;
        case "End":
            End.classList.remove("key-down");
            break;
        case "PageUp":
            PageUp.classList.remove("key-down");
            break;
        case "PageDown":
            PageDown.classList.remove("key-down");
            break;
        case "NumLock":
            NumLock.classList.remove("key-down");
            break;
        case "NumpadDivide":
            NumpadDivide.classList.remove("key-down");
            break;
        case "NumpadMultiply":
            NumpadMultiply.classList.remove("key-down");
            break;
        case "NumpadSubtract":
            NumpadSubtract.classList.remove("key-down");
            break;
        case "Numpad7":
            Numpad7.classList.remove("key-down");
            break;
        case "Numpad8":
            Numpad8.classList.remove("key-down");
            break;
        case "Numpad9":
            Numpad9.classList.remove("key-down");
            break;
        case "NumpadAdd":
            NumpadAdd.classList.remove("key-down");
            break;
        case "Numpad4":
            Numpad4.classList.remove("key-down");
            break;
        case "Numpad5":
            Numpad5.classList.remove("key-down");
            break;
        case "Numpad6":
            Numpad6.classList.remove("key-down");
            break;
        case "Numpad1":
            Numpad1.classList.remove("key-down");
            break;
        case "Numpad2":
            Numpad2.classList.remove("key-down");
            break;
        case "Numpad3":
            Numpad3.classList.remove("key-down");
            break;
        case "NumpadEnter":
            NumpadEnter.classList.remove("key-down");
            break;
        case "Numpad0":
            Numpad0.classList.remove("key-down");
            break;
        case "NumpadDecimal":
            NumpadDecimal.classList.remove("key-down");
            break;
        default:
            break;
    }
}, false);