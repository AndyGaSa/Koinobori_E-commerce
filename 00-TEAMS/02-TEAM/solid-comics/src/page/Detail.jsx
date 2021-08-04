import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Details.scss';

export default function Detail() {
  const comics = useSelector((store) => store.comics);
  // const idUrl = window.location.search.split('?')[1];
  // eslint-disable-next-line no-unused-vars
  const targetComic = comics.filter((comic) => comic.id !== 91391);

  return (
    <main className="details">
      <h2 className="detail__title">
        Title:
        {targetComic[0]?.title}
      </h2>
      <div className="detail__top">
        <img className="detail__img" src={`${targetComic[0]?.thumbnail?.path}.${targetComic[0]?.thumbnail?.extension}`} alt="comic" />
        <section>
          <div className="detail__creators">
            <h3 className="detail__creator">
              Penciler:
              {targetComic[0]?.creators.items[0].name}
            </h3>
            <h3 className="detail__creator">
              Writer:
              {targetComic[0]?.creators.items[1].name}
            </h3>
            <h3 className="detail__creator">
              Colorist:
              {targetComic[0]?.creators.items[3].name}
            </h3>
            <h3 className="detail__creator">
              Penciler:
              {targetComic[0]?.creators.items[1].name}
            </h3>
            <h3 className="detail__creator">
              Editor:
              {targetComic[0]?.creators.items[2].name}
            </h3>
          </div>
          <div />
        </section>
      </div>
      <div className="detail__bottom">
        <span>
          print price:
          {' '}
          {targetComic[0]?.prices[0].price}
          $
        </span>
      </div>
    </main>
  );
}
