<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<button type="button" on:click={() => dispatch("click")}>
  <slot />
</button>

<style>
  button {
    background: white;
    outline: none;
    border: 1px solid hsl(216, 25%, 90%);
    height: 2rem;
    padding: 0 0.5rem;
  }
</style>
