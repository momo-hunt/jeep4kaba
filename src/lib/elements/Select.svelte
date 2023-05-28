<script>
  export let name;
  export let option = [];
  export let label = undefined;
  export let value = null;
  export let required = undefined;
  export let readonly = undefined;
  export let disabled = undefined;
</script>

<div>
  {#if label}
    <label for={name}>{label}</label>
  {/if}
  <select {name} id={name} {value} {required} {readonly} {disabled}>
    {#each option as { value, label }}
      <option {value}>{label}</option>
    {/each}
  </select>
</div>

<style>
  label {
    font-size: 0.9rem;
  }

  select {
    background: none;
    outline: none;
    border: none;
    width: 100%;
    height: 2rem;
    background: white;
    border: 1px solid hsl(216, 25%, 80%);
    padding: 0 1rem;
    font-size: inherit;
    border-radius: 4px;
  }

  select:focus {
    outline: 2px solid hsl(216, 25%, 70%);
  }
</style>
