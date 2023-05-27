<script>
  import { toggle } from "$lib/stores";
  import Button from "$lib/elements/Button.svelte";
  import ModalUser from "./ModalUser.svelte";
  import TableBottom from "./TableBottom.svelte";
  import TableTop from "./TableTop.svelte";
  import TableView from "./TableView.svelte";
</script>

<h1>Users</h1>

<main>
  <Button on:click={() => toggle.open("form-tambah-user")}>&plus; Tambah</Button
  >
  <TableTop />
  <TableView />
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
