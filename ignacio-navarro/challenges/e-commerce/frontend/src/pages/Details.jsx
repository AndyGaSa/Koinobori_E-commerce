import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadOneBeer } from '../redux/actions/actionCreator';
import './Details.scss';

export default function Details() {
  const selectedBeer = useSelector((store) => store.oneBeer);
  const dispatch = useDispatch();
  const { beerId } = useParams();
  useEffect(() => {
    dispatch(loadOneBeer(beerId));
  }, []);
  return (
    <main>
      <h2>{selectedBeer.name}</h2>
      <div className="details__main-container">
        <img className="details__image" src={selectedBeer.image_url} alt="" />
        <section>
          <h2>
            Atenuation level:
            <span label="atenuation">{selectedBeer.atenuation_level}</span>
          </h2>
          <h2>
            abv:
            <span label="abv">{selectedBeer.abv}</span>
          </h2>
          <h2>
            Tips:
            <p>{selectedBeer.brewers_tips}</p>
          </h2>
        </section>
      </div>
      <div className="details__description">
        <h3>{selectedBeer.tagline}</h3>
        <p>
          {selectedBeer.description}

        </p>
      </div>
    </main>
  );
}
