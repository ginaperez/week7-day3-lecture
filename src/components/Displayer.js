import React from 'react';
import hoc from './hoc'

function Displayer(props) {
    const mappedCards = props.data.map(card => {
        return <div>{card.name}</div>
    });
    return <div>{mappedCards}</div>
} 

export default hoc(Displayer, "https://api.pokemontcg.io/v1/cards")
