import keys from './keyboard-keys-data.mjs'; // importing data for keyboard keys
import generateKeyboardKeys from './keyboard-keys-generator.mjs'; // importing function to generate keyboard keys
import determineAndApplyTheme from './theme-handler.mjs'; // importing theme handling function

// global variables
let soundIsOn = true;
const typingSound = soundIsOn && document.getElementById('keySound');
const textarea = document.getElementById('textarea');
const keyboard = document.getElementById('keyboard');

// global functions
const focusOnTextarea = () => textarea.focus();

const detectCapsLockState = event => {
	const capsLockLight = document.getElementById('capsLockLight');
	capsLockLight.classList.toggle('capslock-light', event.getModifierState('CapsLock'));
};

const detectDeviceAndDisplayWarn = () => {
	const { userAgent: deviceInfo } = navigator;
	const deviceIsDesktop = !(/Mobi|Android/i.test(deviceInfo) || /iPhone|iPad|iPod/i.test(deviceInfo));
	if (deviceIsDesktop) return;

	document.getElementById('warningModal').showModal();
	document.getElementById('closeModalBtn').addEventListener('click', () => warningModal.close(), { once: true });
};

const simulateTyping = event => {
	const { target, type, key, code } = event;
	const getKeyId = key => {
		/* mapping key codes to key ids */
		if (/-|_/.test(key)) return 'Minus';
		if (/'|"/.test(key)) return 'Quote';
		if (/=|\+/.test(key)) return 'Equal';
		if (/\.|>/.test(key)) return 'Period';
		if (/\/|\?/.test(key)) return 'Slash';
		if (/,|<\//.test(key)) return 'Comma';
		if (/;|:/.test(key)) return 'Semicolon';
		if (/`|~/.test(key)) return 'Backquote';
		if (/\\|\|/.test(key)) return 'BackSlash';
		if (/]|}/.test(key)) return 'BracketRight';
		if (/\[|{/.test(key)) return 'BracketLeft';
		if (/^\d$/.test(key)) return `Digit${key}`;
		if (/^[a-zA-Z]{1}$/.test(code)) return `${key.toUpperCase()}`;
		if (/^(?!F5$|F11$|F12$)F\d+$/.test(key)) {
			event.preventDefault();
			return `F${key.slice(1)}`;
		}
		if (code === 'Tab') return 'Tab';
		if (code === 'Space') return 'Space';
		if (code === 'AltLeft') return 'AltLeft';
		if (code === 'AltRight') return 'AltRight';
		if (code === 'ShiftLeft') return 'ShiftLeft';
		if (key === 'Shift') return 'ShiftRight';
		if (code === 'ControlLeft') return 'ControlLeft';
		if (code === 'ControlRight') return 'ControlRight';
		return key;
	};

	if (type === 'click') {
		const key = target.closest('.key');
		if (!key || target.id === 'capsLockLight') return;

		if (soundIsOn) typingSound.play();
		focusOnTextarea();

		if (target.closest('#fnKeysRow')) return;

		const keyCharacter = key.querySelector('span').textContent.trim();
		switch (keyCharacter) {
			case 'shift':
			case 'ctrl':
			case 'alt': {
				break;
			}
			case 'backspace': {
				textarea.value = textarea.value.slice(0, -1);
				break;
			}
			case 'tab': {
				textarea.value += '    ';
				break;
			}
			case 'caps lock': {
				document.getElementById('capsLockLight').classList.toggle('capslock-light');
				break;
			}
			case 'enter': {
				textarea.value += '\n';
				break;
			}
			default: {
				textarea.value += document.querySelector('.capslock-light') ? keyCharacter : keyCharacter.toLowerCase();
				break;
			}
		}
		if (key.id === 'Space') textarea.value += ' ';
	}

	if (type === 'keydown') {
		if (soundIsOn) typingSound.play();
		if (code !== 'Tab') focusOnTextarea();
		detectCapsLockState(event);

		document.getElementById(getKeyId(key))?.classList.add('key--pressed');
	}
};

// app initialization
document.addEventListener('DOMContentLoaded', () => {
	generateKeyboardKeys(keyboard, keys);

	determineAndApplyTheme();

	detectDeviceAndDisplayWarn();

	focusOnTextarea();
});

// handling events
{
	// clearing textarea
	document.getElementById('clearTextareaBtn').addEventListener('click', () => {
		textarea.value = '';
		focusOnTextarea();
	});

	// changing the theme
	matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
		determineAndApplyTheme(matches);
	});

	document.getElementById('changeThemeBtn').addEventListener('click', () => {
		const changedThemeIsDark = localStorage.getItem('theme') === 'dark' ? false : true;
		determineAndApplyTheme(changedThemeIsDark);
	});

	// changing sound mode
	document.getElementById('soundBtn').addEventListener('click', () => {
		const soundState = document.getElementById('soundState');
		const sound = soundState.textContent.toLowerCase() === 'on' ? 'off' : 'on';

		// change souond state
		soundIsOn = !soundIsOn;
		soundState.textContent = sound;

		// change speaker icon
		document.getElementById('speakerIcon').href.baseVal = `assets/icons.svg#speaker-${sound}`;
	});

	// detecting caps lock state
	textarea.addEventListener('click', detectCapsLockState);

	// simulating virtual typing
	['click', 'keydown'].forEach(event => window.addEventListener(event, simulateTyping));
	window.addEventListener('keyup', () => document.querySelector('.key--pressed')?.classList.remove('key--pressed'));
}
