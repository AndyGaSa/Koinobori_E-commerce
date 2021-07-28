import actionTypes from '../actions/action.types';
import heroesConst from '../../constants/heroes.const';

function heroesReducer(heroes = heroesConst, action) {
  const newHeroes = heroes;
  switch (action.type) {
    case actionTypes.CREATE_HERO:
      break;
    case actionTypes.DELETE_HERO:
      break;
    case actionTypes.UPDATE_HERO:
      break;
    default:
      break;
  }
  return newHeroes;
}

export default heroesReducer;
