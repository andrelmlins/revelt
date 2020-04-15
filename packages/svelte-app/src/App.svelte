<script>
  import { Router, Link, Route } from "svelte-routing";

  import List from "./screens/List/index.svelte";
</script>

<style>

</style>

<main>
  <Router>
    <div>
      <Route path="/" component={List} />
    </div>
  </Router>
</main>
