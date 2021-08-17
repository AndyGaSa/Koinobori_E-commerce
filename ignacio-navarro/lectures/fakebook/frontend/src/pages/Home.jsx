import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Friend from '../components/Friend';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      <section>
        <figure>
          <img src="https://i.ibb.co/xX74Xpf/lola.png" alt="lola" border="0" />
          <figcaption>Lola Rufino</figcaption>
          <span>Muyaya</span>
        </figure>
      </section>
      <section className="home__friends-container">
        <ul>
          <Friend />
          <Friend />
          <Friend />

        </ul>
      </section>
      <section className="home__adversaries-container">
        <ul>
          <div>adversarie 1</div>
          <div>adversarie 2</div>
          <div>adversarie 3</div>
        </ul>
      </section>
    </>
  );
}
