<script>
  import { toggle } from "$lib/stores";
  import Modal from "$lib/components/Modal.svelte";
  import Form from "$lib/components/Form.svelte";
  import ButtonSubmit from "$lib/elements/ButtonSubmit.svelte";
  import Input from "$lib/elements/Input.svelte";
  //   export let name
  export let action;
  export let title;
  export let name;

  let loading;

  function submitSuccess(e) {
    let data = e.detail;
  }
</script>

{#if $toggle?.[name]?.value}
  <Modal {name}>
    <h2>{title} User</h2>
    <Form {action} title={name} bind:loading on:success={submitSuccess}>
      <div class="form">
        <Input label="username" name="username" />
        <ButtonSubmit>Tambah</ButtonSubmit>
      </div>
    </Form>
  </Modal>
{/if}

<style>
  h2 {
    margin: 0 1rem;
    padding-top: 1rem;
    text-align: center;
  }

  .form {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
