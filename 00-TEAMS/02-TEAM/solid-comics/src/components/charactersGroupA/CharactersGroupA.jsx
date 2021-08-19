import React from 'react';

import './CharactersGroup.scss';

import { useSelector } from 'react-redux';
import CharacterCard from '../characterCard/CharacterCard';

export default function CharactersGroupA() {
  const characters = useSelector((store) => store.characters);
  const cleanCharacter = characters.filter((character) => character.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available');

  return (
    <>
      <div className="group__row" data-testid="characters-container">

        {
            cleanCharacter.map((
              character
            ) => <CharacterCard character={character} key={character.id} />)
            }
      </div>
    </>
  );
}
