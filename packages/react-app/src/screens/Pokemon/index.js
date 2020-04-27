import React, { useState, useEffect } from "react";
import { Row, Col } from "react-grid-system";

import Loader from "../../components/Loader";
import Progress from "../../components/Progress";

import style from "./Pokemon.module.css";

import { types } from "../../core/constants";
import { getPokemon } from "../../services/pokemons";

const PokemonScreen = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const getData = async () => {
      setPokemon(await getPokemon(match.params.id));
      setTimeout(() => setLoading(false), 2000);
    };

    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={style.root}>
      <Row>
        <Col sm={12} lg={4}>
          <img
            className={style.img}
            alt={pokemon.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          />
          <section aria-label="Stats" style={{ marginTop: 16 }}>
            <h3>Stats</h3>
            {pokemon.stats.map((item, index) => (
              <Progress
                label={item.stat.name}
                value={item.base_stat}
                key={index}
              />
            ))}
          </section>
        </Col>
        <Col sm={12} lg={8}>
          <h1 className={style.title}>{pokemon.name}</h1>
          <section aria-label="Types" style={{ marginTop: 16 }}>
            <h3>Types</h3>
            <div aria-label="Types" role="list" className={style.types}>
              {pokemon.types.map(item => (
                <div
                  aria-label={item.type.name}
                  role="listitem"
                  className={style.type}
                  style={{ backgroundColor: types[item.slot - 1].color }}
                >
                  {item.type.name}
                </div>
              ))}
            </div>
          </section>
          <Row gutterWidth={24}>
            <Col sm={12} lg={6}>
              <section aria-label="Moves" style={{ marginTop: 16 }}>
                <h3>Moves</h3>
                <ul className={style.list}>
                  {pokemon.moves.map(item => (
                    <li>🐾 {item.move.name}</li>
                  ))}
                </ul>
              </section>
            </Col>
            <Col sm={12} lg={6}>
              <section aria-label="Games" style={{ marginTop: 16 }}>
                <h3>Games</h3>
                <ul className={style.list}>
                  {pokemon.game_indices.map(item => (
                    <li>🎮 {item.version.name}</li>
                  ))}
                </ul>
              </section>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PokemonScreen;
