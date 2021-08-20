/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import loadGnomos from '../redux/accions/actionCreator';
import './lista.css';

export default function Lista() {
  const gnomos = useSelector((store) => store.gnomos);

  const dispatch = useDispatch();

  const [searchGnomo, setSearchGnomo] = useState();

  useEffect(() => {
    dispatch(loadGnomos());
  }, []);

  useEffect(() => {
    setSearchGnomo(gnomos || []);
  }, [gnomos]);

  function filterGnomo(event) {
    if (!event) setSearchGnomo(gnomos);
    else {
      const newGnomos = gnomos.filter(({ name }) => {
        const searchValues = [name];
        return searchValues.toString().toLowerCase().includes(event.toLowerCase());
      });
      setSearchGnomo(newGnomos);
    }
  }
  return (
    <main>
      <form>
        <label>
          Name:
          <input type="search" name="name" onChange={(event) => filterGnomo(event.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {searchGnomo?.map((gnomo, index) => ((
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

      )))}
      :

    </main>
  );
}
