/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

import { findGnomes } from '../../redux/actions/gnomes.creator';

import { getGnomeById } from '../../redux/actions/currentGnome.creator';

import './sideMenu.scss';

function SideMenu({ sideMenuClass, setSideMenuClass }) {
  const dispatch = useDispatch();
  const foundGnomes = useSelector(({ gnomes }) => gnomes);
  const [gnomeSearch, setGnomeSearch] = useState('');

  function loadGnomes(filter) {
    if (filter.trim()) {
      dispatch(findGnomes(filter.trim()));
    }
  }

  function openGnome(id) {
    dispatch(getGnomeById(id));
    setSideMenuClass('side-menu--closed');
  }

  return (
    <aside className={`side-menu ${sideMenuClass}`}>
      <nav className="side-menu__navigator">
        <h2 className="side-menu__title">Search</h2>
        <label htmlFor="search">
          <input id="search" name="search" type="text" value={gnomeSearch} onChange={({ target: { value } }) => { setGnomeSearch(value); }} />
          <button type="button" label="Search" onClick={() => loadGnomes(gnomeSearch)}><FontAwesomeIcon icon={faSearch} /></button>
        </label>
      </nav>
      <ul className="side-menu__gnomes">
        {foundGnomes.map((gnome) => <li><button type="button" onClick={() => openGnome(gnome._id)}>{gnome.name}</button></li>)}
      </ul>
    </aside>
  );
}

export default SideMenu;

SideMenu.propTypes = {
  sideMenuClass: propTypes.string.isRequired,
  setSideMenuClass: propTypes.func.isRequired
};
