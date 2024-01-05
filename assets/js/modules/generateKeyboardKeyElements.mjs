import keys from '../keyboardKeys.js';

const doubleArrowKeysMarkup = /* html */ `
   <div class="flex min-w-18.75 flex-col gap-1">
      <button type="button" tabindex="-1" title="Arrow up" id="ArrowUp" class="key flex-grow">
         <span class="hidden">arrow up</span>
         <svg class="size-4 stroke-current">
            <use href="assets/icons.svg#caret_up"></use>
         </svg>
      </button>
      <button type="button" tabindex="-1" title="Arrow down" id="ArrowDown" class="key flex-grow">
         <span class="hidden">arrow down</span>
         <svg class="size-4 stroke-current">
            <use href="assets/icons.svg#caret_down"></use>
         </svg>
      </button>
   </div>
`;

function populateCurrentRow(keyboard, rowIndex, key) {
	const { keyId, mainCharacter, extraCharacterMarkup, extraAttribute, classList } = key;
	/* prettier-ignore */
	const keyMarkup = /* html */ `
   <button type="button" tabindex="-1" ${extraAttribute ?? ''} id="${keyId}" class="key ${classList?.join(' ') ?? ''}">
         <span ${keyId === 'Space' ? 'class="hidden"' : ''}>${mainCharacter}</span>
         ${extraCharacterMarkup || ''}
      </button>
   `;
	keyboard.querySelector(`div:nth-of-type(${rowIndex + 1})`).insertAdjacentHTML('beforeend', keyMarkup);
}

export default function generateKeyboardKeyElements(keyboard) {
	// Generate key rows
	for (let rowIndex = 0; rowIndex < keys.length; rowIndex++) {
		const rowHeight = rowIndex === 0 ? 'h-[30px]' : 'h-15';
		const rowMarkup = /* html */ `
         <div ${rowIndex === 0 ? 'id="fn_keys_row"' : ''} class="flex gap-1.5 rounded-inherit ${rowHeight}"></div>
      `;
		keyboard.insertAdjacentHTML('beforeend', rowMarkup);
		keys[rowIndex].forEach(key => populateCurrentRow(keyboard, rowIndex, key));
	}

	// Add double-arrow keys
	document.getElementById('ArrowLeft').insertAdjacentHTML('afterend', doubleArrowKeysMarkup);
}
