import React from "react";
import style from "./CardPokemon.module.css";

const CardPokemonContainer = () => (
  <div className={style.root}>
    <img
      className={style.img}
      alt="Pokemon"
      src="https://cdn.traction.one/pokedex/pokemon/1.png"
    />
    <p className={style.text}>Bulbasauru</p>
  </div>
);

export default CardPokemonContainer;
