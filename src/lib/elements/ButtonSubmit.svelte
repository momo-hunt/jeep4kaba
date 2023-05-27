<script>
  export let loading = false;
  export let disabled = false;
</script>

<button type="submit" disabled={disabled || loading}>
  <slot />
</button>

<style>
  button {
    outline: none;
    background: hsl(216, 25%, 80%);
    border: 1px solid hsl(216, 25%, 80%);
    height: 2rem;
    padding: 0 0.5rem;
  }
</style>
