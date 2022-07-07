<script lang="ts">
  import Card from "@components/elements/Card.svelte";
  import type { PCV } from "src/types";

  export let pcvs: PCV[];
  let sql = "";

  $: {
    sql = generateSQL(pcvs);
  }

  function generateSQL(pcvs: PCV[]) {
    return pcvs.map(pcvToSQL).join("\n");
  }

  function pcvToSQL(pcv: PCV) {
    const description = buildDescription(pcv);
    return `insert vehicleModel (id, code, description,  series, body, model, modelYear, createdAt) 
    values ( newId(), '${pcv.pcvCode}', '${description}', '${pcv.series.name}', '${pcv.body}', '${pcv.model}', '${pcv.modelYear}', getDate()  );
    `.trim();
  }

  function buildDescription(pcv: PCV) {
    return `${pcv.engine.name}, ${pcv.transmission.name}, ${pcv.paint.name} `
  }
</script>

<Card>
  <div>Insert components SQL</div>
  <pre>
      {sql}
    </pre>
</Card>
