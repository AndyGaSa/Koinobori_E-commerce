import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadUser from '../../redux/actions/actionCreators';
import './dashboard.scss';

export default function Dashboard() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      <main className="user">
        <header>friendsbook</header>
        <div className="user__img-container">
          <img className="img" src={users[1]?.picture} alt="profile" />
        </div>
        <div className="container">
          <img className="container__nav" alt="menu-nav" src="https://img.icons8.com/ios-glyphs/30/ffffff/menu--v1.png" />
        </div>
      </main>
      <section className="basic__info">
        <span className="info__name">
          {users[1]?.name}
        </span>
        <span className="info__gender">{users[1]?.gender}</span>
      </section>
      <div className="info__container">
        <span className="info__about">{users[1]?.about}</span>
      </div>
      <div className="friends__button__container">
        <button
          className="friends__button"
          data-testid="create-button"
          type="button"
        >
          friends
        </button>
      </div>
    </>
  );
}
