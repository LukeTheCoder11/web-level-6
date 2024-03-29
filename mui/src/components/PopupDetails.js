import React from 'react'
import './Details.css'

const PopupDetails = ({ selectedPokemon }) => {
    const imgURL = selectedPokemon.img;
    return (
        <div className='details'>
            <img src={imgURL} className="pokemon-image" alt={selectedPokemon.name} />
            <h3>Short Decription: {selectedPokemon.name} is a great pokemon, you should defenantly look into it!</h3>
            <h3>Weight: {selectedPokemon.weight}</h3>
            <h3>Height: {selectedPokemon.height}</h3>
            <h4>Weaknesses:
                {
                    selectedPokemon.weaknesses.map((weakness, index) => (
                        <span key={index} className='weakness'>
                            {weakness}
                        </span>
                    ))
                }
            </h4>
        </div>
    )
}

export default PopupDetails