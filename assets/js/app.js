export const state = { capsLockIsOn: false, keypressSoundIsOn: true };

import simulateTyping from './modules/simulateTyping.mjs';
import toggleCapsLockLight from './modules/toggleCapsLockLight.mjs';
import determineAndApplyTheme from './modules/determineAndApplyTheme.mjs';
import showNonDesktopWarnModal from './modules/showNonDesktopWarnModal.mjs';
import generateKeyboardKeyElements from './modules/generateKeyboardKeyElements.mjs';

const keyboard = document.getElementById('keyboard');
const soundStateElement = document.getElementById('sound_state');
const soundStateIcon = document.getElementById('sound_state_icon');
const soundControlBtn = document.getElementById('sound_control_btn');
const changeThemeBtn = document.getElementById('change_theme_btn');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
	generateKeyboardKeyElements(keyboard);
	determineAndApplyTheme();
	showNonDesktopWarnModal();

	// Toggle caps lock
	const capsLockBtn = document.getElementById('CapsLock');
	capsLockBtn.addEventListener('click', toggleCapsLockLight);

	// Register the PWA Service Worker
	navigator.serviceWorker.register('./assets/js/serviceWorkerPWA.js'); // URL from the project root
});

// Virtual typing
keyboard.addEventListener('click', simulateTyping);
window.addEventListener('keydown', event => {
	const interactiveElementIds = ['clear_text_box_btn', 'sound_control_btn', 'change_theme_btn', 'copyright_link'];
	if (!interactiveElementIds.includes(document.activeElement.id)) simulateTyping(event);
});
window.addEventListener('keyup', () => document.querySelector('.key--pressed')?.classList.remove('key--pressed'));

// Control keypress sound
soundControlBtn.addEventListener('click', () => {
	state.keypressSoundIsOn = !state.keypressSoundIsOn;

	const newSoundState = soundStateElement.textContent.toLowerCase() === 'on' ? 'off' : 'on';
	soundStateElement.textContent = newSoundState;
	soundStateIcon.href.baseVal = `./assets/icons.svg#speaker_${newSoundState}`; // Update speaker icon
});

// Change theme
changeThemeBtn.addEventListener('click', () => {
	const newTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
	determineAndApplyTheme(newTheme);
});
