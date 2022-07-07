<script context="module" lang="ts">
  export type JustifyContent = "space-between" | "start" | "end";
  export type AlignItems = "center" | "stretch";
  export type DirectionType = "row" | "column"
</script>

<script lang="ts">
  export let jusitfyContent: JustifyContent = "start";
  export let alignItems: AlignItems = "stretch";
  export let direction: DirectionType = "row";

  export let style = ""

  let computedStyle = `justify-content: ${jusitfyContent}; align-items: ${alignItems}; gap: 1rem; flex-direction: ${direction}; ${style}`;
</script>

<div class="flex" style={computedStyle}>
  <slot />
</div>

<style>
  div {
    display: flex;    
  }

</style>
