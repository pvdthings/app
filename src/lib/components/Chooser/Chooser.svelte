<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { t, locale } from '$lib/language/translate';
	import ChooserBody from './ChooserBody.svelte';

	export let options = [];

	let chosenOption = options[0];
	let dropdownHidden = true;

	$: isEnglish = $locale === 'en';

	const dispatch = createEventDispatcher();

	const toggleDropdown = () => {
		dropdownHidden = !dropdownHidden;
	};

	const optionChosen = (option) => {
		chosenOption = option;
		toggleDropdown();
		dispatch('chosen', option);
	};
</script>

<svelte:window on:click={() => (dropdownHidden = true)} />

<div class="relative h-11" on:click|stopPropagation={() => {}} on:keypress={() => {}}>
	<button
		on:click={toggleDropdown}
		class="bg-indigo-100 hover:bg-indigo-50 px-3 py-1 h-full w-48 rounded brutal hovers font-bold font-display text-left outline-none"
	>
		<span class="mr-1">
			<svg
				class:flipped={!dropdownHidden} 
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="inline"><polyline points="6 9 12 15 18 9" /></svg
			>
		</span>
		<span>{isEnglish ? chosenOption : $t(chosenOption)}</span>
	</button>
	<ChooserBody
		hidden={dropdownHidden}
		title={$t('Category')}
		chosenOption={isEnglish ? chosenOption : $t(chosenOption)}
		options={isEnglish ? options : options.map(option => $t(option))}
		onOptionClick={optionChosen}
		onClose={toggleDropdown}
	/>
</div>

<style>
	.flipped {
		@apply rotate-180;
	}
</style>