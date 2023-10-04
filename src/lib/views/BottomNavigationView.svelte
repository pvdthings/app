<script>
	import BookOpenIcon from '$lib/icons/book-open.svg';
	import BookmarkIcon from '$lib/icons/bookmark.svg';
	import LightbulbIcon from '$lib/icons/lightbulb.svg';
	import SolidBookOpenIcon from '$lib/icons/solid/book-open.svg';
	import SolidBookmarkIcon from '$lib/icons/solid/bookmark.svg';
	import SolidLightbulbIcon from '$lib/icons/solid/lightbulb.svg';

	import { t } from '$lib/language/translate';
	import { activeScreen, Screen } from '$lib/stores/app';
	import { thingsLength } from '$lib/stores/myList';

	$: catalogText = $t('Catalog');
	$: myListText = $t('My List');
	$: infoText = $t('Info');
</script>

<div class="btm-nav max-h-6 bg-indigo-50 upward-shadow lg:hidden">
	<button
		class="bg-transparent"
		class:active={$activeScreen === Screen.catalog}
		on:click={() => ($activeScreen = Screen.catalog)}
	>
		<img
			src={$activeScreen === Screen.catalog ? SolidBookOpenIcon : BookOpenIcon}
			alt={catalogText}
			width={28}
			height={28}
		/>
	</button>
	<button
		class="bg-transparent"
		class:active={$activeScreen === Screen.myList}
		on:click={() => ($activeScreen = Screen.myList)}
	>
		<div class="indicator">
			{#if $thingsLength}
				<span class="indicator-item badge bg-indigo-500 border-indigo-600 text-white">
					{$thingsLength}
				</span> 
			{/if}
			<img
				src={$activeScreen === Screen.myList ? SolidBookmarkIcon : BookmarkIcon}
				alt={myListText}
				width={28}
				height={28}
			/>
		</div>
	</button>
	<button
		class="bg-transparent"
		class:active={$activeScreen === Screen.info}
		on:click={() => ($activeScreen = Screen.info)}
	>
		<img
			src={$activeScreen === Screen.info ? SolidLightbulbIcon : LightbulbIcon}
			alt={infoText}
			width={28}
			height={28}
		/>
	</button>
</div>

<style>
	.upward-shadow {
		box-shadow: 0 -1px 4px rgba(50, 50, 50, 0.2);
	}
</style>
