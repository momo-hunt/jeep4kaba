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
// ////////

const listStore = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    get: async (old, name, option) => {
      set({ ...old, [name]: { loading: true } });

      // let url = ''
      // const res = await fetch(url)
      // const respon = await res.json()

      await new Promise((resolve) => setTimeout(() => resolve(), 3000));
      let data = [];
      set({ ...old, [name]: { loading: false, data } });
    },

    getMore: async (old, name, option) => {},
  };
};
export const list = listStore();
