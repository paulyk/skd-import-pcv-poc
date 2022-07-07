<script lang="ts">
  import Card from "@components/elements/Card.svelte";
  import type { CodeName } from "src/types";
  export let components: CodeName[];

  let sql = components.map(to_sql).join("\n");
  function to_sql(input: CodeName) {
    const r = `insert component (id, code, [name], dcwsRequired, createdAt) values( newid(),'${input.code}', '${input.name}' , 1,  getDate() );`;
    return r;
  }
</script>

<Card>
  <div>Insert components SQL</div>
  <pre>
    {sql}
</pre>
</Card>
