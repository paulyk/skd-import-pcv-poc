<script lang="ts">
  import Card from "@components/elements/Card.svelte";
  import type { RefData } from "src/types";

  export let title = "";
  export let refData: RefData[] = [];
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
