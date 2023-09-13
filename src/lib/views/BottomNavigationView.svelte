<script>
  import BookOpenIcon from '$lib/icons/book-open.svg';
	import BookmarkIcon from '$lib/icons/bookmark.svg';
  import { activeScreen, Screen } from '$lib/stores/app';
</script>

<div class="btm-nav">
  <button
    class:active={$activeScreen === Screen.catalog}
    on:click={() => $activeScreen = Screen.catalog}
  >
    <img src={BookOpenIcon} alt="Catalog" width={24} height={24} />
    <span class="btm-nav-label">Catalog</span>
  </button>
  <button
    class:active={$activeScreen === Screen.myList}
    on:click={() => $activeScreen = Screen.myList}
  >
    <img src={BookmarkIcon} alt="My List" width={24} height={24} />
    <span class="btm-nav-label">My List</span>
  </button>
</div>