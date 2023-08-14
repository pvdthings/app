<script lang="ts">
  import CloseIcon from '$lib/icons/x-mark.svg';
	import ChooserItem from './ChooserItem.svelte';

  export let title: string;
  export let options: string[];
  export let hidden: boolean;
  export let onOptionClick: (option: string) => void;
  export let onClose: () => void;
</script>

<div
  class:body-hidden={hidden}
  class="fixed top-0 left-0 w-full h-full overflow-hidden md:h-fit md:absolute md:top-14 bg-indigo-50 md:brutal md:hovers-static md:rounded-md flex flex-col md:gap-y-2 z-50"
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
  <div class="flex flex-col overflow-y-scroll">
    {#each options as option}
      <ChooserItem on:click={() => onOptionClick(option)}>{option}</ChooserItem>
      <hr />
    {/each}
  </div>
</div>

<style lang="postcss">
	.body-hidden {
		@apply hidden;
	}
</style>