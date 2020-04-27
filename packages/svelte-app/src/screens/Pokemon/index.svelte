<script>
  import { onMount } from "svelte";
  import Grid from "svelte-grid-responsive";
  import DocumentTitle from "svelte-document-title";

  import Loader from "../../components/Loader/index.svelte";
  import Progress from "../../components/Progress/index.svelte";

  import { types } from "../../core/constants";
  import { getPokemon } from "../../services/pokemons";

  export let id;

  let pokemon = [];
  let loading = true;

  onMount(() => {
    getData();
  });

  const getData = async () => {
    pokemon = await getPokemon(id);
    setTimeout(() => (loading = false), 2000);
  };
</script>

<style>
  .root {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    border-radius: 1px;
    display: flex;
    flex-direction: column;
    border: 10px solid #386aad;
    border-left: 10px solid #eeeeee;
    border-right: 10px solid #eeeeee;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  }

  .title {
    font-family: Pokemon;
    color: #386aad;
    font-size: 30pt;
    margin-bottom: 0;
    text-align: center;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    transform: rotate(0deg);
    transition: 0.8s ease-in-out;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  }

  .type {
    text-align: center;
    padding: 4px 10px;
    box-sizing: border-box;
    color: white;
    border-radius: 2px;
    margin-right: 10px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  ul {
    padding-left: 0px;
    max-height: 320px;
    overflow-y: scroll;
    list-style-type: none;
  }

  ul li {
    padding: 5px 10px;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }

  ul li:first-child {
    border-top: 1px solid #ccc;
  }

  .types {
    display: inline-flex;
  }
</style>

{#if loading}
  <Loader />
{:else}
  <DocumentTitle title={`${pokemon.name} Pokemon`}>
    <div class="root">
      <Grid container gutter={30}>
        <Grid sm={12} lg={4}>
          <img
            alt={pokemon.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
          <section aria-label="Stats">
            <h3>Stats</h3>
            {#each pokemon.stats as stat}
              <Progress label={stat.stat.name} value={stat.base_stat} />
            {/each}
          </section>
        </Grid>
        <Grid sm={12} lg={8}>
          <h1 class="title">{pokemon.name}</h1>
          <section aria-label="Types">
            <h3>Types</h3>
            <div aria-label="Stats" role="list" class="types">
              {#each pokemon.types as type}
                <div
                  aria-label={type.type.name}
                  role="listitem"
                  class="type"
                  style={`background-color: ${types[type.slot - 1].color}`}>
                  {type.type.name}
                </div>
              {/each}
            </div>
          </section>
          <Grid container gutter={24}>
            <Grid sm={12} lg={6}>
              <section aria-label="Moves">
                <h3>Moves</h3>
                <ul>
                  {#each pokemon.moves as move}
                    <li>🐾 {move.move.name}</li>
                  {/each}
                </ul>
              </section>
            </Grid>
            <Grid sm={12} lg={6}>
              <section aria-label="Games">
                <h3>Games</h3>
                <ul>
                  {#each pokemon.game_indices as game}
                    <li>🎮 {game.version.name}</li>
                  {/each}
                </ul>
              </section>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  </DocumentTitle>
{/if}
