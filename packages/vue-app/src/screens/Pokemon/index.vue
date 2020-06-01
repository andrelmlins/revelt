<template>
  <div>
    <Loader v-if="loading" />
    <vue-headful v-if="!loading" :title="pokemon.name+' Pokemon'" />
    <div v-if="!loading" class="root">
      <row :gutter="30">
        <column :sm="12" :lg="4">
          <img
            :alt="pokemon.name"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
          />
          <section aria-label="Stats">
            <h3>Stats</h3>
            <Progress
              v-for="stat in pokemon.stats"
              :key="stat.stat.name"
              :label="stat.stat.name"
              :value="stat.base_stat"
            />
          </section>
        </column>
        <column :sm="12" :lg="8">
          <h1 class="title">{{pokemon.name}}</h1>
          <section aria-label="Types">
            <h3>Types</h3>
            <div aria-label="Stats" role="list" class="types">
              <div
                v-for="type in pokemon.types"
                :key="type.slot"
                :aria-label="type.type.name"
                role="listitem"
                class="type"
                :style="`background-color: ${types[type.slot - 1].color}`"
              >{{type.type.name}}</div>
            </div>
          </section>
          <row :gutter="24">
            <column :sm="12" :lg="6">
              <section aria-label="Moves">
                <h3>Moves</h3>
                <ul>
                  <li v-for="move in pokemon.moves" :key="move.move.url">🐾 {{move.move.name}}</li>
                </ul>
              </section>
            </column>
            <column :sm="12" :lg="6">
              <section aria-label="Games">
                <h3>Games</h3>
                <ul>
                  <li
                    v-for="game in pokemon.game_indices"
                    :key="game.game_index"
                  >🎮 {{game.version.name}}</li>
                </ul>
              </section>
            </column>
          </row>
        </column>
      </row>
    </div>
  </div>
</template>

<script>
import Loader from "../../components/Loader";
import Progress from "../../components/Progress";

import { types } from "../../core/constants";
import { getPokemon } from "../../services/pokemons";

export default {
  data() {
    return {
      pokemon: null,
      loading: true,
      types
    };
  },
  async mounted() {
    this.pokemon = await getPokemon(this.$router.history.current.params.id);
    setTimeout(() => (this.loading = false), 2000);
  },
  components: {
    Loader,
    Progress
  }
};
</script>

<style scoped>
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
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
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
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
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
