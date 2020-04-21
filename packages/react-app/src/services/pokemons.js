import axios from "axios";

export const URL = "https://pokeapi.co/api/v2";

export const allPokemons = async page => {
  const result = await axios.get(`${URL}/pokemon?offset=${page * 20}&limit=20`);

  return {
    ...result.data,
    results: result.data.results.map(item => {
      return {
        ...item,
        id: item.url
          .replace(URL, "")
          .replace("/pokemon/", "")
          .replace("/", "")
      };
    })
  };
};
