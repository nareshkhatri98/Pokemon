import React, { useEffect, useState } from 'react'


const Pokemon = () => {

const [pokemon , setPokemon] =  useState([]);
const  API = "https://pokeapi.co/api/v2/pokemon?limit=124";

const fetchPokemonDetails = async () => {
  try {
    const res = await fetch(API);
    const data = await res.json();
    // console.log(data);
    console.log("Hello");

    const pokemonDetails = data.results.map(async( currentPokemon)=>{
      const res = await fetch(currentPokemon.url);
      const data = await res.json();
      // console.log(data);
      return data;

    })
    // console.log(pokemonDetails);
    const results = await Promise.all(pokemonDetails);
    console.log(results);
    setPokemon(results);
    
  } catch (error) {
    console.error(error);
    
  }
  

}

  useEffect(() => {
    fetchPokemonDetails();
  }, [])

  return (
    <div className='container mx-auto'>
      <h1 className='text-center p-10 font-semibold text-3xl'>Welcome to Pokemon Website..</h1>

      {/* for card */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {pokemon.map((currentPokemon, index) => {
          return (
            <div key={index} className='bg-gray-100 p-4 rounded-lg shadow-lg'>
              <img className='mx-auto' src={currentPokemon.sprites.front_default} alt={currentPokemon.name} />
              <h2 className='text-2xl font-semibold text-center'>{currentPokemon.name}</h2>
              <p className='text-center'>Height: {currentPokemon.height}</p>
              <p className='text-center'>Weight: {currentPokemon.weight}</p>
            </div>
          )
        })}
        </div>


</div>
  )
}

export default Pokemon