export default function determineAndApplyTheme(themeIsDark = matchMedia('(prefers-color-scheme: dark)').matches) {
	// save theme to 'localStorage'
	localStorage.setItem('theme', themeIsDark ? 'dark' : 'light');

	// determine the preferred theme from 'localStorage'
	const theme = localStorage.getItem('theme');

	// change the theme icon
	document.getElementById('themeIcon').href.baseVal = `assets/icons.svg#keyboard-${theme}`;

	// change the theme
	document.documentElement.setAttribute('data-theme', theme);

	// change the content of 'theme-color' meta tag to match the theme
	document.getElementById('themeColorMetaTag').setAttribute('content', theme === 'dark' ? '#a1a1aa' : '#d4d4d8');
}
