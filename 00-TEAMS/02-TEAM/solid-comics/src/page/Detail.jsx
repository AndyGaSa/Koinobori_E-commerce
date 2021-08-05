/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './styles/Details.scss';

export default function Detail() {
  const comics = useSelector((store) => store.comics);

  const { comicId } = useParams();
  const [comic, setComic] = useState();

  useEffect(() => {
    if (comicId) {
      const currentComic = comics?.find((item) => +item.id === +comicId);

      setComic(currentComic);
    }
  }, [comicId]);

  return (
    <main className="details">
      <h2 className="detail__title">
        Title:

        {comic?.title}

      </h2>
      <div className="detail__top">
        <img data-testid="create-img" className="detail__img" src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`} alt="comic" />
        <section>
          <div className="detail__creators">
            <h3 className="detail__creator">
              Penciler:
              {comic?.creators.items[0].name}
            </h3>
            <h3 className="detail__creator">
              Writer:
              {comic?.creators.items[1].name}
            </h3>
            <h3 className="detail__creator">
              Colorist:
              {comic?.creators.items[3].name}
            </h3>
            <h3 className="detail__creator">
              Penciler:
              {comic?.creators.items[1].name}
            </h3>
            <h3 className="detail__creator">
              Editor:
              {comic?.creators.items[2].name}

            </h3>
          </div>
          <div />
        </section>
      </div>
      <div className="detail__bottom">
        <span>
          print price:
          {' '}
          {comic?.prices[0].price}

          $
        </span>
      </div>
    </main>
  );
}
