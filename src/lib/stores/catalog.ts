import { defaultFilterCategory } from "$lib/filters";
import { writable } from "svelte/store";

export const categoryFilter = writable<string>(defaultFilterCategory);

export const searchFilter = writable<string>('');

export const wishListFilter = writable<boolean>(false);

export const things = writable<[]>(undefined);

export const filteredThings = writable<[]>(undefined);

export const categories = writable<[]>(undefined);