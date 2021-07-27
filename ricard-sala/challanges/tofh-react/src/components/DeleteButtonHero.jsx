import React from 'react';
import heroesList from '../../assets/Heroes.const';

export default function deleteHero(){
    JSON.parse(localStorage.getItem(heroesList));
    const filterParameter = heroesList.id;
    const nonDeleteheroes=heroesList.filter((hero)=>hero.id!==filterParameter);
    localStorage.setItem('filteredHeroes',JSON.stringify(filteredHeroes));
    
    return(

    )
}
