import React from "react";
import PropTypes from "prop-types";
import style from "./CardPokemon.module.css";

const CardPokemonContainer = ({ pokemon }) => (
  <div className={style.root}>
    <img
      className={style.img}
      alt={pokemon.name}
      src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
    />
    <p className={style.text}>{pokemon.name}</p>
  </div>
);

CardPokemonContainer.propTypes = {
  pokemon: PropTypes.object
};

export default CardPokemonContainer;
