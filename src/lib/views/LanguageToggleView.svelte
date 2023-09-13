<script>
	import { locale } from '$lib/language/translate';

	const britishFlag = '🏴󠁧󠁢󠁥󠁮󠁧󠁿';
	const spanishFlag = '🇪🇸';
</script>

<button
	on:click={() => ($locale = $locale === 'en' ? 'es' : 'en')}
	class="btn btn-ghost btn-circle text-3xl"
	aria-label="Language"
>
	{$locale === 'en' ? spanishFlag : britishFlag}
</button>
