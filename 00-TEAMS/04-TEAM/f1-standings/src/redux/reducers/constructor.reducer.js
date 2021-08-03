/* eslint-disable no-undef */
import actionType from '../actions/action.type';

export default function constructorReducer(constructorList = [], action) {
  let newConstructorList = constructorList;

  switch (action.type) {
    case actionType.LOAD_CONSTRUCTOR_STANDINGS:
      newConstructorList = action.constructors
        ?.map(({ ConstructorStandings }) => ConstructorStandings);
      break;
    default:
      break;
  }
  return newConstructorList;
}
