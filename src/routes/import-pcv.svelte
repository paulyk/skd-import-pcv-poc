<script lang="ts">
  import RefData from "@components/elements/RefData.svelte";
  import ImportPcv from "@components/objects/ImportPCV.svelte";
  import type { PcvMetaData } from "src/types";

  let pcvMeta: PcvMetaData | null = null;
</script>

<h1>Import PCV</h1>

<ImportPcv bind:value={pcvMeta} />

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
