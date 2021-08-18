import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

import { getGnomeById, clearCurrentGnome } from '../../redux/actions/currentGnome.creator';
import icons from '../../utils/gnomesSocialIcons';

import './header.scss';

function Header({ sideMenuClass, setSideMenuClass, currentUserId }) {
  const dispatch = useDispatch();

  function openCloseNav() {
    return sideMenuClass.includes('closed')
      ? setSideMenuClass('')
      : setSideMenuClass('side-menu--closed');
  }

  function goProfile(id) {
    if (id) {
      dispatch(getGnomeById(id));
    } else {
      dispatch(clearCurrentGnome());
    }
  }

  return (
    <header>
      <button type="button" onClick={openCloseNav} label="Side Menu Button"><FontAwesomeIcon icon={faBars} /></button>
      <button type="button" onClick={() => goProfile(currentUserId)}>
        <figure>
          <figcaption>profile</figcaption>
          <img src={icons.blackIcon} alt="SocialGnomes" />
        </figure>
      </button>
    </header>
  );
}

export default Header;

Header.propTypes = {
  sideMenuClass: propTypes.string.isRequired,
  setSideMenuClass: propTypes.func.isRequired,
  currentUserId: propTypes.string.isRequired
};
