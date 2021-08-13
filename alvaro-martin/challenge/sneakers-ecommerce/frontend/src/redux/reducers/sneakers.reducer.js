import actionTypes from '../actions/sneakers.types';

export default function sneakersReducer(sneakersList = [], action) {
  let newSneakersList = sneakersList;
  switch (action.type) {
    case actionTypes.LOAD_SNEAKERS:
      newSneakersList = action.sneakers?.map(({ name }) => name);
      break;

    default:
      break;
  }

  return newSneakersList;
}
