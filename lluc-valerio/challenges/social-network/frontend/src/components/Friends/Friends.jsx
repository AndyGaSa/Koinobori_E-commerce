import React from 'react';
import { useSelector } from 'react-redux';

import Navs from '../Navs/Navs';

export default function Friends() {
  const user = useSelector(((store) => store.user));
  return (
    <>
      <Navs />
      <section className="friends">
        <ul>
          {
            (user.friends?.length <= 0)
              ? <span>no friends</span>
              : user.friends?.map((friend) => (
                <li>
                  {friend.name}
                </li>
              ))
          }
        </ul>
      </section>
    </>
  );
}
