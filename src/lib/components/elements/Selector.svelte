<script lang="ts">
  export let options: string[] = [];
  export let value = "";
  export let label = "";

  const id = Math.floor(Math.random() * 100000).toString();
</script>

<div>
  {#if label}
    <label for={id}>{label}</label>
  {/if}
  <select bind:value {id}>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>

