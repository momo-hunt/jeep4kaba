<script>
  export let loading;
</script>

{#if loading}
  <section>
    <div />
  </section>
{/if}

<style>
  /* * {
    border: 1px solid red;
  } */

  section {
    position: absolute;
    z-index: inherit;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section > div {
    position: relative;
    background: white;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section > div::before {
    content: "";
    position: absolute;
    width: 3rem;
    height: 3rem;
    border: 6px solid hsl(0, 0%, 80%);
    border-radius: 50%;
  }

  section > div::after {
    content: "";
    position: absolute;
    width: 3rem;
    height: 3rem;
    border: 6px solid white;
    border-color: hsl(0, 0%, 50%) transparent transparent transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
