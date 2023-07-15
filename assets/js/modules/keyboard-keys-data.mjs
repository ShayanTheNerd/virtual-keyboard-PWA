export default [
	// row 1
	[
		{
			keyId: 'Escape',
			mainCharacter: 'esc',
			extraClasses: ['min-w-fit', 'basis-full', 'rounded-tl-[inherit]'],
		},
		{
			keyId: 'F1',
			mainCharacter: 'f1',
			extraClasses: ['min-w-fit', 'basis-full'],
		},
		{
			keyId: 'F2',
			mainCharacter: 'f2',
			extraClasses: ['min-w-fit', 'basis-full'],
		},
		{
			keyId: 'F3',
			mainCharacter: 'f3',
			extraClasses: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="h-4 w-4 rounded border fill-current p-px">
               <use href="assets/icons.svg#moon"></use>
            </svg>
         `,
		},
		{
			keyId: 'F4',
			mainCharacter: 'f4',
			extraClasses: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="h-4 w-4 rounded border fill-current">
               <use href="assets/icons.svg#screen-share"></use>
            </svg>
         `,
		},
		{
			keyId: 'F5',
			mainCharacter: 'f5',
			extraClasses: ['min-w-fit', 'basis-full'],
		},
		{
			keyId: 'F6',
			mainCharacter: 'f6',
			extraClasses: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="h-4 w-4 rounded border stroke-current">
               <use href="assets/icons.svg#speaker-low"></use>
            </svg>
         `,
		},
		{
			keyId: 'F7',
			mainCharacter: 'f7',
			extraClasses: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="h-4 w-4 rounded border stroke-current">
               <use href="assets/icons.svg#speaker-on"></use>
            </svg>
         `,
		},
		{
			keyId: 'F8',
			mainCharacter: 'f8',
			extraClasses: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="h-4 w-4 rounded border fill-current p-px">
               <use href="assets/icons.svg#microphone-muted"></use>
            </svg>
         `,
		},
		{
			keyId: 'F9',
			mainCharacter: 'f9',
			extraClasses: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="h-4 w-4 rounded border stroke-current p-px">
               <use href="assets/icons.svg#sun-small"></use>
            </svg>
         `,
		},
		{
			keyId: 'F10',
			mainCharacter: 'f10',
			extraClasses: ['min-w-fit', 'basis-full'],
			extraCharacterMarkup: /* html */ `
            <svg class="h-4 w-4 rounded border stroke-current p-px">
               <use href="assets/icons.svg#sun-big"></use>
            </svg>
         `,
		},
		{
			keyId: 'F11',
			mainCharacter: 'f11',
			extraClasses: ['min-w-fit', 'basis-full'],
		},
		{
			keyId: 'F12',
			mainCharacter: 'f12',
			extraClasses: ['min-w-fit', 'basis-full'],
		},
		{
			keyId: 'Insert',
			mainCharacter: 'insert',
			extraClasses: ['min-w-fit', 'basis-full'],
		},
		{
			keyId: 'Delete',
			mainCharacter: 'delete',
			extraClasses: ['min-w-fit', 'basis-full', 'rounded-tr-[inherit]'],
		},
	],

	// row 2
	[
		{
			keyId: 'Backquote',
			mainCharacter: '`',
			extraClasses: ['key--double-characters', 'w-[40px]', 'min-w-fit'],
			extraCharacterMarkup: '<span>~</span>',
		},
		{
			keyId: 'Digit1',
			mainCharacter: '1',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>!</span>',
		},
		{
			keyId: 'Digit2',
			mainCharacter: '2',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>@</span>',
		},
		{
			keyId: 'Digit3',
			mainCharacter: '3',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>#</span>',
		},
		{
			keyId: 'Digit4',
			mainCharacter: '4',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>$</span>',
		},
		{
			keyId: 'Digit5',
			mainCharacter: '5',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>%</span>',
		},
		{
			keyId: 'Digit6',
			mainCharacter: '6',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>^</span>',
		},
		{
			keyId: 'Digit7',
			mainCharacter: '7',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>&</span>',
		},
		{
			keyId: 'Digit8',
			mainCharacter: '8',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>*</span>',
		},
		{
			keyId: 'Digit9',
			mainCharacter: '9',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>(</span>',
		},
		{
			keyId: 'Digit0',
			mainCharacter: '0',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>)</span>',
		},
		{
			keyId: 'Minus',
			mainCharacter: '-',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>_</span>',
		},
		{
			keyId: 'Equal',
			mainCharacter: '=',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>+</span>',
		},
		{
			keyId: 'Backspace',
			mainCharacter: 'backspace',
			extraClasses: ['w-[109px]', 'flex-col'],
			extraCharacterMarkup: /* html */ `
            <svg class="h-4 w-4 stroke-current">
               <use href="assets/icons.svg#arrow-left"></use>
            </svg>
         `,
		},
	],

	// row 3
	[
		{
			keyId: 'Tab',
			mainCharacter: 'tab',
			extraClasses: ['min-w-[75px]'],
			extraCharacterMarkup: /* html */ `
            <div>
               <svg class="h-4 w-4 stroke-current">
                  <use href="assets/icons.svg#tab-arrow-left"></use>
               </svg>
               <svg class="h-4 w-4 stroke-current">
                  <use href="assets/icons.svg#tab-arrow-right"></use>
               </svg>
            </div>
         `,
		},
		{
			keyId: 'keyQ',
			mainCharacter: 'Q',
		},
		{
			keyId: 'keyW',
			mainCharacter: 'W',
		},
		{
			keyId: 'keyE',
			mainCharacter: 'E',
		},
		{
			keyId: 'keyR',
			mainCharacter: 'R',
		},
		{
			keyId: 'keyT',
			mainCharacter: 'T',
		},
		{
			keyId: 'keyY',
			mainCharacter: 'Y',
		},
		{
			keyId: 'keyU',
			mainCharacter: 'U',
		},
		{
			keyId: 'keyI',
			mainCharacter: 'I',
		},
		{
			keyId: 'keyO',
			mainCharacter: 'O',
		},
		{
			keyId: 'keyP',
			mainCharacter: 'P',
		},
		{
			keyId: 'BracketLeft',
			mainCharacter: '[',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>{</span>',
		},
		{
			keyId: 'BracketRight',
			mainCharacter: ']',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>}</span>',
		},
		{
			keyId: 'BackSlash',
			mainCharacter: '\\',
			extraClasses: ['key--double-characters', 'w-[74px]'],
			extraCharacterMarkup: '<span>|</span>',
		},
	],

	// row 4
	[
		{
			keyId: 'CapsLock',
			mainCharacter: 'caps lock',
			extraClasses: ['min-w-[95px]'],
			extraCharacterMarkup: /* html */ `
            <span class="relative top-0.5 h-1 w-1 rounded-full bg-[#252525]" id="capsLockLight"></span>
         `,
		},
		{
			keyId: 'keyA',
			mainCharacter: 'A',
		},
		{
			keyId: 'keyS',
			mainCharacter: 'S',
		},
		{
			keyId: 'keyD',
			mainCharacter: 'D',
		},
		{
			keyId: 'keyF',
			mainCharacter: 'F',
		},
		{
			keyId: 'keyG',
			mainCharacter: 'G',
		},
		{
			keyId: 'keyH',
			mainCharacter: 'H',
		},
		{
			keyId: 'keyJ',
			mainCharacter: 'J',
		},
		{
			keyId: 'keyK',
			mainCharacter: 'K',
		},
		{
			keyId: 'keyL',
			mainCharacter: 'L',
		},
		{
			keyId: 'Semicolon',
			mainCharacter: ';',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>:</span>',
		},
		{
			keyId: 'Quote',
			mainCharacter: '&apos;',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>&quot;</span>',
		},
		{
			keyId: 'Enter',
			mainCharacter: 'enter',
			extraClasses: ['w-[120px]', 'flex-col'],
			extraCharacterMarkup: /* html */ `
            <svg class="relative -top-0.5 h-4 w-4 stroke-current">
               <use href="assets/icons.svg#enter-arrow-curve-left"></use>
            </svg>
         `,
		},
	],

	// row 5
	[
		{
			keyId: 'ShiftLeft',
			mainCharacter: 'shift',
			extraClasses: ['min-w-[126px]', 'justify-center'],
			extraCharacterMarkup: /* html */ `
            <svg class="h-4 w-4 stroke-current">
               <use href="assets/icons.svg#arrow-up"></use>
            </svg>
         `,
		},
		{
			keyId: 'keyZ',
			mainCharacter: 'Z',
		},
		{
			keyId: 'keyX',
			mainCharacter: 'X',
		},
		{
			keyId: 'keyC',
			mainCharacter: 'C',
		},
		{
			keyId: 'keyV',
			mainCharacter: 'V',
		},
		{
			keyId: 'keyB',
			mainCharacter: 'B',
		},
		{
			keyId: 'keyN',
			mainCharacter: 'N',
		},
		{
			keyId: 'keyM',
			mainCharacter: 'M',
		},
		{
			keyId: 'Comma',
			mainCharacter: ',',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>&lt;</span>',
		},
		{
			keyId: 'Period',
			mainCharacter: '.',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>&gt;</span>',
		},
		{
			keyId: 'Slash',
			mainCharacter: '/',
			extraClasses: ['key--double-characters'],
			extraCharacterMarkup: '<span>?</span>',
		},
		{
			keyId: 'ShiftRight',
			mainCharacter: /* html */ `
         <svg class="h-4 w-4 stroke-current">
         <use href="assets/icons.svg#arrow-up"></use>
         </svg>
         `,
			extraClasses: ['w-[155px]', 'justify-center'],
			extraCharacterMarkup: '<span>shift</span>',
		},
	],

	// row 6
	[
		{
			keyId: 'ControlLeft',
			mainCharacter: 'ctrl',
			extraClasses: ['rounded-bl-[inherit]'],
		},
		{
			keyId: 'Fn',
			mainCharacter: '',
			extraClasses: ['[&>*:first-child]:hidden'],
			extraCharacterMarkup: /* html */ `
            <span class="flex h-5 w-5 items-center justify-center rounded border">fn</span>
         `,
		},
		{
			keyId: 'Meta',
			mainCharacter: '',
			extraAttribute: ['aria-label="Windows logo key"'],
			extraClasses: ['[&>*:first-child]:hidden'],
			extraCharacterMarkup: /* html */ `
            <svg class="h-6 w-6 fill-current stroke-current">
               <use href="assets/icons.svg#windows-logo"></use>
            </svg>
         `,
		},
		{
			keyId: 'AltLeft',
			mainCharacter: 'alt',
		},
		{
			keyId: 'Space',
			mainCharacter: '',
			extraAttribute: ['title="space"'],
			extraClasses: ['min-w-[324px]'],
		},
		{
			keyId: 'AltRight',
			mainCharacter: 'alt',
		},
		{
			keyId: 'ControlRight',
			mainCharacter: 'ctrl',
			extraClasses: ['min-w-[75px]'],
		},
		{
			keyId: 'ArrowLeft',
			mainCharacter: '',
			extraAttribute: ['title="arrow left"'],
			extraClasses: ['[&>*:first-child]:hidden'],
			extraCharacterMarkup: /* html */ `
            <svg class="h-4 w-4 stroke-current">
               <use href="assets/icons.svg#caret-left"></use>
            </svg>
         `,
		},
		{
			keyId: 'ArrowRight',
			mainCharacter: '',
			extraAttribute: ['title="arrow right"'],
			extraClasses: ['rounded-br-[inherit]', '[&>*:first-child]:hidden'],
			extraCharacterMarkup: /* html */ `
            <svg class="h-4 w-4 stroke-current">
               <use href="assets/icons.svg#caret-right"></use>
            </svg>
         `,
		},
	],
];

/* 
   <!-- row 1 -->
   <div class="flex h-[30px] gap-1.5 rounded-t-[inherit]">
      <button type="button" class="key min-w-fit basis-full rounded-tl-[inherit]">esc</button>
      <button type="button" class="key min-w-fit basis-full">f1</button>
      <button type="button" class="key min-w-fit basis-full">f2</button>
      <button type="button" class="key min-w-fit basis-full">
         <span>f3</span>
         <svg class="h-4 w-4 rounded border fill-current p-px">
            <use href="assets/icons.svg#moon"></use>
         </svg>
      </button>
      <button type="button" class="key min-w-fit basis-full">
         <span>f4</span>
         <svg class="h-4 w-4 rounded border fill-current">
            <use href="assets/icons.svg#screen-share"></use>
         </svg>
      </button>
      <button type="button" class="key min-w-fit basis-full">f5</button>
      <button type="button" class="key min-w-fit basis-full">
         <span>f6</span>
         <svg class="h-4 w-4 rounded border stroke-current">
            <use href="assets/icons.svg#speaker-low"></use>
         </svg>
      </button>
      <button type="button" class="key min-w-fit basis-full">
         <span>f7</span>
         <svg class="h-4 w-4 rounded border stroke-current">
            <use href="assets/icons.svg#speaker-on"></use>
         </svg>
      </button>
      <button type="button" class="key min-w-fit basis-full">
         <span>f8</span>
         <svg class="h-4 w-4 rounded border fill-current p-px">
            <use href="assets/icons.svg#microphone-muted"></use>
         </svg>
      </button>
      <button type="button" class="key min-w-fit basis-full">
         <span>f9</span>
         <svg class="h-4 w-4 rounded border stroke-current p-px">
            <use href="assets/icons.svg#sun-small"></use>
         </svg>
      </button>
      <button type="button" class="key min-w-fit basis-full">
         <span>f10</span>
         <svg class="h-4 w-4 rounded border stroke-current p-px">
            <use href="assets/icons.svg#sun-big"></use>
         </svg>
      </button>
      <button type="button" class="key min-w-fit basis-full">f11</button>
      <button type="button" class="key min-w-fit basis-full">f12</button>
      <button type="button" class="key min-w-fit basis-full">insert</button>
      <button type="button" class="key min-w-fit basis-full rounded-tr-[inherit]">delete</button>
   </div>

   <!-- row 2 -->
   <div class="flex h-[60px] gap-1.5">
      <button type="button" class="key key--double-characters w-[40px] min-w-fit">
         <span>`</span>
         <span>~</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>1</span>
         <span>!</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>2</span>
         <span>@</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>3</span>
         <span>#</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>4</span>
         <span>$</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>5</span>
         <span>%</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>6</span>
         <span>^</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>7</span>
         <span>&amp;</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>8</span>
         <span>*</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>9</span>
         <span>(</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>0</span>
         <span>)</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span class="mt-2">-</span>
         <span class="-mt-3">_</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>=</span>
         <span>+</span>
      </button>
      <button type="button" class="key w-[109px] flex-col">
         <span>backspace</span>
         <svg class="h-4 w-4 stroke-current">
            <use href="assets/icons.svg#arrow-left"></use>
         </svg>
      </button>
   </div>

   <!-- row 3 -->
   <div class="flex h-[60px] gap-1.5">
      <button type="button" class="key min-w-[75px]">
         <span>tab</span>
         <div>
            <svg class="h-4 w-4 stroke-current">
               <use href="assets/icons.svg#tab-arrow-left"></use>
            </svg>
            <svg class="h-4 w-4 stroke-current">
               <use href="assets/icons.svg#tab-arrow-right"></use>
            </svg>
         </div>
      </button>
      <button type="button" class="key">Q</button>
      <button type="button" class="key">W</button>
      <button type="button" class="key">E</button>
      <button type="button" class="key">R</button>
      <button type="button" class="key">T</button>
      <button type="button" class="key">Y</button>
      <button type="button" class="key">U</button>
      <button type="button" class="key">I</button>
      <button type="button" class="key">O</button>
      <button type="button" class="key">P</button>
      <button type="button" class="key key--double-characters">
         <span>[</span>
         <span>{</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>]</span>
         <span>}</span>
      </button>
      <button type="button" class="key key--double-characters w-[74px]">
         <span>\</span>
         <span>|</span>
      </button>
   </div>

   <!-- row 4 -->
   <div class="flex h-[60px] gap-1.5">
      <button type="button" class="key min-w-[95px]">
         <span>caps lock</span>
         <span class="relative top-0.5 h-1 w-1 rounded-full bg-[#252525]" id="capsLockLight"></span>
      </button>
      <button type="button" class="key">A</button>
      <button type="button" class="key">S</button>
      <button type="button" class="key">D</button>
      <button type="button" class="key">F</button>
      <button type="button" class="key">G</button>
      <button type="button" class="key">H</button>
      <button type="button" class="key">J</button>
      <button type="button" class="key">K</button>
      <button type="button" class="key">L</button>
      <button type="button" class="key key--double-characters">
         <span>;</span>
         <span>:</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>&apos;</span>
         <span class="mt-3">&quot;</span>
      </button>
      <button type="button" class="key w-[120px] flex-col">
         <span>enter</span>
         <svg class="relative -top-0.5 h-4 w-4 stroke-current">
            <use href="assets/icons.svg#enter-arrow-curve-left"></use>
         </svg>
      </button>
   </div>

   <!-- row 5 -->
   <div class="flex h-[60px] gap-1.5">
      <button type="button" class="key min-w-[126px] justify-center">
         <span>shift</span>
         <svg class="h-4 w-4 stroke-current">
            <use href="assets/icons.svg#arrow-up"></use>
         </svg>
      </button>
      <button type="button" class="key">Z</button>
      <button type="button" class="key">X</button>
      <button type="button" class="key">C</button>
      <button type="button" class="key">V</button>
      <button type="button" class="key">B</button>
      <button type="button" class="key">N</button>
      <button type="button" class="key">M</button>
      <button type="button" class="key key--double-characters">
         <span>,</span>
         <span>&lt;</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>.</span>
         <span>&gt;</span>
      </button>
      <button type="button" class="key key--double-characters">
         <span>/</span>
         <span>?</span>
      </button>
      <button type="button" class="key w-[155px] justify-center">
         <svg class="h-4 w-4 stroke-current">
            <use href="assets/icons.svg#arrow-up"></use>
         </svg>
         <span>shift</span>
      </button>
   </div>

   <!-- row 6 -->
   <div class="flex h-[60px] gap-1.5 rounded-b-[inherit]">
      <button type="button" class="key rounded-bl-[inherit]">ctrl</button>
      <button type="button" class="key [&>*:first-child]:hidden">
         <span></span>
         <span class="flex h-5 w-5 items-center justify-center rounded border">fn</span>
      </button>
      <button type="button" aria-label="Windows logo key" class="key [&>*:first-child]:hidden">
         <span></span>
         <svg class="h-6 w-6 fill-current stroke-current">
            <use href="assets/icons.svg#windows-logo"></use>
         </svg>
      </button>
      <button type="button" class="key">alt</button>
      <button type="button" title="space" class="key min-w-[324px]"></button>
      <button type="button" class="key">alt</button>
      <button type="button" class="key min-w-[75px]">ctrl</button>
      <button type="button" title="arrow left" class="key [&>*:first-child]:hidden">
         <span></span>
         <svg class="h-4 w-4 stroke-current">
            <use href="assets/icons.svg#caret-left"></use>
         </svg>
      </button>
      <div class="flex min-w-[75px] flex-col gap-1">
         <button type="button" title="arrow up" class="key flex-grow [&>*:first-child]:hidden">
            <span></span>
            <svg class="h-4 w-4 stroke-current">
               <use href="assets/icons.svg#caret-up"></use>
            </svg>
         </button>
         <button type="button" title="arrow down" class="key flex-grow [&>*:first-child]:hidden">
            <span></span>
            <svg class="h-4 w-4 stroke-current">
               <use href="assets/icons.svg#caret-down"></use>
            </svg>
         </button>
      </div>
      <button
         type="button"
         title="arrow right"
         class="key rounded-br-[inherit] [&>*:first-child]:hidden">
         <span></span>
         <svg class="h-4 w-4 stroke-current">
            <use href="assets/icons.svg#caret-right"></use>
         </svg>
      </button>
   </div>
*/
