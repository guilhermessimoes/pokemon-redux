import "./App.css";
import { useEffect, useState } from "react";

import { selectRandomGen1 } from "./api";

const App = () => {
  const [pokemon, setPokemon] = useState();
  const fetchPokemon = async () => {
    const response = await selectRandomGen1();
    const pokemon = response.data;

    setPokemon(pokemon);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      {pokemon && (
        <img style={{ width: "30%" }} src={pokemon.sprites.front_default} />
      )}
      <header className="App-header" />
    </div>
  );
};

export default App;
