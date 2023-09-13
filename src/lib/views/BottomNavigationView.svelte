<script>
	import BookOpenIcon from '$lib/icons/book-open.svg';
	import BookmarkIcon from '$lib/icons/bookmark.svg';
	import InfoCircleIcon from '$lib/icons/info-circle.svg';
	import SolidBookOpenIcon from '$lib/icons/solid/book-open.svg';
	import SolidBookmarkIcon from '$lib/icons/solid/bookmark.svg';
	import SolidInfoCircleIcon from '$lib/icons/solid/info-circle.svg';

	import { t } from '$lib/language/translate';
	import { activeScreen, Screen } from '$lib/stores/app';

	$: catalogText = $t('Catalog');
	$: myListText = $t('My List');
	$: infoText = $t('Info');
</script>

<div class="btm-nav upward-shadow lg:hidden">
	<button
		class:active={$activeScreen === Screen.catalog}
		on:click={() => ($activeScreen = Screen.catalog)}
	>
		<img
			src={$activeScreen === Screen.catalog ? SolidBookOpenIcon : BookOpenIcon}
			alt={catalogText}
			width={24}
			height={24}
		/>
		<span class="btm-nav-label font-sans font-medium">{catalogText}</span>
	</button>
	<button
		class:active={$activeScreen === Screen.myList}
		on:click={() => ($activeScreen = Screen.myList)}
	>
		<img
			src={$activeScreen === Screen.myList ? SolidBookmarkIcon : BookmarkIcon}
			alt={myListText}
			width={24}
			height={24}
		/>
		<span class="btm-nav-label font-sans font-medium">{myListText}</span>
	</button>
	<button
		class:active={$activeScreen === Screen.info}
		on:click={() => ($activeScreen = Screen.info)}
	>
		<img
			src={$activeScreen === Screen.info ? SolidInfoCircleIcon : InfoCircleIcon}
			alt={infoText}
			width={24}
			height={24}
		/>
		<span class="btm-nav-label font-sans font-medium">{infoText}</span>
	</button>
</div>

<style>
	.upward-shadow {
		box-shadow: 0 -1px 4px rgba(50, 50, 50, 0.2);
	}
</style>
