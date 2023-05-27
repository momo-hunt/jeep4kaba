<script>
  import { onMount } from "svelte";
  import { toggle, list } from "$lib/stores";
  import Button from "$lib/elements/Button.svelte";
  import ModalUser from "./ModalUser.svelte";
  import TableBottom from "./TableBottom.svelte";
  import TableTop from "./TableTop.svelte";
  import TableView from "./TableView.svelte";

  let collection = "users";

  onMount(() => {
    list.get($list, collection, {});
  });
</script>

<h1>Users</h1>

<main>
  <Button on:click={() => toggle.open("form-tambah-user")}>&plus; Tambah</Button
  >
  <TableTop />
  <TableView loading={$list?.[collection]?.loading} />
  <TableBottom />
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
