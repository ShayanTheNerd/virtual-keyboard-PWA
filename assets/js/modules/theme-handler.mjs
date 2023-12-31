export default function determineAndApplyTheme(theme = localStorage.getItem('theme')) {
	theme ??= matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	localStorage.setItem('theme', theme);
	document.getElementById('themeIcon').href.baseVal = `./assets/icons.svg#keyboard-${theme}`;
	document.documentElement.setAttribute('data-theme', theme);
	document.getElementById('themeColorMetaTag').setAttribute('content', theme === 'dark' ? '#a1a1aa' : '#d4d4d8');
}
