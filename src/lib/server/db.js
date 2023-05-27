import { PUBLIC_DB_URL } from "$env/static/public";

class DB {
  constructor(_token) {
    this.req = { token: _token };
    this.time = new Date().getTime().toString();
  }

  fetchData = async () => {
    let url = new URL(PUBLIC_DB_URL);
    let params = new URLSearchParams(url.search);
    params.append("q", JSON.stringify(this.req));
    params.append("time", this.time);

    // console.log(url, "-", params);
    const res = await fetch(url);
    const respon = await res.json();
    console.log(respon);
    return respon;
  };

  read = async (option) => {
    this.req = { ...this.req, method: "read", option };
    return await this.fetchData();
  };

  collection = (collection) => {
    this.req = { ...this.req, collection };
    return this;
  };
}

export default DB;
