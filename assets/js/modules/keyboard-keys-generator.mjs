export default function generateKeyboardKeys(keyboard, keys) {
	for (let i = 0; i < keys.length; i++) {
		// Generate key rows
		const height = i === 0 ? 'h-[30px]' : 'h-15';
		const rowMarkup = /* html */ `
         <div ${i === 0 ? 'id="fn_keys_row"' : ''} class="flex gap-1.5 rounded-inherit ${height}"></div>
      `;
		keyboard.insertAdjacentHTML('beforeend', rowMarkup);

		// Generate keys and populate the current row
		keys[i].forEach(key => {
			const { mainCharacter = '', keyId = '', extraCharacterMarkup, extraAttribute, extraClasses } = key;
			/* prettier-ignore */
			const keyMarkup = /* html */ `
            <button type="button" tabindex="-1" ${extraAttribute ?? ''} id="${keyId}" class="key ${extraClasses?.join(' ') ?? ''}">
               <span>${mainCharacter}</span>
               ${extraCharacterMarkup || ''}
            </button>
	      `;
			keyboard.querySelector(`div:nth-of-type(${i + 1})`).insertAdjacentHTML('beforeend', keyMarkup);
		});
	}

	// Generate and add double-arrow keys
	const doubleCaretsMarkup = /* html */ `
      <div class="flex min-w-18.75 flex-col gap-1">
         <button type="button" tabindex="-1" title="Arrow up" id="arrow_up" class="key flex-grow [&>*:first-child]:hidden">
            <span></span>
            <svg class="size-4 stroke-current">
               <use href="assets/icons.svg#caret_up"></use>
            </svg>
         </button>
         <button type="button" tabindex="-1" title="Arrow down" id="arrow_down" class="key flex-grow [&>*:first-child]:hidden">
            <span></span>
            <svg class="size-4 stroke-current">
               <use href="assets/icons.svg#caret_down"></use>
            </svg>
         </button>
      </div>
   `;
	document.getElementById('ArrowRight').insertAdjacentHTML('beforebegin', doubleCaretsMarkup);
}
