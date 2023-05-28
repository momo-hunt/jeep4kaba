<script>
  import { modal } from "$lib/stores";
  export let name;
</script>

<section>
  <button class="backdrop" on:click={() => modal.close(name)} />
  <article>
    <slot />
  </article>
</section>

<style>
  section {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: hsla(0, 0%, 0%, 0.5);
    padding: 4rem 2rem;
  }

  button.backdrop {
    background: none;
    outline: none;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  article {
    position: relative;
    background: hsl(216, 25%, 90%);
  }
</style>
