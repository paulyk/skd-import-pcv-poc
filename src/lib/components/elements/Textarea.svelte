<script lang="ts">
  export let label = "";
  export let value = "";
  export let style = ""

  const id = Math.floor(Math.random() * 100000).toString()
</script>

{#if label}
  <label for={id}>{label}</label>
{/if}
<textarea  bind:value {id} {style} />
