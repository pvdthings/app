<script lang="ts">
  import CloseIcon from '$lib/icons/x-mark.svg';
	import ChooserItem from './ChooserItem.svelte';

  export let title: string;
  export let chosenOption: string;
  export let options: string[];
  export let hidden: boolean;
  export let onOptionClick: (option: string) => void;
  export let onClose: () => void;
</script>

<div
  class:body-hidden={hidden}
  class="fixed top-0 left-0 w-full h-full overflow-hidden md:h-fit md:absolute bg-indigo-50 md:brutal md:hovers-above md:rounded-md flex flex-col md:gap-y-2 z-50"
>
  <div class="md:hidden">
    <div class="p-4 bg-primary text-2xl font-bold text-left sticky top-0">
      {title}
      <button class="float-right" on:click={onClose}>
        <img class="w-[30px] h-[30px]" src={CloseIcon} alt="close" />
      </button>
    </div>
    <hr class="border-black border-opacity-20" />
  </div>
  <button
		on:click={onClose}
		class="hidden md:block bg-primary px-3 py-1 h-11 w-full border-b-2 border-black font-bold font-display text-left outline-none"
	>
		<span class="mr-1">
			<svg
				class="inline rotate-180"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			  ><polyline points="6 9 12 15 18 9" /></svg
			>
		</span>
		<span>{chosenOption}</span>
	</button>
  <div class="flex flex-col overflow-y-scroll">
    {#each options as option}
      <hr />
      <ChooserItem on:click={() => onOptionClick(option)}>{option}</ChooserItem>
    {/each}
  </div>
</div>

<style lang="postcss">
	.body-hidden {
		@apply hidden;
	}
</style>