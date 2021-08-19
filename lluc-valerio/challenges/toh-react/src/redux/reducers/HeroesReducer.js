import actionTypes from '../actions/action.types';
import heroesMock from '../../constants/heroes.mock';

export default function heroesReducer(heroes = heroesMock, action) {
  let newState;

  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      newState = actionTypes.heroes;
      break;

    case actionTypes.ADD_HERO:
      newState = [...heroes, action.hero];
      break;

    case actionTypes.DELETE_HERO:
      newState = heroes.filter((hero) => hero.id !== action.heroId);
      break;

    case actionTypes.UPDATE_HERO:
      newState = heroes.map((hero) => ((hero.id === action.hero.id)
        ? {
          ...hero,
          ...action.hero
        }
        : hero));
      break;

    default:
      newState = heroes;
      break;
  }

  return newState;
}
