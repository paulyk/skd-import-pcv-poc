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
  const models: PcvModel[] = ["Ranger", "Evereset"];
  let pcvModel: PcvModel = models[0];

  export let value: PcvMetaData | null = null;
  $: value = text ? generatePcvMetadata(pcvModel, modelYear, text) : null;
</script>

<Row>
  <Flex alignItems="center">
    <Selector options={models} label="Model" bind:value={pcvModel} />
    <Field type="number" bind:value={modelYear} label="Model Year" />
  </Flex>
</Row>
<Row>
  <Textarea bind:value={text} label="Paste data here" />
</Row>
