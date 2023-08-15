<script lang="ts">
	import "./Chooser.css";
	import { createEventDispatcher } from 'svelte';
	import { t, locale } from '$lib/language/translate';
	import ChevronIcon from "$lib/icons/chevron.svg";
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
		class="chooser-button bg-indigo-100 hover:bg-indigo-50 h-full w-48 brutal hovers"
	>
		<img
			class="inline mr-1"
			src={ChevronIcon}
			alt="Dropdown"
		/>
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