/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import loadGnomos from '../redux/accions/actionCreator';
import Header from './Header';
import './lista.css';

export default function Lista() {
  const dispatch = useDispatch();
  const [searchGnomo, setSearchGnomo] = useState();

  useEffect(() => {
    dispatch(loadGnomos());
  }, []);

  return (

    <div>
      <Header setSearchGnomo={setSearchGnomo} />

      {
      searchGnomo?.map((gnomo, index) => ((
        <div className={`container ${index % 2 === 0 ? 'rowreverse--container' : 'reverse--container'}`}>
          <Link to={`/details/${gnomo._id}`}>
            <div className="container__image">
              <img className="image__gnomo" src={gnomo?.image} alt="" />
            </div>
          </Link>

          <div className="container__feature">
            <p>{gnomo.name}</p>
            <p>{gnomo.age}</p>
            <p>{gnomo.gender}</p>
            <p>{gnomo.about}</p>
          </div>
        </div>
      )))
}
    </div>
  );
}
