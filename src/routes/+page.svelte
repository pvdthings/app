<script>
	import { onMount } from 'svelte';
	import { LoadingIndicator } from '$lib/components';
	import { t } from '$lib/language/translate';
	import { BorrowModal } from '$lib/components/things/BorrowModal';
	import { categories, filteredThings, things, wishListFilter } from '$lib/stores/catalog';
	import ThingsView from '$lib/views/ThingsView.svelte';
	import WishListButtonView from '$lib/views/WishListButtonView.svelte';
	import CategoryChooserView from '$lib/views/CategoryChooserView.svelte';
	import SearchInputView from '$lib/views/SearchInputView.svelte';

	export let data;

	$things = data.things;
	$categories = data.categories;

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		$wishListFilter = urlParams.get('showWishList') === 'true';
	});
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
			<SearchInputView />
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
