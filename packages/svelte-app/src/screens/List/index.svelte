<script>
  import { onMount } from "svelte";
  import SvelteInfiniteScroll from "svelte-infinite-scroll";
  import Grid from "svelte-grid-responsive";

  import CardPokemon from "../../containers/CardPokemon/index.svelte";

  import { allPokemons } from "../../services/pokemons";

  let pokemons = [];
  let hasMore = false;
  let page = -1;

  onMount(() => {
    getData();
  });

  const getData = async () => {
    page++;

    const data = await allPokemons(page);
    pokemons = [...pokemons, ...data.results];
    hasMore = !!data.next;
  };
</script>

<Grid container gutter={12}>
  {#each pokemons as pokemon}
    <Grid xs={12} sm={6} lg={4}>
      <CardPokemon {pokemon} />
    </Grid>
  {/each}
</Grid>

<SvelteInfiniteScroll
  {hasMore}
  threshold={200}
  window
  on:loadMore={() => getData()} />
