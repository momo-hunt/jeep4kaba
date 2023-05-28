import { PUBLIC_DB_URL } from "$env/static/public";
import { error } from "@sveltejs/kit";

class DB {
  constructor(_token) {
    this.req = { token: _token };
    this.time = new Date().getTime().toString();
  }

  fetchData = async () => {
    let url = new URL(PUBLIC_DB_URL);
    url.searchParams.append("q", JSON.stringify(this.req));
    url.searchParams.append("time", this.time);
    try {
      const res = await fetch(url);
      const respon = await res.json();
      if (respon.status && respon.status != 200)
        throw error(respon.status, respon);
      return respon;
    } catch (error) {
      throw error(400, "Gagal fetchData!");
    }
  };

  read = async (option) => {
    this.req = { ...this.req, method: "read", option };
    return await this.fetchData();
  };

  create = async (body) => {
    this.req = { ...this.req, method: "create", body };
    return await this.fetchData();
  };

  collection = (collection) => {
    this.req = { ...this.req, collection };
    return this;
  };
}

export default DB;
