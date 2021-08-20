/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../redux/actions/actionCreator';
import Friend from '../components/Friend';
import Adversarie from '../components/Adversarie';
import './Home.scss';

export default function Home() {
  const user = useSelector((store) => store.user);
  console.log(user?.friends);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      <section className="Home__user-section">
        <article className="Home__user-article">
          <section className="Home__user-texts">
            <h2 className="Home__user-name">{user?.name}</h2>
            <p>{user?.greeting}</p>
          </section>
        </article>
      </section>
      <div className="home__user-card">

        <section className="home__user-details">
          <h3>
            Age
            <br />
            <span>{user?.age}</span>
          </h3>
          <h3>
            Eyes
            <br />
            <span>{user?.eyeColor}</span>
          </h3>
          <h3>
            Gender
            <br />
            <span>{user?.gender}</span>
          </h3>
          <h3>
            Fruit
            <br />
            <span>{user?.favoriteFruit}</span>
          </h3>
        </section>
        <section>
          <ul className="home__friends-container">
            {(user?.friends?.length > 0) && user.friends.slice(0, 5).map((friend) => (
              <Friend key={`friend_${friend._id._id}`} picture={friend?._id.picture} name={friend?._id.name} />
            ))}

          </ul>
        </section>
        <section>
          <ul className="home__adversaries-container">
            {(user?.adversaries?.length > 0) && user.adversaries.slice(0, 5).map((adversarie) => (
              <Adversarie key={`adversarie_${adversarie._id._id}`} picture={adversarie?._id.picture} name={adversarie?._id.name} />
            ))}

          </ul>
        </section>
      </div>

    </>
  );
}
