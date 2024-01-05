const themeIcon = document.getElementById('theme_icon');
const themeColorMetaTag = document.getElementById('theme_color_meta_tag');
const darkThemePreference = matchMedia('(prefers-color-scheme: dark)');

darkThemePreference.addEventListener('change', ({ matches: prefersDarkTheme }) => {
	const theme = prefersDarkTheme ? 'dark' : 'light';
	determineAndApplyTheme(theme);
});

export default function determineAndApplyTheme(theme = localStorage.getItem('theme')) {
	theme ??= darkThemePreference.matches ? 'dark' : 'light';
	localStorage.setItem('theme', theme);
	themeIcon.href.baseVal = `./assets/icons.svg#keyboard_${theme}`;
	document.documentElement.setAttribute('data-theme', theme);
	themeColorMetaTag.setAttribute('content', theme === 'dark' ? '#a1a1aa' : '#d4d4d8');
}
