import { state } from '../app.js';

export default function updateText(key, textBox) {
	let newText = null;
	const stringLength = textBox.value.length;
	const { selectionStart, selectionEnd } = textBox;
	const noSelection = selectionStart === selectionEnd;
	const textBeforeSelection = textBox.value.substring(0, selectionStart);
	const textAfterSelection = textBox.value.substring(selectionEnd, stringLength);
	const character = key.querySelector('span').textContent.trim().toLowerCase();

	switch (character) {
		case 'shift': /* ShiftLeft */
		case '': /* ShiftRight */
		case 'alt':
		case 'tab':
		case 'ctrl':
		case 'caps lock': {
			break;
		}
		case 'space': {
			newText = ' ';
			break;
		}
		case 'enter': {
			newText = '\n';
			break;
		}
		case 'delete': {
			textBox.value = `${textBeforeSelection}${noSelection ? textAfterSelection.slice(1) : textAfterSelection}`;
			textBox.setSelectionRange(selectionStart, selectionStart);
			break;
		}
		case 'backspace': {
			/* Using “Math.max()” to prevent getting “-1” and jumping to the end of the string. */
			const newCursorPosition = noSelection ? Math.max(0, selectionStart - 1) : selectionStart;
			textBox.value = `${noSelection ? textBeforeSelection.slice(0, -1) : textBeforeSelection}${textAfterSelection}`;
			textBox.setSelectionRange(newCursorPosition, newCursorPosition);
			break;
		}
		case 'arrow up':
		case 'arrow down': {
			const newCursorPosition = character === 'arrow up' ? 0 : stringLength;
			textBox.setSelectionRange(newCursorPosition, newCursorPosition);
			break;
		}
		case 'arrow left':
		case 'arrow right': {
			/* Using “Math.max()” to prevent getting “-1” and jumping to the end of the string. */
			const newCursorPosition = Math.max(0, selectionStart + (character === 'arrow left' ? -1 : 1));
			textBox.setSelectionRange(newCursorPosition, newCursorPosition);
			break;
		}
		default: {
			newText = state.capsLockIsOn ? character.toUpperCase() : character;
			break;
		}
	}
	if (newText === null) return;

	textBox.value = `${textBeforeSelection}${newText}${textAfterSelection}`;
	textBox.setSelectionRange(selectionStart + 1, selectionStart + 1);
}
