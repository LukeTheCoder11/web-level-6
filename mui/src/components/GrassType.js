import React, { useContext, useState } from 'react'
import { PokemonDataContext } from '../PokemonDataContext'
import PokemonCard from './PokemonCard'
import PokemonDetailsView from './PokemonDetailsView'
import './PokemonListView.css'

export const GrassType = () => {
    const allPokemons = useContext(PokemonDataContext);
    const grassTypePokemons = allPokemons.filter((pokemon) => {
        return pokemon.type[0].toLowerCase() === "grass";
    });

    const [isHidden, setIsHidden] = useState(true);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const handleClick = ({ pokemon }) => {
        setSelectedPokemon(pokemon);
        setIsHidden(false);
    }
    const handleClose = () => {
        setIsHidden(true);
    }

    return (
        <div className="pokedex-view">
            {
                grassTypePokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        onClick={() => handleClick({ pokemon })}
                    />
                ))
            }
            {selectedPokemon && <PokemonDetailsView selectedPokemon={selectedPokemon} isHidden={isHidden} handleClose={handleClose} />}
        </div>
    )
}





export default GrassType