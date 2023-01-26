import type { Writable } from "svelte/store";

export type NavLink = {
  path: string;
  name: string;
  classes: {
    fill?: string;
    line?: string;
    /**
     * Classlist for styling icon wrapper
     */
    wrapper?: string;
  };
};

export type Coordinates = [number, number];

export type WritableCapacitorStorage<T> = Writable<T>;
