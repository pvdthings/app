<script>
	import BookOpenIcon from '$lib/icons/book-open.svg';
	import BookmarkIcon from '$lib/icons/bookmark.svg';
	import SolidBookOpenIcon from '$lib/icons/solid/book-open.svg';
	import SolidBookmarkIcon from '$lib/icons/solid/bookmark.svg';
	import { t } from '$lib/language/translate';
	import { activeScreen, Screen } from '$lib/stores/app';

	const catalog = $t('Catalog');
	const myList = $t('My List');
</script>

<div class="btm-nav upward-shadow lg:hidden">
	<button
		class:active={$activeScreen === Screen.catalog}
		on:click={() => ($activeScreen = Screen.catalog)}
	>
		<img
			src={$activeScreen === Screen.catalog ? SolidBookOpenIcon : BookOpenIcon}
			alt={catalog}
			width={24}
			height={24}
		/>
		<span class="btm-nav-label font-sans font-medium">{catalog}</span>
	</button>
	<button
		class:active={$activeScreen === Screen.myList}
		on:click={() => ($activeScreen = Screen.myList)}
	>
		<img
			src={$activeScreen === Screen.myList ? SolidBookmarkIcon : BookmarkIcon}
			alt={myList}
			width={24}
			height={24}
		/>
		<span class="btm-nav-label font-sans font-medium">{myList}</span>
	</button>
</div>

<style>
	.upward-shadow {
		box-shadow: 0 -1px 4px rgba(50, 50, 50, 0.2);
	}
</style>
