import React from 'react';
import SideMenu from '../SideMenu/SideMenu';

import favourites from '../../mock/favourites.mock';

export default function Header() {
  return (
    <>
      <h1>Hello world</h1>
      <SideMenu favourites={favourites} />
    </>
  );
}
