<template>
  <div>
    <Loader v-if="loading" />
    <vue-headful v-if="!loading" title="Pokédex" />
    <row :gutter="12" v-if="!loading">
      <column v-for="pokemon in pokemons" :key="pokemon.id" :xs="12" :sm="6" :lg="4">
        <CardPokemon :pokemon="pokemon" />
      </column>
    </row>
  </div>
</template>

<script>
import Loader from "../../components/Loader";
import CardPokemon from "../../containers/CardPokemon";
import { allPokemons } from "../../services/pokemons";

export default {
  name: "List",
  data() {
    return {
      pokemons: [],
      loading: true
    };
  },
  async mounted() {
    const data = await allPokemons(0);
    this.pokemons = [...this.pokemons, ...data.results];

    setTimeout(() => (this.loading = false), 2000);
  },
  components: {
    Loader,
    CardPokemon
  }
};
</script>