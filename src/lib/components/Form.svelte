<script>
  import { enhance } from "$app/forms";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let action;
  export let title;
  export let loading = undefined;
</script>

<form
  {action}
  {title}
  method="post"
  use:enhance={() => {
    loading = true;
    return async ({ result }) => {
      loading = false;
      console.log("result data form -> ", result.data);
      if (result.status == 200) return dispatch("success", result.data);
      return dispatch("error", result.data);
    };
  }}
>
  <slot />
</form>
