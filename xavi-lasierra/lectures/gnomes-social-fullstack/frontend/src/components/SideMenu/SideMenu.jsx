import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

import './sideMenu.scss';

function SideMenu({ sideMenuClass }) {
  return (
    <aside className={`side-menu ${sideMenuClass}`}>
      <nav className="side-menu__navigator">
        <h2 className="side-menu__title">Search</h2>
        <label htmlFor="search">
          <input id="search" name="search" type="text" />
          <button type="button" label="Search"><FontAwesomeIcon icon={faSearch} /></button>
        </label>
      </nav>
      <ul>
        {}
      </ul>
    </aside>
  );
}

export default SideMenu;

SideMenu.propTypes = {
  sideMenuClass: propTypes.string.isRequired
};
