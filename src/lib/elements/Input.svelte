<script>
  export let name;
  export let label = undefined;
  export let type = "text";
  export let placeholder = null;
  export let value = null;
  export let required = undefined;
  export let readonly = undefined;
  export let disabled = undefined;
</script>

<div>
  {#if label}
    <label for={name}>{label}</label>
  {/if}
  <input
    {type}
    {name}
    id={name}
    {placeholder}
    {value}
    {required}
    {readonly}
    {disabled}
  />
</div>

<style>
  label {
    font-size: 0.9rem;
  }

  input {
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

  input:focus {
    outline: 2px solid hsl(216, 25%, 70%);
  }
</style>
