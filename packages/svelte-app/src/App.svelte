<script>
  import { Router, Link, Route } from "svelte-routing";

  import Header from "./components/Header/index.svelte";
  import Content from "./components/Content/index.svelte";

  import List from "./screens/List/index.svelte";
</script>

<style>

</style>

<main>
  <Router basepath="/svelte">
    <Header />
    <Content>
      <Route path="/" component={List} />
    </Content>
  </Router>
</main>
