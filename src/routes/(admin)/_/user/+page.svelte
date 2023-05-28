<script>
  import { onMount } from "svelte";
  import { modal, list } from "$lib/stores";
  import Button from "$lib/elements/Button.svelte";
  import Table from "$lib/components/Table.svelte";

  export let data;

  let fieldsForm = [
    { label: "Username", type: "text", name: "username" },
    {
      label: "Role",
      type: "select",
      name: "role",
      option: [
        { value: 1, label: "Admin" },
        { value: 2, label: "Sopir" },
        { value: 3, label: "Public" },
      ],
    },
    { label: "Password", type: "password", name: "password" },
    { label: "Confirm Password", type: "password", name: "confirmPassword" },
  ];

  let collection = "users";

  onMount(() => {
    list.get($list, collection, {
      limit: data?.limit ?? 10,
      page: data?.page ?? 1,
    });
  });
</script>

<h1>Users</h1>

<main>
  <Button
    on:click={() =>
      modal.open(
        "Tambah User",
        "form",
        { action: "/login?/add", title: "tambah" },
        { fields: fieldsForm, collection }
      )}>&plus; Tambah</Button
  >
  <Table heads={["No", "Username", "Role", "Action"]} {collection} />
</main>

<style>
  main {
    margin: 1rem;
  }

  h1 {
    margin: 1rem;
  }
</style>
