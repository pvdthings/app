import { browser } from "$app/environment";
import type { Thing } from "$lib/models/Thing";
import { writable } from "svelte/store";

const defaultValue = [];

const initialValue = browser ? JSON.parse(window.localStorage.getItem('myList'))
  ?? defaultValue : defaultValue;

export const things = writable<Thing[]>(initialValue);

things.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('myList', JSON.stringify(value));
  }
});