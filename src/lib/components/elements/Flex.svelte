<script context="module" lang="ts">
  export type JustifyContent = "space-between" | "start" | "end";
  export type AlignItems = "center" | "stretch";
</script>

<script lang="ts">
  export let jusitfyContent: JustifyContent = "start";
  export let alignItems: AlignItems = "stretch";

  let style = `justify-content: ${jusitfyContent}; align-items: ${alignItems}`;
</script>

<div class="flex" {style}>
  <slot />
</div>

<style>
  div {
    display: flex;
    gap: 20px;
    
  }

</style>
