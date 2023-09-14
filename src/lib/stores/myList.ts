import type { Thing } from "$lib/models/Thing";
import { writable } from "svelte/store";

export const things = writable<Thing[]>([]);