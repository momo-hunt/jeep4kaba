<script>
  import TableBottom from "./TableBottom.svelte";
  import TableTop from "./TableTop.svelte";
  import TableView from "./TableView.svelte";
</script>

<h1>Users</h1>

<main>
  <TableTop />
  <TableView />
  <TableBottom />
</main>

<style>
  main {
    margin: 1rem;
  }

  h1 {
    margin: 1rem;
  }
</style>
