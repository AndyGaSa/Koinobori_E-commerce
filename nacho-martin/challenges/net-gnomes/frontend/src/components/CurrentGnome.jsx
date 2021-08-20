/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCurrentGnome, addRelated, removeRelated } from '../redux/actions/currentGnomeCreator';

import requestTypes from '../utils/requestTypes';

const {
  REMOVE_ADVERSARY,
  REMOVE_FRIEND,
  ADD_ADVERSARY,
  ADD_FRIEND
} = requestTypes;

export default function CurrentGnome() {
  const userGnome = useSelector(({ currentGnome }) => currentGnome);
  const gnomesList = useSelector(({ gnomes }) => gnomes);
  const dispatch = useDispatch();
  const { gnomeId } = useParams();
  const [filterValue, setFilterValue] = useState('');
  const [thisGnomes, setGnomes] = useState([]);

  useEffect(() => { (dispatch(loadCurrentGnome(gnomeId))); }, []);

  function filterGnomeList(inputValue) {
    const value = inputValue;
    let filteredGnomes = gnomesList;
    filteredGnomes = gnomesList.filter((gnome) => gnome.name.includes(inputValue));

    setFilterValue(value);
    if (value === '') {
      filteredGnomes = [];
    }
    setGnomes(filteredGnomes);
    return filteredGnomes;
  }

  return (
    <>
      <div>
        <input type="text" placeholder="Search for a neighbour..." value={filterValue} onChange={(event) => filterGnomeList(event.currentTarget.value)} />

        <ul>
          {thisGnomes.map((gnome) => (
            <li key={gnome._id}>
              {gnome.name}
              <button type="button" onClick={() => dispatch(addRelated(gnomeId, userGnome?.friends, gnome._id, ADD_FRIEND))}>Add friend</button>

              <button type="button" onClick={() => dispatch(addRelated(gnomeId, userGnome?.adversaries, gnome._id, ADD_ADVERSARY))}>Add adversary</button>
            </li>
          ))}
        </ul>

        <h3>Friends:</h3>
        <ul>
          {userGnome?.friends?.map((friend) => (
            <li key={friend._id}>
              { friend.name}
              <button type="button" onClick={() => dispatch(removeRelated(gnomeId, userGnome?.friends, friend._id, REMOVE_FRIEND))}>
                Remove friend
              </button>
            </li>
          ))}
        </ul>
        <h3>Adversaries:</h3>
        <ul>
          {userGnome?.adversaries?.map(
            (adversary) => (
              <li key={adversary._id}>
                { adversary.name}
                <button type="button" onClick={() => dispatch(removeRelated(gnomeId, userGnome?.adversaries, adversary._id, REMOVE_ADVERSARY))}>Remove adversary</button>
              </li>
            )
          )}
        </ul>

      </div>
    </>
  );
}
