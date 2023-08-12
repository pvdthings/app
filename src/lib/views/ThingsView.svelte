<script>
	import { categories, categoryFilter, filteredThings } from '$lib/stores/catalog';
	import Things from '$lib/things/Things.svelte';
</script>

<Things things={$filteredThings} categories={$categories} shownCategory={$categoryFilter} />
