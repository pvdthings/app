<script lang="ts">
  import { things } from '$lib/stores/myList';
  import MinusCircleIcon from '$lib/icons/minus-circle.svg';

  const removeThing = (id: String) => {
    things.update(value => value.filter(t => t.id !== id));
  };
</script>

<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Category</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {#each $things as thing}
      <tr>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask rounded-md border border-gray-300 w-14 h-14">
                <img src={thing.image} alt={thing.name} />
              </div>
            </div>
            <div>
              <div class="font-bold">{thing.name}</div>
              <div class="text-sm opacity-50">{thing.available} available</div>
            </div>
          </div>
        </td>
        <td>
          <span class="badge badge-ghost bg-indigo-200 border-indigo-300">{thing.categories[0]}</span>
        </td>
        <th>
          <button class="btn btn-ghost btn-circle" on:click={() => removeThing(thing.id)}>
            <img src={MinusCircleIcon} alt="Remove" class="h-6 w-6" />
          </button>
        </th>
      </tr>
    {/each}
  </tbody>
</table>