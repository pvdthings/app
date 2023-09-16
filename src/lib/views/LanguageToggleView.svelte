<script>
	import { locale } from '$lib/language/translate';
</script>

<button
	on:click={() => ($locale = $locale === 'en' ? 'es' : 'en')}
	class="btn btn-ghost btn-circle font-sans text-lg"
	aria-label="Language"
>
	{$locale.toUpperCase()}
</button>
