<template>
  <div>
    <CardPokemon :pokemon="pokemon" />
  </div>
</template>

<script>
import Loader from "../../components/Loader";
import CardPokemon from "../../containers/CardPokemon";

export default {
  name: "List",
  data() {
    return {
      pokemon: {
        id: 1,
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/"
      }
    };
  },
  components: {
    Loader,
    CardPokemon
  }
};
</script>
