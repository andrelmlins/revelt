import React, { useEffect, useState } from "react";
import { Row, Col } from "react-grid-system";
import { allPokemons } from "../../services/pokemons";

import CardPokemon from "../../containers/CardPokemon";

const ListScreen = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await allPokemons();

      setPokemons(data.results);
    };

    getData();
  }, []);

  return (
    <Row gutterWidth={12}>
      {pokemons.map(item => (
        <Col key={item.id} xs={12} sm={6} lg={4} style={{ marginBottom: 12 }}>
          <CardPokemon pokemon={item} />
        </Col>
      ))}
    </Row>
  );
};

export default ListScreen;
