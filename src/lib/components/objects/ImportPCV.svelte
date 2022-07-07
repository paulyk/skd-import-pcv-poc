<script lang="ts">
  import Field from "@components/elements/Field.svelte";
  import Flex from "@components/elements/Flex.svelte";

  import Row from "@components/elements/Row.svelte";
  import Selector from "@components/elements/Selector.svelte";
  import Textarea from "@components/elements/Textarea.svelte";

  import { generatePcvMetadata } from "@lib/util/parsePcvData";
  import type { PcvMetaData, PcvModel } from "src/types";

  let text = "";
  let modelYear = 2023;
  const models: PcvModel[] = ["Ranger,P703", 'Evereset,U704']
  let pcvModel: PcvModel = models[0];
  let error = "";

  export let value: PcvMetaData | null = null;
  $: {
    error = ""
    let lines = (text || "").split("\n");
    if (text.length > 0 && lines.length < 7) {
      error = `Invalid selection, ${lines.length} lines, should be 7`;
    } else {
      value = text ? generatePcvMetadata(pcvModel, modelYear, text) : null;
    }
  }
</script>

<Row>
  <Flex alignItems="center">
    <Selector options={models} label="Model, Sub model" bind:value={pcvModel} />
    <Field type="number" bind:value={modelYear} label="Model Year" />
  </Flex>
</Row>
<Row>
  <Textarea bind:value={text} label="Paste data here" />
</Row>
<Row>
  <div class="danger">
    {error}
  </div>
</Row>

<style>
  .danger {
    color: var(--danger);
  }
</style>