<script lang="ts">
  import Nav from "./Nav.svelte";

  const appTitle = import.meta.env.VITE_APP_TITLE  || "App Title"
</script>

<header>
  <div class="logo">{appTitle}</div>
  <Nav />
</header>
