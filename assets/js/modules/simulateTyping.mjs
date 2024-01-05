import { state } from '../app.js';
import updateText from './updateText.mjs';
import toggleCapsLockLight from './toggleCapsLockLight.mjs';

const textBox = document.getElementById('text_box');
const keypressSound = document.getElementById('keypress_sound');

export default function simulateTyping(event) {
	event.type === 'keydown' ? handleActualTyping(event) : handleVirtualTyping(event.target);
}

function handleActualTyping(event) {
	const { code } = event;
	if (state.keypressSoundIsOn) keypressSound.play();
	if (code !== 'Tab' && document.activeElement !== textBox) textBox.focus();
	toggleCapsLockLight(event);
	document.getElementById(code === '' ? 'ShiftRight' : code)?.classList.add('key--pressed');
}

function handleVirtualTyping(clickTarget) {
	const key = clickTarget.closest('.key');
	if (!key) return;

	textBox.focus();
	if (state.keypressSoundIsOn) keypressSound.play();
	if (!clickTarget.closest('#Delete') && clickTarget.closest('#fn_keys_row')) return;

	updateText(key, textBox);
}
