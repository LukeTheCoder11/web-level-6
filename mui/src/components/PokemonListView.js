import React, { useContext, useState } from 'react'
import { PokemonDataContext } from '../PokemonDataContext'
import { useFavorites } from '../FavoritesContext'
import PokemonCardMUI from './PokemonCardMUI'
import PokemonDetailsView from './PokemonDetailsView'
import './PokemonListView.css'

const PokemonListView = () => {
    const pokemonList = useContext(PokemonDataContext);
    const [isHidden, setIsHidden] = useState(true);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const { manageFavorite, isFavorite } = useFavorites();

    const handleClick = ({ pokemon }) => {
        setSelectedPokemon(pokemon);
        setIsHidden(false);
    }
    const handleClose = () => {
        setIsHidden(true);
    }

    const handleFavoriteClick = (pokemon) => {
        manageFavorite(pokemon);
        const favoritestatus = isFavorite(pokemon) ? "Removed from favorites!" : "Added to favorites!"
    }

    return (
        <div className="pokedex-view">
            {
                pokemonList?.map((pokemon) => (
                    <PokemonCardMUI
                        key={pokemon.id}
                        pokemon={pokemon}
                        onClick={() => handleClick({ pokemon })}
                        onFavoriteClick={() => handleFavoriteClick({pokemon})}
                    />
                ))
            }
            {selectedPokemon && <PokemonDetailsView selectedPokemon={selectedPokemon} isHidden={isHidden} handleClose={handleClose} />}
        </div>
    )
}

export default PokemonListView