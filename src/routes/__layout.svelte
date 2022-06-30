<script lang="ts">
  import "../styles/normalize.css";
  import "../styles/main.css";
  import "../styles/style.css";
  import Header from "@components/Header.svelte";
</script>

<Header />
<main class="layout">
  <slot />
</main>
