<script>
	import { onMount } from 'svelte';
	import { LoadingIndicator } from '$lib/components';
	import { categories, things, wishListFilter } from '$lib/stores/catalog';
	import CatalogView from '$lib/views/CatalogView.svelte';
	import BottomNavigationView from '$lib/views/BottomNavigationView.svelte';

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
		<div id="AppView" class="relative">
			<CatalogView />
			<BottomNavigationView />
		</div>
	{/if}
</div>
