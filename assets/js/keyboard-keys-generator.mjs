export default function generateKeyboardKeys(keyboard, keys) {
	for (let i = 0; i < keys.length; i++) {
		// generate key rows
		const height = i === 0 ? 'h-[30px]' : 'h-[60px]';
		const rowMarkup = /* html */ `
         <div ${i === 0 ? 'id="fnKeysRow"' : ''} class="flex gap-1.5 rounded-[inherit] ${height}"></div>
      `;
		keyboard.insertAdjacentHTML('beforeend', rowMarkup);

		// generate keys and fill the current row with them
		keys[i].forEach(key => {
			const { mainCharacter = '', keyId = '', extraCharacterMarkup, extraAttributes, extraClasses } = key;
			/* prettier-ignore */
			const keyMarkup = /* html */ `
            <button type="button" id="${keyId}" ${extraAttributes?.join(' ') ?? ''} class="key ${extraClasses?.join(' ') ?? ''}">
               <span>${mainCharacter}</span>
               ${extraCharacterMarkup || ''}
            </button>
	      `;
			keyboard.querySelector(`div:nth-of-type(${i + 1})`).insertAdjacentHTML('beforeend', keyMarkup);
		});
	}

	// generate and place double-arrow keys
	const doubleCaretsMarkup = /* html */ `
      <div class="flex min-w-[75px] flex-col gap-1">
         <button type="button" id="ArrowUp" tabindex="-1" title="arrow up" class="key flex-grow [&>*:first-child]:hidden">
            <span></span>
            <svg class="h-4 w-4 stroke-current">
               <use href="assets/icons.svg#caret-up"></use>
            </svg>
         </button>
         <button type="button" id="ArrowDown" tabindex="-1" title="arrow down" class="key flex-grow [&>*:first-child]:hidden">
            <span></span>
            <svg class="h-4 w-4 stroke-current">
               <use href="assets/icons.svg#caret-down"></use>
            </svg>
         </button>
      </div>
   `;
	document.getElementById('ArrowRight').insertAdjacentHTML('beforebegin', doubleCaretsMarkup);
}
