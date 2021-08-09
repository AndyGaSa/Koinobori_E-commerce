import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './userSelection.scss';

export default function UserSelection({ comicId }) {
  const { user } = useAuth0();
  const { email } = user;

  let userData = JSON.parse(localStorage.getItem(email));
  let actualItem = userData?.find((item) => +item.id === +comicId);

  const [wantItState, setWantItState] = useState();
  const [haveItState, setHaveItState] = useState();
  const [favoriteState, setFavoriteState] = useState();
  const [disLikeItState, setDisLikeItState] = useState();

  function updateComicInfo() {
    if (!actualItem) {
      actualItem = {
        id: comicId,
        wanted: false,
        haveIt: false,
        favs: false,
        disLike: false
      };
      if (!userData) {
        userData = [];
      }
      userData.push(actualItem);
      localStorage.setItem(email, JSON.stringify(userData));
    }

    if (userData.length && actualItem) {
      setWantItState((actualItem.wanted) ? ('value') : ('noValue'));
      setHaveItState((actualItem.haveIt) ? ('value') : ('noValue'));
      setFavoriteState((actualItem.favs) ? ('value') : ('noValue'));
      setDisLikeItState((actualItem.disLike) ? ('value') : ('noValue'));
    } else {
      throw new Error('A problem has occurred while managing data with the storage.');
    }
  }

  function updateItemStatus(itemOption) {
    userData.forEach((item) => {
      if (+item.id === +comicId) {
        actualItem[itemOption] = !actualItem[itemOption];
      }
    });
    localStorage.setItem(email, JSON.stringify(userData));
    updateComicInfo();
  }

  useEffect(() => {
    updateComicInfo();
  }, []);

  return (
    <aside className="userSelection">
      <button onClick={() => updateItemStatus('wanted')} data-testid={`wantIt ${wantItState}`} className={`userSelection__image wantIt ${wantItState}`} type="button" src="https://i.ibb.co/XjvJdyG/Illustration-of-star-icon.jpg" alt="I Want It" />
      <button onClick={() => updateItemStatus('haveIt')} className={`userSelection__image haveIt ${haveItState}`} type="button" src="https://i.ibb.co/9HM9jqB/wantIt.jpg" alt="I Have It" />
      <button onClick={() => updateItemStatus('favs')} className={`userSelection__image favorite ${favoriteState}`} type="button" src="https://i.ibb.co/MPvDxR0/haveIt.png" alt="Favorite" />
      <button onClick={() => updateItemStatus('disLike')} className={`userSelection__image disLike ${disLikeItState}`} type="button" src="https://i.ibb.co/9wV8dc3/dislike.png" alt="dislike" />
    </aside>
  );
}
