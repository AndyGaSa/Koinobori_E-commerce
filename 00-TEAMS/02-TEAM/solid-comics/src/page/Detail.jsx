import React from 'react';

import './styles/Details.scss';

export default function Detail() {
  return (
    <main className="details">
      <div className="detail__top">
        <img className="detail__img" src="https://i.annihil.us/u/prod/marvel/i/mg/f/90/610411d34068b/portrait_uncanny.jpg" alt="Spirits of Vengeance: Spirit Rider #1" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quibusdam at tempora dignissimos expedita? Rem, magni eius tempora,
          in voluptate eos cupiditate iste perspiciatis incidunt unde nam cum velit. Maiores.
        </p>
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
