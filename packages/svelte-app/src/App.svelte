<script>
  import { Router, Link, Route } from "svelte-routing";

  import Header from "./components/Header/index.svelte";
  import Content from "./components/Content/index.svelte";

  import ListScreen from "./screens/List/index.svelte";
  import PokemonScreen from "./screens/Pokemon/index.svelte";
</script>

<main>
  <Router basepath="/svelte/">
    <Header />
    <Content>
      <Route path="/" component={ListScreen} />
      <Route path="/pokemon/:id" component={PokemonScreen} />
    </Content>
  </Router>
</main>
