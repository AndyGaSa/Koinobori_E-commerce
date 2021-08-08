import actionTypes from '../actions/comics.types';

export default function charactersReducer(characterList = [], action) {
  let newCharactersList = characterList;
  switch (action.type) {
    case actionTypes.LOAD_CHARACTERS:
      newCharactersList = action.characters.data.results?.map((character) => character);
      break;
    default:
      break;
  }
  return newCharactersList;
}
