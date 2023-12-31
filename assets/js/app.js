import keys from './modules/keyboard-keys-data.mjs';
import determineAndApplyTheme from './modules/theme-handler.mjs';
import generateKeyboardKeys from './modules/keyboard-keys-generator.mjs';

// Global variables
let soundIsOn = true;
const typingSound = soundIsOn && document.getElementById('keypress_sound');
const textBox = document.getElementById('text_box');
const keyboard = document.getElementById('keyboard');

// Global functions
const focusOnTextarea = () => textBox.focus();

const detectCapsLockState = event => {
	const capsLockLight = document.getElementById('caps_lock_light');
	capsLockLight.classList.toggle('capslock-light', event.getModifierState('CapsLock'));
};

const detectDeviceAndDisplayWarn = () => {
	const { userAgent: deviceInfo } = navigator;
	const deviceIsDesktop = !(/Mobi|Android/i.test(deviceInfo) || /iPhone|iPad|iPod/i.test(deviceInfo));
	if (deviceIsDesktop) return;

	const warningModal = document.getElementById('warning_modal');
	warningModal.showModal();
	document.getElementById('close_modal_btn').addEventListener('click', () => warningModal.close(), { once: true });
};

const simulateTyping = event => {
	const { target, type, key, code } = event;
	const getKeyId = key => {
		// Map key codes to key IDs
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
		if (/^[a-zA-Z]{1}$/.test(key)) return `Key${key.toUpperCase()}`;
		if (/^(?!F5$|F11$|F12$)F\d+$/.test(key)) {
			event.preventDefault();
			return `F${key.slice(1)}`;
		}
		if (code === 'Tab') return 'Tab';
		if (code === 'Space') return 'Space';
		if (code === 'ShiftLeft') return 'ShiftLeft';
		if (key === 'Shift') return 'ShiftRight';
		if (code === 'AltLeft') return 'AltLeft';
		if (code === 'AltRight') return 'AltRight';
		if (code === 'ControlLeft') return 'ControlLeft';
		if (code === 'ControlRight') return 'ControlRight';
		return key;
	};

	if (type === 'click') {
		const key = target.closest('.key');
		if (!key || target.id === 'capsLockLight') return;

		if (soundIsOn) typingSound.play();
		focusOnTextarea();

		if (target.closest('#fn_keys_row')) return;

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
				document.getElementById('caps_lock_light').classList.toggle('capslock-light');
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

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
	generateKeyboardKeys(keyboard, keys);
	determineAndApplyTheme();
	detectDeviceAndDisplayWarn();
	focusOnTextarea();

	// Register the Service Worker
	navigator.serviceWorker.register('./assets/js/modules/service-worker-PWA.mjs'); // URL from the project root
});

// Event handling
{
	// Clear text box
	document.getElementById('clear_text_box_btn').addEventListener('click', () => {
		textarea.value = '';
		focusOnTextarea();
	});

	// Change the theme
	matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
		determineAndApplyTheme(matches);
	});

	document.getElementById('change_theme_btn').addEventListener('click', () => {
		const changedTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
		determineAndApplyTheme(changedTheme);
	});

	// Change sound mode
	document.getElementById('sound_btn').addEventListener('click', () => {
		const soundState = document.getElementById('sound_state');
		const sound = soundState.textContent.toLowerCase() === 'on' ? 'off' : 'on';

		// Update souond state
		soundIsOn = !soundIsOn;
		soundState.textContent = sound;

		// Update speaker icon
		document.getElementById('speaker_icon').href.baseVal = `./assets/icons.svg#speaker_${sound}`;
	});

	// Detect caps lock state
	textBox.addEventListener('click', detectCapsLockState);

	// Simulate virtual typing
	['click', 'keydown'].forEach(event => window.addEventListener(event, simulateTyping));
	window.addEventListener('keyup', () => document.querySelector('.key--pressed')?.classList.remove('key--pressed'));
}
