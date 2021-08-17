import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

import icons from '../../utils/gnomesSocialIcons';

import './header.scss';

function Header({ sideMenuClass, setSideMenuClass }) {
  function openCloseNav() {
    return sideMenuClass.includes('closed')
      ? setSideMenuClass('')
      : setSideMenuClass('side-menu--closed');
  }

  return (
    <header>
      <button type="button" onClick={openCloseNav} label="Side Menu Button"><FontAwesomeIcon icon={faBars} /></button>
      <figure>
        <figcaption>profile</figcaption>
        <img src={icons.blackIcon} alt="SocialGnomes" />
      </figure>
    </header>
  );
}

export default Header;

Header.propTypes = {
  sideMenuClass: propTypes.string.isRequired,
  setSideMenuClass: propTypes.func.isRequired
};
