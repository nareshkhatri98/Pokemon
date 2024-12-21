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
      <h1 className='text-center mt-10 text-3xl font-bold'>Welcome to Pokemon websites !</h1>


      <ul className='grid grid-cols-4 mt-10 '>
        {
          pokemon.map((currentPokemon)=>(
            <li>{currentPokemon.name}</li>
          ))
        }
      </ul>


    </div>
  )
}

export default Pokemon