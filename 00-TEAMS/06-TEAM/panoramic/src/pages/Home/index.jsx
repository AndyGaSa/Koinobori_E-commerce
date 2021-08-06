import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import BannerLanding from '../../components/BannerLanding';
import SearchArtists from '../../components/SearchArtists';
import SuggestedArtist from '../../components/SuggestedArtist';
import Profile from '../Profile';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import LoginButton from '../../components/LoginButton/LoginButton';

export default function Home() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <BannerLanding />
      <header>
        <h1>ToDo List</h1>
        { isAuthenticated
          ? <LogoutButton />
          : <LoginButton />}
        <hr />
        <Profile />
      </header>
      <SuggestedArtist />
      <SearchArtists />
    </>
  );
}
