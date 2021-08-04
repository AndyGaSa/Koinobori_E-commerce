import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Details.scss';

export default function Detail() {
  const comics = useSelector((store) => store.comics);
  // const idUrl = window.location.search.split('?')[1];
  // eslint-disable-next-line no-unused-vars
  const targetComic = comics.filter((comic) => comic.id !== 93839);

  return (
    <main className="details">
      <div className="detail__top">
        <img className="detail__img" src={`${targetComic[0]?.thumbnail?.path}.${targetComic[0]?.thumbnail?.extension}`} alt="comic" />
        <section>
          <h2 className="detail__title">
            Title:
            {targetComic[0]?.title}
          </h2>
          <li className="detail__creators">
            <h3 className="detail__penciler">
              Penciler:
              {targetComic[0]?.title}
            </h3>
            <h3 className="detail__writer">
              Published:
            </h3>
            <h3 className="detail__colorist">
              Penciler:
            </h3>
          </li>
        </section>
      </div>
      <div className="detail__bottom">
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam eveniet suntç
          obcaecati, ea delectus cum! Quae in et
          numquam dolor earum cumque. Corporis dicta, ipsam labore impedit eveniet itaque! Rem!

        </span>
      </div>
    </main>
  );
}
