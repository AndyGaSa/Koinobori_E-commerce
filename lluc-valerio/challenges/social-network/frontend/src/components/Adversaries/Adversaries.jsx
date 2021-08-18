import React from 'react';
import { useSelector } from 'react-redux';

import Navs from '../Navs/Navs';

export default function Adversaries() {
  const user = useSelector(((store) => store.user));
  return (
    <>
      <Navs />
      <section className="adversaries">
        <ul>
          {
            (user.adversaries?.length <= 0)
              ? <span>no adversaries</span>
              : user.adversaries?.map((adversarie) => (
                <li>
                  {adversarie.name}
                </li>
              ))
          }
        </ul>
      </section>
    </>
  );
}
