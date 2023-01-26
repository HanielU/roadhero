<script lang="ts">
  import { goto } from "$app/navigation";
  import { currentUser } from "$lib/stores";

  $: if ($currentUser.model) goto("/");
</script>

<slot />
