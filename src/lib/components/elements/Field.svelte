<script context="module" lang="ts">
  export type InputType = "text" | "number";
</script>

<script lang="ts">
  export let placeholder = "";
  export let label = "";
  export let value: any;
  export let type: InputType = "text";

  const handleInput = (e: any) => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
  };

  const id = Math.floor(Math.random() * 100000).toString();
</script>

<div>
  {#if label}
    <label for={id}>{label}</label>
  {/if}
  <input {type} {value} {placeholder} {id} on:input={handleInput} />  
</div>

<style>
  label {
    display: block;
  }
</style>
