<script>
  import TableLoading from "$lib/load/TableLoading.svelte";

  export let heads;
  export let collections = {};

  function lowerCase(t) {
    return !t ? null : t.toString().toLocaleLowerCase();
  }
</script>

{#if collections?.loading}
  <TableLoading />
{/if}

{#if collections?.data && !collections?.loading}
  <section class="row">
    <div>
      <small
        >Show :
        <strong>
          {collections?.limit > collections?.total
            ? collections?.total
            : collections?.limit} / {collections?.total}
        </strong>
      </small>

      <select name="limit" id="limit" value={collections?.limit}>
        {#each [5, 10, 20, 50, 100] as n}
          <option value={n}>{n}</option>
        {/each}
      </select>
    </div>
    <div>
      <input type="search" name="search" id="search" />
      <button>Cari</button>
    </div>
  </section>

  <table>
    <thead>
      <tr>
        {#each heads as h}
          <th>{h}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each collections?.data as d}
        <tr>
          {#each heads as h}
            {#if h == "Action"}
              <td class="row"><button>Ubah</button><button>Hapus</button></td>
            {:else}
              <td>{d[lowerCase(h)]}</td>
            {/if}
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>

  <section class="pagenation">
    <div class="row">
      <button disabled={collections?.page == 1}>&laquo;</button>
      <button disabled={collections?.page >= 1}>&lsaquo;</button>

      {#each collections?.pagenations as n}
        <button class:active={collections?.page == n}>{n}</button>
      {/each}

      <button disabled={collections?.page <= collections?.totalPage}
        >&rsaquo;</button
      >
      <button disabled={collections?.page <= collections?.totalPage}
        >&raquo;</button
      >
    </div>
  </section>
{/if}

<style>
  table {
    background: white;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
  }

  table th {
    background: hsl(216, 20%, 90%);
  }

  table th,
  table td {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid hsl(216, 20%, 90%);
  }

  section {
    margin: 0.5rem 0;
  }

  .row {
    display: flex;
    gap: 0.5rem;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.6;
    cursor: auto;
  }

  select,
  button {
    background: white;
    outline: none;
    border: 1px solid hsl(216, 20%, 90%);
    height: 1.5rem;
    padding: 0 0.5rem;
  }

  button:hover:not(:disabled),
  button:focus:not(:disabled),
  select:hover,
  select:focus {
    background: hsl(216, 20%, 90%);
  }

  section.pagenation {
    display: flex;
    justify-content: center;
  }

  section.pagenation button.active {
    background: hsl(216, 20%, 85%);
    font-weight: bold;
  }
</style>
