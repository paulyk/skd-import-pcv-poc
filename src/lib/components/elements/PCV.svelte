<script lang="ts">
  import type { PCV } from "src/types";
  import Card from "./Card.svelte";
  import Flex from "./Flex.svelte";

  export let pcv: Partial<PCV> = {};
</script>

<Card>
  <h2>PCV: {pcv.pcvCode}</h2>
  <div class="grid">
    <Flex jusitfyContent="space-between">
      <div>Model</div>
      <div>{pcv.model}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Model Year</div>
      <div>{pcv.modelYear}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Series</div>
      <div>{pcv.seriesCode}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Engine:</div>
      <div>{pcv.encineCode}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Transmission:</div>
      <div>{pcv.transmissionCode}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Drive:</div>
      <div>{pcv.driveCode}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Paint:</div>
      <div>{pcv.paintCode}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Trim:</div>
      <div>{pcv.trimPackCode}</div>
    </Flex>
  </div>
</Card>
