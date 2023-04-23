export default function determineAndApplyTheme(theme = localStorage.getItem('theme')) {
	theme ??= matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

	// save theme to 'localStorage'
	localStorage.setItem('theme', theme);

	// change the theme icon
	document.getElementById('themeIcon').href.baseVal = `assets/icons.svg#keyboard-${theme}`;

	// change the theme
	document.documentElement.setAttribute('data-theme', theme);

	// change the content of 'theme-color' meta tag to match the theme
	document.getElementById('themeColorMetaTag').setAttribute('content', theme === 'dark' ? '#a1a1aa' : '#d4d4d8');
}
