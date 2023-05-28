<script>
  import { onMount } from "svelte";
  import { toggle, list } from "$lib/stores";
  import Button from "$lib/elements/Button.svelte";
  import ModalUser from "./ModalUser.svelte";
  import Table from "$lib/components/Table.svelte";

  let collection = "users";

  onMount(() => {
    list.get($list, collection, { limit: 10, page: 1 });
  });
</script>

<h1>Users</h1>

<main>
  <Button on:click={() => toggle.open("form-tambah-user")}>&plus; Tambah</Button
  >
  <Table
    collections={$list?.[collection]}
    heads={["Username", "Role", "Action"]}
  />
</main>

<ModalUser action="/login?/create" name="form-tambah-user" title="Tambah" />

<style>
  main {
    margin: 1rem;
  }

  h1 {
    margin: 1rem;
  }
</style>
