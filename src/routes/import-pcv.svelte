<script lang="ts">
  import RefData from "@components/elements/RefData.svelte";

  import { parseRawPcvData } from "@lib/util/parsePcvData";
  import type { PcvMetaData } from "src/types";

  let text = "";
  let pcvMeta: PcvMetaData | null = null;
  $: pcvMeta = text ? parseRawPcvData(text) : null;
</script>

<h1>Import PCV</h1>

<form action="">
  <textarea bind:value={text} />
</form>

{#if pcvMeta}
  <div class="grid cols-3">
    <RefData refData={pcvMeta?.series} title="Series" />
    <RefData refData={pcvMeta?.engine} title="Engine" />
    <RefData refData={pcvMeta?.transmission} title="Transmission" />
    <RefData refData={pcvMeta?.drive} title="Drive" />
    <RefData refData={pcvMeta?.paint} title="Paint" />
    <RefData refData={pcvMeta?.trimPack} title="Trim" />
  </div>
{/if}
