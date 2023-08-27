<script>
	import { onMount } from 'svelte';
	import { LoadingIndicator, TextInput } from '$lib/components';
	import { t } from '$lib/language/translate';
	import { BorrowModal } from '$lib/components/things/BorrowModal';
	import { categories, filteredThings, searchFilter, things, wishListFilter } from '$lib/stores/catalog';
	import ThingsView from '$lib/views/ThingsView.svelte';
	import WishListButtonView from '$lib/views/WishListButtonView.svelte';
	import CategoryChooserView from '$lib/views/CategoryChooserView.svelte';

	export let data;

	$things = data.things;
  $categories = data.categories;

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
    $wishListFilter = urlParams.get('showWishList') === 'true';
	});

	const clearSearch = () => {
		$searchFilter = '';
	}
</script>

<div class="mx-3 lg:mx-auto lg:w-3/4">
	{#if !data}
		<LoadingIndicator />
	{:else}
		<BorrowModal />
		<div class="flex flex-col-reverse mb-8 gap-3 md:h-11 md:w-full md:flex-row md:justify-between">
			<div class="flex flex-row gap-4 justify-between md:justify-start">
				<CategoryChooserView />
				<WishListButtonView />
			</div>
			<div class='relative'>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute top-2.5 left-2 transform">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
				<TextInput bind:value={$searchFilter} placeholder={$t('Input.Search')} />
				{#if $searchFilter.length > 0}
				<button class="btn btn-circle btn-sm btn-ghost absolute right-2 top-1.5" on:click={clearSearch}>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
				  </button>
				{/if}
			</div>
		</div>
		<div class="mb-8">
			{#if $filteredThings.length > 0}
				<ThingsView />
			{:else}
				<div class="text-lg text-center font-bold uppercase">{$t('No Results')}</div>
			{/if}
		</div>
	{/if}
</div>
