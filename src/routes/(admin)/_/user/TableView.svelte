<script>
  import TableLoading from "$lib/load/TableLoading.svelte";
  export let data = [1, 2];
  export let loading = undefined;
</script>

<section>
  {#if loading}
    <TableLoading />
  {/if}

  {#if !loading}
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Role</th>
          <th>Created</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {#each data as d}
          <tr>
            <td>{d?.username ?? "test"}</td>
            <td>{d?.role ?? "test"}</td>
            <td>{d?.created_at ?? "test"}</td>
            <td class="action">
              <button class="warning">Ubah</button>
              <button class="danger">Hapus</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</section>

<style>
  section {
    overflow-x: auto;
  }

  .action {
    display: flex;
    gap: 0.5rem;
  }

  table {
    width: 100%;
    text-align: left;
    background: white;
    border-collapse: collapse;
  }

  table tr th {
    background: hsl(216, 25%, 90%);
  }

  table tr th,
  table tr td {
    padding: 0.5rem;
    border-bottom: 1px solid hsl(216, 25%, 85%);
  }

  table tr:hover {
    background: hsl(216, 25%, 95%);
  }

  button {
    cursor: pointer;
    background: white;
    outline: none;
    border: 1px solid hsl(216, 25%, 90%);
    height: 1.5rem;
    padding: 0 0.5rem;
  }

  button.danger {
    border-color: red;
    color: red;
  }

  button.warning {
    border-color: orange;
    color: orange;
  }

  button:hover,
  button:focus {
    background: hsl(216, 25%, 90%);
  }
</style>
