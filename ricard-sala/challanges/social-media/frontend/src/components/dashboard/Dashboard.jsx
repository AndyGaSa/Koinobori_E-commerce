import React from 'react';

import './dashboard.scss';

export default function Dashboard() {
  return (
    <>
      <main className="user">
        <header>friendsbook</header>
        <div className="user__img-container">
          <img className="img" src="https://www.antiagingya.com/es/wp-content/uploads/2015/01/img-default-autores.jpg" alt="profile" />
        </div>
      </main>
      <section className="basic__info">
        <span className="info__name">RICARD</span>
        <span className="info__gender">male</span>
      </section>
      <div className="info__container">
        <span className="info__about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio similique doloremque vitae dolores. Dignissimos, iusto voluptates corrupti error incidunt pariatur? Adipisci molestiae deleniti eum cumque sint magni autem voluptas?</span>
      </div>
      <div className="friends__button__container">
        <button
          className="friends__button"
          data-testid="create-button"
          type="button"
        >
          friends
        </button>
      </div>
    </>
  );
}
