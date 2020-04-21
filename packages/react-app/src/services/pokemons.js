import axios from "axios";

export const URL = "https://pokeapi.co/api/v2";

export const allPokemons = async () => {
  const result = await axios.get(`${URL}/pokemon`);

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
