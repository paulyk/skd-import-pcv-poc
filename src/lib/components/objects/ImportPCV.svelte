<script lang="ts">
  import Textarea from "@components/elements/Textarea.svelte";

  import { parseRawPcvData } from "@lib/util/parsePcvData";
  import type { PcvMetaData } from "src/types";

  let text = "";
  export let value: PcvMetaData | null = null;
  $: value = text ? parseRawPcvData(text) : null;
</script>

<div>
  <Textarea bind:value={text} label="Paste data here" />
</div>
