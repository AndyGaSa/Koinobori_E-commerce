import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Adversaries from '../components/Adversaries';
import Friends from '../components/Friends';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      <section>
        <img src="https://i.ibb.co/744yHSp/confondopeque-o.png" alt="avatar" />
        <h3>Lola Rufino</h3>
        <p>Santa Cruz de Tenerife</p>
      </section>
      <section>
        <span>Greeting: Hello, Lola Rufino! You have 1 unread messages.</span>
        <span>Age: 30</span>
        <span>Eye color: Brown</span>
        <span>Gender: Female</span>
        <p>
          About: Sint Lorem sit aliquip do qui id reprehenderit
          laboris aliqua id cupidatat excepteur duis.
        </p>
        <span>Favorite fruit: Watermelon</span>
        <section>
          Friends:
          <Friends />
        </section>
        <section>
          Adversaries:
          <Adversaries />
        </section>
      </section>
    </>
  );
}
