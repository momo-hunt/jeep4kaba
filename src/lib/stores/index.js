import { writable } from "svelte/store";
import { getRole } from "$lib/utils/role";

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

    add: (name, data) =>
      update((n) => {
        console.log("name", name);
        console.log("data", data);
        console.log("data old", n[name].data);
        n[name].data = [data, ...n[name].data];
        return n;
      }),

    get: async (old, name, option) => {
      set({ ...old, [name]: { loading: true } });

      let url = "/api/" + name + "?option=" + JSON.stringify(option);

      // await new Promise((resolve) => setTimeout(() => resolve(), 3000));
      const res = await fetch(url);
      const respon = await res.json();
      // console.log(respon);

      let data = respon.data.map((d) => {
        d.role = getRole(d.role);
        return d;
      });

      let more = respon.totalPage > respon.page;
      set({ ...old, [name]: { loading: false, ...respon, data, more } });
    },

    getMore: async (old, name, option) => {},
  };
};
export const list = listStore();

const modalStore = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    open: (name, type, props, data) => {
      set({ show: true, name, type, props, data });
    },
    close: (name, type, props, data) => {
      set({ show: false, name, type, props, data });
    },
  };
};
export const modal = modalStore();
