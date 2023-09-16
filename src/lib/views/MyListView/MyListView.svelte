<script lang="ts">
	import MyListTableRow from './MyListTableRow.svelte';
  import { locale, t } from '$lib/language/translate';
  import { things } from '$lib/stores/myList';

  $: isSpanish = $locale === 'es';

  const removeThing = (id: String) => {
    things.update(value => value.filter(t => t.id !== id));
  };
</script>

<table class="table">
  <thead>
    <tr>
      <th>{$t('Name')}</th>
      <th>{$t('Category')}</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {#each $things as thing}
      {@const thingName = isSpanish ? thing.spanishName : thing.name}
      <MyListTableRow
        on:remove={() => removeThing(thing.id)}
        {thingName}
        category={thing.categories[0]}
        available={thing.available}
        imgSrc={thing.image}
      />
    {/each}
  </tbody>
</table>