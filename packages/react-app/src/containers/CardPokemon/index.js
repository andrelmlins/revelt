import React, { useState } from "react";
import PropTypes from "prop-types";

import style from "./CardPokemon.module.css";

import { IMAGE_ERROR } from "../../core/constants";

const CardPokemonContainer = ({ pokemon }) => {
  const [errorImage, setErrorImage] = useState(false);

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div className={style.root}>
      <img
        className={`${style.img} ${errorImage ? style.defaultImage : ""}`}
        alt={pokemon.name}
        onError={() => setErrorImage(true)}
        src={errorImage ? IMAGE_ERROR : imageUrl}
      />
      <p className={style.text}>{pokemon.name}</p>
    </div>
  );
};

CardPokemonContainer.propTypes = {
  pokemon: PropTypes.object
};

export default CardPokemonContainer;
