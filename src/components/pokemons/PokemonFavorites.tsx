import type { FavoritePokemon } from '@interfaces/pokemon-favorite.interface';
import React, { useState } from 'react'
import { FavoritePokemonCard } from './PokemonFavoriteCard';

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(localStorage.getItem('favorites') ?? '[]')
  return favoritePokemons;
}

export const PokemonFavorites = () => {

  const [pokemons, setPokemons] = useState(getLocalStoragePokemons())
  console.log('pokemons', pokemons)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4">
      {pokemons.map((pokemon, index) => (
        <FavoritePokemonCard pokemon={pokemon}/>
      ))}
    </div>
  )
}
