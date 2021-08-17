import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import icons from '../../utils/gnomesSocialIcons';

import './header.scss';

function Header() {
  return (
    <header>
      <FontAwesomeIcon icon={faBars} />
      <figure>
        <figcaption>home</figcaption>
        <img src={icons.blackIcon} alt="SocialGnomes" />
      </figure>
    </header>
  );
}

export default Header;
