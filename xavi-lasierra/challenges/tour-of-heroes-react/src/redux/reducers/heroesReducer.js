import actionTypes from '../actions/action.types';
import heroesConst from '../../constants/heroes.const';

function heroesReducer(heroes = heroesConst, action) {
  let newHeroes = heroes;
  switch (action.type) {
    case actionTypes.CREATE_HERO:
      newHeroes = [...newHeroes, action.newHero];
      break;
    case actionTypes.DELETE_HERO:
      newHeroes = newHeroes.filter(({ id }) => id !== action.heroId);
      break;
    case actionTypes.UPDATE_HERO:

      newHeroes = newHeroes.map((hero) => (hero.id === action.updatedHero.id
        ? { ...hero, ...action.updatedHero } : hero));
      break;
    default:
      break;
  }
  return newHeroes;
}

export default heroesReducer;
