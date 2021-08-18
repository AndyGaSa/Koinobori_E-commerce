/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';

import Navs from '../Navs/Navs';

import '../../styles/Adversaries.scss';

export default function Adversaries() {
  const user = useSelector(((store) => store.user));
  const persons = useSelector(((store) => store.persons));

  function loadPicture(adversarieId) {
    const adversarie = persons?.find((person) => person._id === adversarieId);
    return (
      <img src={adversarie.picture} alt={`${adversarie.name} portrait`} />
    );
  }

  return (
    <>
      <Navs />
      <section className="adversaries">
        <h2>Adversaries</h2>
        <ul className="adversaries__list">
          {
            (user.adversaries?.length <= 0)
              ? (
                <span className="adversaries__noAdversaries">
                  Forgive your enemies, but never forget their names.
                  <br />
                  <br />
                  <quote> - John F. Kennedy - </quote>
                </span>
              )
              : user.adversaries?.map((adversarie) => (
                <li key={adversarie.name}>
                  <span>{adversarie.name}</span>
                  {loadPicture(adversarie._id)}
                </li>
              ))
          }
        </ul>
      </section>
    </>
  );
}
