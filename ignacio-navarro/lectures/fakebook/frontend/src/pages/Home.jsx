/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFriends, loadUser, loadAdversaries } from '../redux/actions/actionCreator';
import Friend from '../components/Friend';
import Adversarie from '../components/Adversarie';
import './Home.css';

export default function Home() {
  const friends = useSelector((store) => store.friends);
  const adversaries = useSelector((store) => store.adversaries);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAdversaries());
  }, []);
  useEffect(() => {
    dispatch(loadFriends());
  }, []);
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      <section className="Home__user-section">
        <article className="Home__user-article">
          <img className="Home__user-picture" src={user?.picture} alt="lola" border="0" />
          <section className="Home__user-texts">
            <h2 className="Home__user-name">{user?.name}</h2>
            <span>{user?.age}</span>
            <p>{user?.about}</p>
          </section>
        </article>
      </section>
      <section>
        <ul className="home__friends-container">
          {(friends.length > 0) && friends.slice(0, 5).map((friend) => (
            <Friend key={`friend_${user._id}`} friendData={friend} />
          ))}

        </ul>
      </section>
      <section>
        <ul className="home__adversaries-container">
          {(adversaries.length > 0) && adversaries.slice(0, 5).map((adversarie) => (
            <Adversarie key={`adversarie_${user._id}`} adversarieData={adversarie} />
          ))}

        </ul>
      </section>
    </>
  );
}
