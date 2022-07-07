<script lang="ts">
  import type { PCV } from "src/types";
  import Card from "./Card.svelte";
  import Flex from "./Flex.svelte";

  export let pcv: Partial<PCV> = {};
</script>

<Card>
  <h2>PCV: {pcv.pcvCode}</h2>
  <Flex direction="column" style="gap: 0.5rem" >
    <Flex jusitfyContent="space-between">
      <div>Model</div>
      <div>{pcv.model}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Sub model</div>
      <div>{pcv.subModel}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Model Year</div>
      <div>{pcv.modelYear}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Series</div>
      <div>{pcv.series?.name}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Engine:</div>
      <div>{pcv.engine?.name}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Transmission:</div>
      <div>{pcv.transmission?.name}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Drive:</div>
      <div>{pcv.drive?.name}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Paint:</div>
      <div>{pcv.paint?.name}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Trim:</div>
      <div>{pcv.trimPack?.name}</div>
    </Flex>
    <Flex jusitfyContent="space-between">
      <div>Body:</div>
      <div>{pcv.body}</div>
    </Flex>
  </Flex>
</Card>
