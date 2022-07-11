<script lang="ts">
  import RefData from "@components/elements/RefData.svelte";
  import Row from "@components/elements/Row.svelte";
  import Textarea from "@components/elements/Textarea.svelte";
  import { currentComponents } from "@lib/data/currentComponents";
  import { parseComponents } from "@lib/util/parseComponents";
  import type { CodeName } from "src/types";
  import ComponentsSQL from "./ComponentsSQL.svelte";

  let text = "";
  let components: CodeName[] = [];
  let newComponents: CodeName[] = [];

  $: {
    components = parseComponents(text);
    newComponents = components.filter((x) => currentComponents.findIndex((y) => y.code === x.code) < 0);
    console.log("current", currentComponents.length);
    console.log("newOnley", newComponents.length);
    console.log("allNew", components.length);
  }
</script>

<Row>
  <Textarea bind:value={text} label="Paste tab delimited component code, names" />
</Row>
{#if components.length > 0}
  <Row>
    <div class="grid cols-3">
      <RefData title="All" refData={components} />
      <RefData title="New Only" refData={newComponents} />
      <RefData title="Current" refData={currentComponents} />
    </div>
  </Row>
  <Row>
    <ComponentsSQL components={newComponents} />
  </Row>
{/if}
