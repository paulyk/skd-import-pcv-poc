<script lang="ts">
import { parseRawPcvData } from "@lib/util/parsePcvData";
import type { PcvMetaData } from "src/types";



    let raw = ''
    let pcvMeta: PcvMetaData | null = null
    $: pcvMeta = parseRawPcvData(raw)
    
</script>

<h1>Import PCV</h1>

<form action="">
    <textarea bind:value={raw}></textarea>
</form>

<pre>
    {JSON.stringify(pcvMeta, null, 2)}
</pre>

