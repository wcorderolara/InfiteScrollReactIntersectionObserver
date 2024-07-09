/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";

const PAGE_SIZE = 12;

const fetchPokemonPage = async (offset = 0) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_SIZE}&offset=${offset}`
  );
  const data = await response.json();
  return data.results;
};

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const endOfPageRef = useRef(null);
  const intersectionCallback = useRef(null);

  const loadPokemons = async (offset = 0) => {
    setIsPending(true);
    const newPokemons = await fetchPokemonPage(offset);
    setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
    setIsPending(false);
  };

  useEffect(() => {
    const initialLoad = async () => {
      await loadPokemons();
    };
    initialLoad();
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const endOfPage = entries[0];
      if (endOfPage.isIntersecting && !isPending) {
        loadPokemons(pokemons.length);
      }
    };

    intersectionCallback.current = handleIntersection;

    const observer = new IntersectionObserver((entries) => {
      if (intersectionCallback.current) {
        intersectionCallback.current(entries);
      }
    });

    const currentRef = endOfPageRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isPending, pokemons.length, loadPokemons]);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "250px 250px 250px 250px",
          margin: "auto",
          maxWidth: "1000px",
        }}
      >
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.name}
            style={{
              border: "1px solid lightgray",
              padding: "5px",
              margin: "5px",
              textAlign: "center",
            }}
          >
            <h3>{pokemon.name}</h3>
            <img
              src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
              width="200px"
              alt={pokemon.name}
            />
          </div>
        ))}
      </div>
      {isPending && (
        <div style={{ textAlign: "center", margin: "10px" }}>Loading...</div>
      )}
      <div ref={endOfPageRef} style={{ height: "20px" }}></div>
    </div>
  );
}

export default App;
