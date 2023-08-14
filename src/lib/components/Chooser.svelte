<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { t, locale } from '$lib/language/translate';
	import CloseIcon from '$lib/icons/x-mark.svg';
	import ChooserItem from './Chooser/ChooserItem.svelte';

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
		class="{dropdownHidden
			? 'bg-indigo-100 hover:bg-indigo-50'
			: 'bg-primary'} px-3 py-1 h-full w-44 rounded brutal hovers font-bold font-display text-left outline-none"
	>
		<span class="mr-1">
			<svg
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
	<div
		class:dropdownHidden
		class="fixed top-0 left-0 w-full h-full overflow-hidden md:h-fit md:absolute md:top-14 bg-indigo-50 md:brutal md:hovers-static md:rounded-md flex flex-col md:gap-y-2 z-50"
	>
		<div class="md:hidden">
			<div class="p-4 bg-primary text-2xl font-bold text-left sticky top-0">
				<!-- {$t('Chooser.CategoryPrompt')} -->
        Category
				<button class="float-right" on:click={toggleDropdown}>
					<img class="w-[30px] h-[30px]" src={CloseIcon} alt="close" />
				</button>
			</div>
      <hr class="border-black border-opacity-20" />
		</div>
    <div class="flex flex-col overflow-y-scroll">
      {#each options as option}
        <ChooserItem on:click={() => optionChosen(option)}>{isEnglish ? option : $t(option)}</ChooserItem>
        <hr />
      {/each}
    </div>
	</div>
</div>

<style lang="postcss">
	.dropdownHidden {
		@apply hidden;
	}
</style>
