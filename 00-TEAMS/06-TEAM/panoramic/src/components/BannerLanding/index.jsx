import React from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './BannerLanding.scss';

export default function BannerLanding() {
  return (
    <section className="section-banner">
      <div className="section-banner__logo-item">
        <img className="logo-item__main-logo" src="https://i.ibb.co/N12DWzQ/LOGO-PANORAMIC-3.png" width="150" alt="LOGO-PANORAMIC" />
        <h2 className="logo-item__logo-text">Panoramic</h2>
      </div>
      <p className="section-banner__text-item">
        BUSCA TUS ARTISTAS FAVORITOS,
        ENTERATE DE SUS EVENTOS Y SIGUELOS PARA QUE ASISTAS A TUS MEJORES PANORAMAS
      </p>

    </section>
  );
}
