import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PokemonDetails = () => {
  const { id } = useParams(); // Fetch the dynamic `id` from the URL
  const [pokemon, setPokemon] = useState(null);
  const API = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const fetchPokemonData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, [id]); // Re-run if `id` changes

  if (!pokemon) {
    return <div>Loading Pokémon details...</div>;
  }

  return (
    <div className="container mx-auto mt-20 text-center">
      <h1 className="text-4xl font-bold">{pokemon.name}</h1>
      <img
        className="mx-auto mt-4 w-[200px] h-[200px]"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p className="text-xl mt-4">Height: {pokemon.height}</p>
      <p className="text-xl">Weight: {pokemon.weight}</p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Abilities:</h2>
        <ul className="list-disc list-inside">
          {pokemon.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;
