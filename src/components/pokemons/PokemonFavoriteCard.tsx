import type { FavoritePokemon } from '@interfaces/pokemon-favorite.interface';
import { useState } from 'react';

interface Props {
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard = ({ pokemon }: Props) => {
    const [isVisible, setIsVisible] = useState(true);

    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deleteFavorite = () => {
        const favorites = JSON.parse(
            localStorage.getItem('favorites') ?? '[]'
        ) as FavoritePokemon[];

        const newFavorites = favorites.filter((p) => p.id !== pokemon.id);

        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        setIsVisible(false);
    };


    if (!isVisible) {
        return null;
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <a href={`/pokemons/${pokemon.name}`}>
                <img
                    src={imageSrc}
                    alt={pokemon.name}
                    width="96"
                    height="96"
                    style={{ viewTransitionName: `${pokemon.name}-image` }}
                />
                <p className="capitalize">
                    #{pokemon.id} {pokemon.name}
                </p>
            </a>
            <button onClick={deleteFavorite} className="text-red-400">
                Borrar
            </button>
        </div>
    );
};