<script>
  import { list } from "$lib/stores";

  import { goto } from "$app/navigation";
  import TableLoading from "$lib/load/TableLoading.svelte";

  export let heads;
  export let collection;
  $: collections = $list?.[collection];

  function lowerCase(t) {
    return !t ? null : t.toString().toLocaleLowerCase();
  }

  function changePage(t) {
    t = { ...t, limit: collections?.limit };
    let params = new URLSearchParams(t);
    goto("?" + params);

    list.get($list, collection, {
      limit: collections?.limit,
      page: t.page,
    });
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
        {collections?.data[0].no}
        - {collections?.data[collections?.data.length - 1].no}
        / {collections?.total}
      </small>

      <select name="limit" id="limit" value={Number(collections?.limit)}>
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

  <div class="table">
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
  </div>
  <section class="pagenation">
    <div class="row">
      <button
        disabled={collections?.page == 1}
        on:click={() => changePage({ page: 1 })}>&laquo;</button
      >
      <button
        disabled={collections?.page - 1 <= 0}
        on:click={() => changePage({ page: collections?.page - 1 })}
        >&lsaquo;</button
      >

      {#each collections?.pagenation as n}
        <button
          class:active={collections?.page == n}
          on:click={() => changePage({ page: n })}>{n}</button
        >
      {/each}

      <button
        disabled={collections?.page + 1 > collections?.totalPage}
        on:click={() => changePage({ page: collections?.page + 1 })}
        >&rsaquo;</button
      >
      <button
        disabled={collections?.page == collections?.totalPage}
        on:click={() => changePage({ page: collections?.totalPage })}
        >&raquo;</button
      >
    </div>
  </section>
{/if}

<style>
  .table {
    overflow-x: auto;
  }

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
