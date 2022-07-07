<script lang="ts">
  import Card from "@components/elements/Card.svelte";
  import type { CodeName } from "src/types";

  export let title = "";
  export let refData: CodeName[] = [];
</script>

<Card>
  <h2>{title}</h2>
  <div class="grid">
    {#each refData as item}
      <div>{item.code}</div>
      <div>{item.name}</div>
    {/each}
  </div>
</Card>
