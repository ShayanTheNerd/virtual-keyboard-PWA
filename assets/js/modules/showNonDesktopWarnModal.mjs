const { userAgent: deviceInfo } = navigator;
const deviceIsDesktop = !(/Mobi|Android/i.test(deviceInfo) || /iPhone|iPad|iPod/i.test(deviceInfo));

export default function showNonDesktopWarnModal() {
	if (deviceIsDesktop) return;

	const warningModal = document.getElementById('warning_modal');
	const warningModalCloseBtn = warningModal.querySelector(`button[aria-controls="${warningModal.id}"]`);
	warningModal.showModal();
	warningModalCloseBtn.addEventListener('click', () => warningModal.close(), { once: true });
}
