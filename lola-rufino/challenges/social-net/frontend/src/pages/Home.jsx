import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Adversaries from '../components/Adversaries';
import Friends from '../components/Friends';
import { loadUsers, loadUser } from '../redux/actions/actionCreator';

export default function Home() {
  const users = useSelector((store) => store.users);
  const user = useSelector((store) => store.user);
  console.log(users);
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <>
      <section>
        <img src={user.picture} alt="avatar" />
        <h3>{user.name}</h3>
        <p>{user.age}</p>
      </section>
      <section>
        <span>{user.greeting}</span>
        <span>{user.eyeColor}</span>
        <span>{user.gender}</span>
        <p>
          About: Sint Lorem sit aliquip do qui id reprehenderit
          laboris aliqua id cupidatat excepteur duis.
        </p>
        <span>Favorite fruit: Watermelon</span>
        <section>
          Friends:
          { users
          && users?.map((friend) => (<Friends friendProp={friend} />))}
        </section>
        <section>
          Adversaries:
          <Adversaries />
        </section>
      </section>
    </>
  );
}
