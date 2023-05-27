<section>
  <small>
    Menampilkan : 1/3
    <select name="limit" id="limit">
      <option value="5">5</option>
      <option value="10">10</option>
    </select>
  </small>
  <div class="row">
    <button>&laquo;</button>
    <button>&lsaquo;</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>&rsaquo;</button>
    <button>&raquo;</button>
  </div>
</section>

<style>
  section {
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
  }

  .row {
    display: flex;
  }

  button {
    cursor: pointer;
  }

  button:hover,
  button:focus {
    background: hsl(216, 25%, 95%);
  }

  button:disabled {
    opacity: 0.6;
    cursor: auto;
  }

  select,
  button {
    background: white;
    outline: none;
    border: 1px solid hsl(216, 25%, 90%);
    height: 1.5rem;
    padding: 0 0.5rem;
  }
</style>
