<script>
	import { onMount } from 'svelte';
	import { filter } from '$lib/filters';
	import { TextInput } from '$lib/Foundation.svelte';
	import LoadingIndicator from '$lib/LoadingIndicator.svelte';
	import Chooser from '$lib/foundation/Chooser.svelte';
	import { t } from '$lib/language/translate';
	import BorrowModal from '$lib/things/BorrowModal.svelte';
	import { categories, categoryFilter, filteredThings, searchFilter, things, wishListFilter } from '$lib/stores/catalog';
	import ThingsView from '$lib/views/ThingsView.svelte';
	import WishListButtonView from '$lib/views/WishListButtonView.svelte';

	export let data;

	$things = data.things;
  $filteredThings = data.things;
  $categories = data.categories;

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
    $wishListFilter = urlParams.get('showWishList') === 'true';
		filterThings();
	});

	const filterThings = () => {
		$filteredThings = filter($things, {
			keyword: $searchFilter,
			onlyWishList: $wishListFilter,
			category: $categoryFilter
		});
	};

	const filterThingsByCategory = (event) => {
    $categoryFilter = event.detail;
		filterThings();
	};

	const toggleWishList = () => {
    $wishListFilter = !$wishListFilter;
		filterThings();
	};
</script>

<div class="mx-3 lg:mx-auto lg:w-3/4">
	{#if !data}
		<LoadingIndicator />
	{:else}
		<BorrowModal />
		<div class="flex flex-col-reverse mb-8 gap-3 md:h-11 md:w-full md:flex-row md:justify-between">
			<div class="flex flex-row gap-4 justify-between md:justify-start">
				<Chooser on:chosen={filterThingsByCategory} options={$categories} />
				<WishListButtonView on:click={toggleWishList} />
			</div>
			<TextInput bind:value={$searchFilter} on:input={filterThings} placeholder={$t('Input.Search')} />
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
