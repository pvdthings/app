import { defaultFilterCategory, filter } from "$lib/filters";
import { derived, writable } from "svelte/store";

export const categoryFilter = writable<string>(defaultFilterCategory);

export const searchFilter = writable<string>('');

export const wishListFilter = writable<boolean>(false);

export const things = writable<[]>(undefined);

export const filteredThings = derived(
  [things, categoryFilter, searchFilter, wishListFilter],
  ([$things, $categoryFilter, $searchFilter, $wishListFilter]) => {
    return filter($things, {
			keyword: $searchFilter,
			onlyWishList: $wishListFilter,
			category: $categoryFilter
		});
  }
);

export const categories = writable<[]>(undefined);