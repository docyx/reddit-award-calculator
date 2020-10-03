import { writable } from "svelte/store";

export const url = writable("");

export const result = writable(null);

export const loading = writable(false);

export const awardIcons = writable([]);
