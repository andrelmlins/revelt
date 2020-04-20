<script>
  import { onMount } from "svelte";
  import Grid from "svelte-grid-responsive";
  import CardPokemon from "../../containers/CardPokemon/index.svelte";
  import { allPokemons } from "../../services/pokemons";

  let pokemons = [];

  onMount(async () => {
    const data = await allPokemons();
    pokemons = data.results;
  });
</script>

<Grid container gutter={12}>
  {#each pokemons as pokemon}
    <Grid xs={12} sm={6} lg={4}>
      <CardPokemon {pokemon} />
    </Grid>
  {/each}
</Grid>
