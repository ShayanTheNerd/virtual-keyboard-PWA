export default [
	// Row 1
	[
		{
			keyId: 'Escape',
			mainCharacter: 'esc',
			classList: ['min-w-fit', 'basis-full', 'rounded-tl-inherit'],
		},
		{
			keyId: 'F1',
			mainCharacter: 'f1',
			classList: ['min-w-fit', 'basis-full'],
		},
		{
			keyId: 'F2',
			mainCharacter: 'f2',
			classList: ['min-w-fit', 'basis-full'],
		},
		{
			keyId: 'F3',
			mainCharacter: 'f3',
			classList: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="size-4 rounded border fill-current p-px">
               <use href="./assets/icons.svg#moon" />
            </svg>
         `,
		},
		{
			keyId: 'F4',
			mainCharacter: 'f4',
			classList: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="size-4 rounded border fill-current">
               <use href="./assets/icons.svg#screen_share" />
            </svg>
         `,
		},
		{
			keyId: 'F5',
			mainCharacter: 'f5',
			classList: ['min-w-fit', 'basis-full'],
		},
		{
			keyId: 'F6',
			mainCharacter: 'f6',
			classList: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="size-4 rounded border stroke-current">
               <use href="./assets/icons.svg#speaker_low" />
            </svg>
         `,
		},
		{
			keyId: 'F7',
			mainCharacter: 'f7',
			classList: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="size-4 rounded border stroke-current">
               <use href="./assets/icons.svg#speaker_on" />
            </svg>
         `,
		},
		{
			keyId: 'F8',
			mainCharacter: 'f8',
			classList: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="size-4 rounded border fill-current p-px">
               <use href="./assets/icons.svg#microphone_muted" />
            </svg>
         `,
		},
		{
			keyId: 'F9',
			mainCharacter: 'f9',
			classList: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="size-4 rounded border stroke-current p-px">
               <use href="./assets/icons.svg#sun_small" />
            </svg>
         `,
		},
		{
			keyId: 'F10',
			mainCharacter: 'f10',
			classList: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="size-4 rounded border stroke-current p-px">
               <use href="./assets/icons.svg#sun_big" />
            </svg>
         `,
		},
		{
			keyId: 'F11',
			mainCharacter: 'f11',
			classList: ['min-w-fit', 'basis-full'],
		},
		{
			keyId: 'F12',
			mainCharacter: 'f12',
			classList: ['min-w-fit', 'basis-full'],
		},
		{
			keyId: 'Insert',
			mainCharacter: 'insert',
			classList: ['min-w-fit', 'basis-full'],
		},
		{
			keyId: 'Delete',
			mainCharacter: 'delete',
			classList: ['min-w-fit', 'basis-full', 'rounded-tr-inherit'],
		},
	],

	// Row 2
	[
		{
			keyId: 'Backquote',
			mainCharacter: '`',
			classList: ['key--double-characters', 'w-[40px]', 'min-w-fit'],
			extraCharacterMarkup: '<span>~</span>',
		},
		{
			keyId: 'Digit1',
			mainCharacter: '1',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>!</span>',
		},
		{
			keyId: 'Digit2',
			mainCharacter: '2',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>@</span>',
		},
		{
			keyId: 'Digit3',
			mainCharacter: '3',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>#</span>',
		},
		{
			keyId: 'Digit4',
			mainCharacter: '4',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>$</span>',
		},
		{
			keyId: 'Digit5',
			mainCharacter: '5',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>%</span>',
		},
		{
			keyId: 'Digit6',
			mainCharacter: '6',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>^</span>',
		},
		{
			keyId: 'Digit7',
			mainCharacter: '7',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>&</span>',
		},
		{
			keyId: 'Digit8',
			mainCharacter: '8',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>*</span>',
		},
		{
			keyId: 'Digit9',
			mainCharacter: '9',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>(</span>',
		},
		{
			keyId: 'Digit0',
			mainCharacter: '0',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>)</span>',
		},
		{
			keyId: 'Minus',
			mainCharacter: '-',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>_</span>',
		},
		{
			keyId: 'Equal',
			mainCharacter: '=',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>+</span>',
		},
		{
			keyId: 'Backspace',
			mainCharacter: 'backspace',
			classList: ['w-[109px]', 'flex-col'],
			extraCharacterMarkup: /* html */ `
            <svg class="size-4 stroke-current">
               <use href="./assets/icons.svg#arrow_left" />
            </svg>
         `,
		},
	],

	// Row 3
	[
		{
			keyId: 'Tab',
			mainCharacter: 'tab',
			classList: ['min-w-18.75'],
			extraCharacterMarkup: /* html */ `
            <div>
               <svg class="size-4 stroke-current">
                  <use href="./assets/icons.svg#tab_arrow_left" />
               </svg>
               <svg class="size-4 stroke-current">
                  <use href="./assets/icons.svg#tab_arrow_right" />
               </svg>
            </div>
         `,
		},
		{
			keyId: 'KeyQ',
			mainCharacter: 'Q',
		},
		{
			keyId: 'KeyW',
			mainCharacter: 'W',
		},
		{
			keyId: 'KeyE',
			mainCharacter: 'E',
		},
		{
			keyId: 'KeyR',
			mainCharacter: 'R',
		},
		{
			keyId: 'KeyT',
			mainCharacter: 'T',
		},
		{
			keyId: 'KeyY',
			mainCharacter: 'Y',
		},
		{
			keyId: 'KeyU',
			mainCharacter: 'U',
		},
		{
			keyId: 'KeyI',
			mainCharacter: 'I',
		},
		{
			keyId: 'KeyO',
			mainCharacter: 'O',
		},
		{
			keyId: 'KeyP',
			mainCharacter: 'P',
		},
		{
			keyId: 'BracketLeft',
			mainCharacter: '[',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>{</span>',
		},
		{
			keyId: 'BracketRight',
			mainCharacter: ']',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>}</span>',
		},
		{
			keyId: 'Backslash',
			mainCharacter: '\\',
			classList: ['key--double-characters', 'w-[74px]'],
			extraCharacterMarkup: '<span>|</span>',
		},
	],

	// Row 4
	[
		{
			keyId: 'CapsLock',
			mainCharacter: 'caps lock',
			classList: ['min-w-[95px]'],
			extraCharacterMarkup: /* html */ `
            <span id="caps_lock_light" class="relative top-0.5 h-1 w-1 rounded-full bg-[#252525]"></span>
         `,
		},
		{
			keyId: 'KeyA',
			mainCharacter: 'A',
		},
		{
			keyId: 'KeyS',
			mainCharacter: 'S',
		},
		{
			keyId: 'KeyD',
			mainCharacter: 'D',
		},
		{
			keyId: 'KeyF',
			mainCharacter: 'F',
		},
		{
			keyId: 'KeyG',
			mainCharacter: 'G',
		},
		{
			keyId: 'KeyH',
			mainCharacter: 'H',
		},
		{
			keyId: 'KeyJ',
			mainCharacter: 'J',
		},
		{
			keyId: 'KeyK',
			mainCharacter: 'K',
		},
		{
			keyId: 'KeyL',
			mainCharacter: 'L',
		},
		{
			keyId: 'Semicolon',
			mainCharacter: ';',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>:</span>',
		},
		{
			keyId: 'Quote',
			mainCharacter: '&apos;',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>&quot;</span>',
		},
		{
			keyId: 'Enter',
			mainCharacter: 'enter',
			classList: ['w-[120px]', 'flex-col'],
			extraCharacterMarkup: /* html */ `
            <svg class="relative -top-0.5 size-4 stroke-current">
               <use href="./assets/icons.svg#enter_arrow_curve_left" />
            </svg>
         `,
		},
	],

	// Row 5
	[
		{
			keyId: 'ShiftLeft',
			mainCharacter: 'shift',
			classList: ['min-w-[126px]', 'justify-center'],
			extraCharacterMarkup: /* html */ `
            <svg class="size-4 stroke-current">
               <use href="./assets/icons.svg#arrow_up" />
            </svg>
         `,
		},
		{
			keyId: 'KeyZ',
			mainCharacter: 'Z',
		},
		{
			keyId: 'KeyX',
			mainCharacter: 'X',
		},
		{
			keyId: 'KeyC',
			mainCharacter: 'C',
		},
		{
			keyId: 'KeyV',
			mainCharacter: 'V',
		},
		{
			keyId: 'KeyB',
			mainCharacter: 'B',
		},
		{
			keyId: 'KeyN',
			mainCharacter: 'N',
		},
		{
			keyId: 'KeyM',
			mainCharacter: 'M',
		},
		{
			keyId: 'Comma',
			mainCharacter: ',',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>&lt;</span>',
		},
		{
			keyId: 'Period',
			mainCharacter: '.',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>&gt;</span>',
		},
		{
			keyId: 'Slash',
			mainCharacter: '/',
			classList: ['key--double-characters'],
			extraCharacterMarkup: '<span>?</span>',
		},
		{
			keyId: 'ShiftRight',
			mainCharacter: /* html */ `
         <svg class="size-4 stroke-current">
         <use href="./assets/icons.svg#arrow_up" />
         </svg>
         `,
			classList: ['w-[155px]', 'justify-center'],
			extraCharacterMarkup: '<span>shift</span>',
		},
	],

	// Row 6
	[
		{
			keyId: 'ControlLeft',
			mainCharacter: 'ctrl',
			classList: ['rounded-bl-inherit'],
		},
		{
			keyId: 'Fn',
			mainCharacter: '',
			classList: ['[&>*:first-child]:hidden'],
			extraCharacterMarkup: /* html */ `
            <span class="flex h-5 w-5 items-center justify-center rounded border">fn</span>
         `,
		},
		{
			keyId: 'MetaLeft',
			mainCharacter: '',
			extraAttribute: ['aria-label="Windows logo key"'],
			classList: ['[&>*:first-child]:hidden'],
			extraCharacterMarkup: /* html */ `
            <svg class="h-6 w-6 fill-current stroke-current">
               <use href="./assets/icons.svg#windows_logo" />
            </svg>
         `,
		},
		{
			keyId: 'AltLeft',
			mainCharacter: 'alt',
		},
		{
			keyId: 'Space',
			mainCharacter: 'space',
			extraAttribute: ['title="Space"'],
			classList: ['min-w-[324px]'],
		},
		{
			keyId: 'AltRight',
			mainCharacter: 'alt',
		},
		{
			keyId: 'ControlRight',
			mainCharacter: 'ctrl',
			classList: ['min-w-18.75'],
		},
		{
			keyId: 'ArrowLeft',
			mainCharacter: 'arrow left',
			extraAttribute: ['title="Arrow left"'],
			classList: ['[&>*:first-child]:hidden'],
			extraCharacterMarkup: /* html */ `
            <svg class="size-4 stroke-current">
               <use href="./assets/icons.svg#caret_left" />
            </svg>
         `,
		},
		{
			keyId: 'ArrowRight',
			mainCharacter: 'arrow right',
			extraAttribute: ['title="Arrow right"'],
			classList: ['rounded-br-inherit', '[&>*:first-child]:hidden'],
			extraCharacterMarkup: /* html */ `
            <svg class="size-4 stroke-current">
               <use href="./assets/icons.svg#caret_right" />
            </svg>
         `,
		},
	],
];
