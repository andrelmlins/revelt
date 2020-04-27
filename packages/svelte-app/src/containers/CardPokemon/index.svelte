<script>
  import Button from "../../components/Button/index.svelte";
  import { IMAGE_ERROR } from "../../core/constants";

  export let pokemon;

  let errorImage = false;

  $: imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
</script>

<style>
  .root {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    border-radius: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 10px solid #386aad;
    border-left: 10px solid #eeeeee;
    border-right: 10px solid #eeeeee;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  img {
    width: 100%;
    height: auto;
    transform: rotate(0deg);
    transition: 0.8s ease-in-out;
  }

  img:hover {
    transform: rotate(360deg);
  }

  p {
    font-family: Pokemon;
    color: #386aad;
    font-size: 25pt;
    margin: 0;
    margin-bottom: 15px;
  }

  .defaultImage:hover {
    transform: rotate(0deg);
  }
</style>

<div class="root">
  <img
    on:error={() => (errorImage = true)}
    alt={pokemon.name}
    src={errorImage ? IMAGE_ERROR : imageUrl}
    class={errorImage ? 'defaultImage' : ''} />
  <p>{pokemon.name}</p>
  <Button to={`pokemon/${pokemon.id}`}>view more...</Button>
</div>
