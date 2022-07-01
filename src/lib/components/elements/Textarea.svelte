<script lang="ts">
  export let label = "";
  export let value = "";

  const id = Math.floor(Math.random() * 100000).toString()
</script>

{#if label}
  <label for={id}>{label}</label>
{/if}
<textarea {id} bind:value />
