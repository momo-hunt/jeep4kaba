import { writable } from "svelte/store";

const toggleStore = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    open: (name, data) => {
      return update((n) => ({ ...n, [name]: { value: true, data } }));
    },
    close: (name, data) => {
      return update((n) => ({ ...n, [name]: { value: false, data } }));
    },
    show: (name, data) => {
      return update((n) => ({ ...n, [name]: { value: true, data } }));
    },
    hide: (name, data) => {
      return update((n) => ({ ...n, [name]: { value: false, data } }));
    },
  };
};
export const toggle = toggleStore();
