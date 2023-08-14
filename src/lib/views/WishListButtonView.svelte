<script>
	import { Button } from "$lib/components";
	import { ButtonTheme } from "$lib/components/Button";
  import EyeOffIcon from '$lib/icons/eye-off.svg';
	import EyeIcon from '$lib/icons/eye.svg';
	import { t } from "$lib/language/translate";
	import { wishListFilter } from "$lib/stores/catalog";

  const toggleWishList = () => {
    $wishListFilter = !$wishListFilter;
	};
</script>

{#key $wishListFilter}
  <Button
    on:click={toggleWishList}
    icon={EyeOffIcon}
    selectedIcon={EyeIcon}
    theme={ButtonTheme.default}
    text={$t('Button.WishList')}
    selected={$wishListFilter}
  >
    {$t('Button.WishList')}
  </Button>
{/key}