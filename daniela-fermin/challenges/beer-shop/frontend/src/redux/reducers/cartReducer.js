/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
import actionTypes from '../actions/actionTypes';

export default function cartReducer(userCart = [], action) {
  let newState = userCart;
  const { newBeer } = action;
  let updatedBeer;
  switch (action.type) {
    case actionTypes.PUT_IN_CART:
      if (userCart.some((currentBeer) => currentBeer?._id === newBeer?._id)) {
        newState = userCart.map((beerToChange) => {
          if (beerToChange?._id === newBeer?._id) {
            updatedBeer = { ...beerToChange, amount: beerToChange?.amount + 1 };
            return updatedBeer;
          }
          return beerToChange;
        });
      } else {
        newState = [...userCart, newBeer];
      }
      break;
    case actionTypes.DECREASE_AMOUNT:
      if (userCart.some((currentBeer) => currentBeer?._id === newBeer?._id)) {
        newState = userCart.map((beerToChange) => {
          if (beerToChange?._id === newBeer?._id) {
            updatedBeer = { ...beerToChange, amount: beerToChange?.amount - 1 };
            return updatedBeer;
          }
          return beerToChange;
        });
      }
      break;

    default:
      newState = userCart;
      break;
  }
  return newState;
}
