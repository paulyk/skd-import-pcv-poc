<script lang="ts">
  import RefData from "@components/elements/RefData.svelte";
  import Row from "@components/elements/Row.svelte";
  import Textarea from "@components/elements/Textarea.svelte";
  import { parseComponents } from "@lib/util/parseComponents";
  import type { CodeName } from "src/types";
  import ComponentsSQL from "./ComponentsSQL.svelte";

  let text = "";
  let components: CodeName[];

  $: {
    components = parseComponents(text);
  }
</script>

<Row>
  <Textarea bind:value={text} />
</Row>
{#if components.length > 0}
  <Row>
    <RefData title="Components" refData={components} />
  </Row>
  <Row>
    <ComponentsSQL {components} />
  </Row>
{/if}
