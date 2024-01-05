import { state } from '../app.js';

export default function toggleCapsLockLight(event) {
	const capsLockLight = document.getElementById('caps_lock_light');
	const condition = event.type === 'click' ? !state.capsLockIsOn : event.getModifierState('CapsLock');
	capsLockLight.classList.toggle('caps-lock-light-on', condition);
	state.capsLockIsOn = !!capsLockLight?.classList.contains('caps-lock-light-on');
}
