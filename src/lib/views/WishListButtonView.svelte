<script>
	import { Button } from "$lib/Foundation.svelte";
	import { ButtonTheme } from "$lib/foundation/button";
  import EyeOffIcon from '$lib/icons/eye-off.svg';
	import EyeIcon from '$lib/icons/eye.svg';
	import { t } from "$lib/language/translate";
	import { wishListFilter } from "$lib/stores/catalog";

</script>

{#key $wishListFilter}
  <Button
    on:click
    icon={EyeOffIcon}
    selectedIcon={EyeIcon}
    theme={ButtonTheme.default}
    text={$t('Button.WishList')}
    selected={$wishListFilter}
  >
    {$t('Button.WishList')}
  </Button>
{/key}