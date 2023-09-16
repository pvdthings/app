<script lang="ts">
	import { locale, t } from '$lib/language/translate';
  import { things } from '$lib/stores/myList';
  import MinusCircleIcon from '$lib/icons/minus-circle.svg';

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
      <tr>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask rounded-md border border-gray-300 w-14 h-14">
                <img src={thing.image} alt={thingName} />
              </div>
            </div>
            <div>
              <div class="font-bold">{thingName}</div>
              <div class="text-sm opacity-50">{thing.available} {$t('Available')}</div>
            </div>
          </div>
        </td>
        <td>
          <span class="badge badge-ghost bg-yellow-300 border-yellow-400">{$t(thing.categories[0])}</span>
        </td>
        <th class="float-right">
          <button class="btn btn-ghost btn-circle" on:click={() => removeThing(thing.id)}>
            <img src={MinusCircleIcon} alt="Remove" class="h-6 w-6" />
          </button>
        </th>
      </tr>
    {/each}
  </tbody>
</table>