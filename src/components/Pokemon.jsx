import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; 

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";


  const fetchPokemonDetails = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const pokemonDetails = data.results.map(async (currentPokemon, index) => {
        const res = await fetch(currentPokemon.url);
        const data = await res.json();
        return { ...data, id: index + 1 }; // Attach an ID based on index
      });

      const results = await Promise.all(pokemonDetails);
      setPokemon(results);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {pokemon.map((currentPokemon, index) => (
          <Link
            to={`/pokemon/${currentPokemon.id}`}
            key={index}
            className="p-4 rounded-[10px] w-full bg-white hover:shadow-lg transition"
          >
            <div className='bg-white'>
              <img
                className="mx-auto bg-white w-[100px] h-[100px]"
                src={currentPokemon.sprites.front_default}
                alt={currentPokemon.name}
              />
              <h2 className="text-2xl font-semibold text-center bg-white">
                {currentPokemon.name}
              </h2>
              <p className="text-center bg-white">Height: {currentPokemon.height}</p>
              <p className="text-center bg-white">Weight: {currentPokemon.weight}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
