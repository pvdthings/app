import { writable } from "svelte/store";

export enum Screen {
  catalog,
  myList
}

export const activeScreen = writable<Screen>(Screen.catalog);