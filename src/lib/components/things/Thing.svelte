<script>
	import BoxIcon from '$lib/icons/box.svg';
	import BookmarkIcon from '$lib/icons/solid/bookmark.svg';
	import { t, locale } from '$lib/language/translate';
	import { things } from '$lib/stores/myList';

	export let thing;

	let innerWidth = 0;
	let language;

	$: isMobile = innerWidth < 600;
	$: fontSize = thing.name.length > 13 || isMobile ? 'text-sm' : 'text-base';
	$: isInList = $things.find(t => t.id === thing.id) !== undefined;

	const donateURL = `https://airtable.com/shrwMSrzvSLpQgQWC?prefill_Description=${encodeURIComponent(
		thing.name
	)}`;
	const hasZeroStock = thing.stock < 1;
	const noneAvailable = !hasZeroStock && (!thing.available || thing.available < 1);

	const backgroundColor = noneAvailable
		? 'bg-red-300'
		: hasZeroStock
		? 'bg-yellow-300'
		: 'bg-green-400';

	const getShortName = (name) => {
		if (name.length < 30) return name;
		return name.substring(0, 29) + '...';
	};

	const onClick = () => {
		if (!hasZeroStock) {
			const existingThing = $things.find(t => t.id === thing.id);
			if (existingThing) {
				// remove
				things.update(value => value.filter(t => t.id !== thing.id));
			} else {
				// add
				things.update(value => [thing, ...value]);
			}
		} else {
			window.open(donateURL, '_blank').focus();
		}
	};

	locale.subscribe((value) => {
		language = value;
	});
</script>

<svelte:window bind:innerWidth />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="relative flex flex-col justify-between bg-white rounded-md overflow-hidden brutal {isInList ? '' : 'hovers-static'} cursor-pointer"
	on:click={onClick}
>
	{#if isInList}
		<div class="absolute -top-2 left-1">
			<img src={BookmarkIcon} alt="Saved in My List" class="h-8 w-8" />
		</div>
	{/if}
	<div class="p-2">
		<img
			src={thing.image ?? BoxIcon}
			alt={thing.name}
			class="w-full aspect-square object-contain rounded"
		/>
		<div class="mt-3">
			<div class="{fontSize} uppercase font-bold font-sans text-center">
				{getShortName(language === 'en' ? thing.name : thing.spanishName ?? thing.name)}
			</div>
		</div>
	</div>
	<div class="{backgroundColor} py-1 text-center font-medium border-t border-black">
		{#if hasZeroStock}
			{$t('Donate')}
		{:else if noneAvailable}
			{isMobile ? `${thing.available} / ${thing.stock}` : $t('Unavailable')}
		{:else}
			{isMobile
				? `${thing.available} / ${thing.stock}`
				: `${thing.available} / ${thing.stock} ${$t('Available')}`}
		{/if}
	</div>
</div>
