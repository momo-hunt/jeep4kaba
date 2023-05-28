<script>
  import Form from "./Form.svelte";
  import { modal, list } from "$lib/stores";
  import Modal from "./Modal.svelte";
  import Input from "../elements/Input.svelte";
  import ButtonSubmit from "../elements/ButtonSubmit.svelte";
  import Select from "../elements/Select.svelte";
  import Loading from "../load/Loading.svelte";

  let loading = false;

  function submitSuccess(e) {
    list.add($modal?.data?.collection, e.detail);
    modal.close($modal?.name);
  }

  function extractType(f) {
    const { type, ...r } = f;
    return r;
  }
</script>

{#if $modal?.type == "form" && $modal?.show}
  <Modal name={$modal?.name}>
    <Loading {loading} />
    <h2>{$modal?.name}</h2>

    <Form {...$modal?.props} bind:loading on:success={submitSuccess} on:error>
      <section>
        {#each $modal?.data?.fields as f}
          {#if f.type == "select"}
            <Select {...extractType(f)} />
          {:else}
            <Input {...f} />
          {/if}
        {/each}

        <ButtonSubmit>simpan</ButtonSubmit>
      </section>
    </Form>
  </Modal>
{/if}

<style>
  h2 {
    padding: 1rem;
    text-align: center;
  }

  section {
    margin: 0 1rem;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
