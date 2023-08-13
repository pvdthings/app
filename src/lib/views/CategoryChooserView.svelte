<script>
	import { Chooser } from "$lib/foundation";
	import { categories, categoryFilter } from "$lib/stores/catalog";

  const filterThingsByCategory = (event) => {
    $categoryFilter = event.detail;
	};
</script>

<Chooser on:chosen={filterThingsByCategory} options={$categories} />