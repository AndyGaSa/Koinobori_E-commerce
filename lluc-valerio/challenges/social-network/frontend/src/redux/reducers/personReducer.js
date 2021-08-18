import actionTypes from '../actions/actionTypes';

export default function personReducer(persons = [], action) {
  let newPersons = [];

  if (action.type === actionTypes.LOAD_PERSONS) {
    newPersons = action.data;
  } else {
    newPersons = persons;
  }

  return newPersons;
}
