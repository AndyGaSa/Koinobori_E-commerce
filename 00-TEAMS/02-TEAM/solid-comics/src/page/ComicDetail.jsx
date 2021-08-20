import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserSelection from '../components/user-selection/UserSelection';

import './styles/ComicDetail.scss';

export default function Detail() {
  const comics = useSelector((store) => store.comics);

  const { comicId } = useParams();
  const [comic, setComic] = useState();

  useEffect(() => {
    const currentComic = comicId && comics?.find((item) => +item.id === +comicId);

    setComic(currentComic);
  }, [comicId]);

  return (
    <main className="comic__details">
      <h2 className="comic__detail-title">
        Title:

        {comic?.title}

      </h2>
      <div className="comic__detail-top">
        <img data-testid="create-img" className="comic__detail-img" src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`} alt="comic" />
        <section>
          <UserSelection comicId={comicId} />
          <div className="comic__detail-creators" data-testid={`list-item-${comic?.id}`}>
            <h3 className="comic__detail-creator">
              Penciler:
              {comic?.creators?.items[0]?.name}
            </h3>
            <h3 className="comic__detail-creator">
              Writer:
              {comic?.creators?.items[1]?.name}
            </h3>
            <h3 className="comic__detail-creator">
              Colorist:
              {comic?.creators?.items[3]?.name}
            </h3>
            <h3 className="comic__detail-creator">
              Penciler:
              {comic?.creators?.items[1]?.name}
            </h3>
            <h3 className="comic__detail-creator">
              Editor:
              {comic?.creators?.items[2]?.name}

            </h3>
          </div>
          <div />
        </section>
      </div>
      <div className="comic__detail-bottom">
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
