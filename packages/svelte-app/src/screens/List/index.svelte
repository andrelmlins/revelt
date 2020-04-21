<script>
  import { onMount } from "svelte";
  import SvelteInfiniteScroll from "svelte-infinite-scroll";
  import Grid from "svelte-grid-responsive";

  import CardPokemon from "../../containers/CardPokemon/index.svelte";
  import Loader from "../../components/Loader/index.svelte";

  import { allPokemons } from "../../services/pokemons";

  let pokemons = [];
  let hasMore = false;
  let page = -1;
  let loading = true;

  onMount(() => {
    getData();
  });

  const getData = async () => {
    page++;

    const data = await allPokemons(page);
    pokemons = [...pokemons, ...data.results];
    hasMore = !!data.next;

    setTimeout(() => (loading = false), 2000);
  };
</script>

{#if loading}
  <Loader />
{:else}
  <Grid container gutter={12}>
    {#each pokemons as pokemon}
      <Grid xs={12} sm={6} lg={4}>
        <CardPokemon {pokemon} />
      </Grid>
    {/each}
  </Grid>
{/if}

<SvelteInfiniteScroll
  {hasMore}
  threshold={200}
  window
  on:loadMore={() => getData()} />
