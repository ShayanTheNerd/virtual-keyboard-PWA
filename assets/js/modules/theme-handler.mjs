export default function determineAndApplyTheme(theme = localStorage.getItem('theme')) {
	theme ??= matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	localStorage.setItem('theme', theme);
	document.getElementById('theme_icon').href.baseVal = `./assets/icons.svg#keyboard_${theme}`;
	document.documentElement.setAttribute('data-theme', theme);
	document.getElementById('theme_color_meta_tag').setAttribute('content', theme === 'dark' ? '#a1a1aa' : '#d4d4d8');
}
