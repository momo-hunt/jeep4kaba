<section class="top">
  <div>&nbsp;</div>
  <div>&nbsp;</div>
</section>

<table>
  <tr>
    {#each [1, 2, 3, 4] as _}
      <th>&nbsp;</th>
    {/each}
  </tr>
  {#each [1, 2, 3, 4] as _}
    <tr>
      {#each [1, 2, 3, 4] as _}
        <td>&nbsp;</td>
      {/each}
    </tr>
  {/each}
</table>

<section class="bottom">
  <div>&nbsp;</div>
</section>

<style>
  /* * {
    border: 1px solid red;
  } */

  table {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  table th {
    height: 2rem;
    background: hsl(216, 20%, 80%);
  }

  table td {
    height: 2rem;
    background: hsl(216, 20%, 90%);
  }

  section {
    position: relative;
    overflow: hidden;
    margin: 0.5rem 0;
    display: flex;
  }

  section.top {
    justify-content: space-between;
  }

  section.top > * {
    width: 25%;
    background: hsl(216, 20%, 90%);
  }

  section.bottom {
    justify-content: center;
  }

  section.bottom > * {
    width: 50%;
    background: hsl(216, 20%, 85%);
  }

  table::before,
  section::before {
    content: "";
    position: absolute;
    /* border: 1px solid red; */
    width: 25%;
    height: 100%;
    transform: skew(-10deg) translateX(-100%);
    background: linear-gradient(to right, transparent, white, transparent);
    animation: sliding 2s linear infinite;
  }

  @keyframes sliding {
    to {
      transform: skew(-10deg) translateX(400%);
    }
  }
</style>
