<script>
  import { Router, Link, Route } from "svelte-routing";

  import Header from "./components/Header/index.svelte";

  import List from "./screens/List/index.svelte";
</script>

<style>

</style>

<main>
  <Router>
    <Header />
    <Route path="/" component={List} />
  </Router>
</main>
