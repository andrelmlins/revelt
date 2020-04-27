import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Row, Col } from "react-grid-system";

import Loader from "../../components/Loader";

import CardPokemon from "../../containers/CardPokemon";

import { allPokemons } from "../../services/pokemons";

const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await allPokemons(0);

      setPokemons(pokemons => [...pokemons, ...data.results]);
      setHasMore(!!data.next);
      setTimeout(() => setLoading(false), 2000);
    };

    getData();
  }, []);

  const getMore = async page => {
    const data = await allPokemons(page);

    setPokemons([...pokemons, ...data.results]);
    setHasMore(!!data.next);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <InfiniteScroll pageStart={0} loadMore={getMore} hasMore={hasMore}>
      <Row gutterWidth={12}>
        {pokemons.map(item => (
          <Col key={item.id} xs={12} sm={6} lg={4} style={{ marginBottom: 12 }}>
            <CardPokemon pokemon={item} />
          </Col>
        ))}
      </Row>
    </InfiniteScroll>
  );
};

export default ListScreen;
