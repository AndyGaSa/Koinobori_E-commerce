import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Adversaries from '../components/Adversaries';
import Friends from '../components/Friends';
import { loadUsers, loadUser } from '../redux/actions/actionCreator';
import './Home.scss';

export default function Home() {
  const users = useSelector((store) => store.users);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <>
      <img className="main__user-image" src={user.picture} alt="avatar" />
      <section className="main__upper-user">
        <h2 className="upper-user__name">{user.name}</h2>
        <p className="upper-user__age">
          {user.age}
          {' '}
          years old
        </p>
      </section>
      <section className="main__down-user">
        <span className="down-user">{user.greeting}</span>
        <span className="down-user">
          Eye color:
          {' '}
          {user.eyeColor}
        </span>
        <span className="down-user">
          Gender:
          {' '}
          {user.gender}
        </span>
        <p>
          About me:
          {' '}
          {user.about}
        </p>
        <span>
          Favorite fruit:
          {' '}
          {user.favoriteFruit}
        </span>
        <div className="down-user__friendsadvcontainer">
          <section>
            Friends:
            {
          (users.length > 0)
          && users.slice(0, 5).map(
            (friend) => (
              <div className="name__button">
                <Friends key={friend.name} friendProp={friend.name} />
                <button className="down-user__button" type="button">-</button>
              </div>
            )
          )
          }
          </section>
          <section>
            Adversaries:
            {
          (users.length > 0)
          && users.slice(5, 9).map(
            (adversarie) => (
              <div className="name__button">
                <Adversaries key={adversarie.name} adversarieProp={adversarie.name} />
                <button type="button" className="down-user__button">+</button>
              </div>
            )
          )
          }
          </section>
        </div>
        <button type="button" className="down-user__allusers">All users</button>
      </section>
    </>
  );
}
