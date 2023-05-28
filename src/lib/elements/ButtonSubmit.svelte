<script>
  export let loading = false;
  export let disabled = false;
</script>

<button type="submit" disabled={disabled || loading}>
  <slot />
</button>

<style>
  button {
    cursor: pointer;
    outline: none;
    background: hsl(216, 25%, 80%);
    border: 1px solid hsl(216, 25%, 80%);
    height: 2rem;
    padding: 0 0.5rem;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 4px;
  }

  button:hover {
    background: hsl(216, 25%, 70%);
  }

  button:focus {
    background: hsl(216, 25%, 70%);
    outline: 2px solid hsl(216, 25%, 70%);
    outline-offset: 2px;
  }
</style>
