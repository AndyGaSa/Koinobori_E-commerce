import React from 'react';

import './BannerLanding.scss';

export default function BannerLanding() {
  return (
    <section className="section-banner">
      <div className="section-banner__logo-item">
        <img data-testid="main-logo" className="logo-item__main-logo" src="https://i.ibb.co/N12DWzQ/LOGO-PANORAMIC-3.png" width="150" alt="LOGO-PANORAMIC" />
        <h2 className="logo-item__logo-text">Panoramic</h2>
      </div>
      <p className="section-banner__text-item">
        FIND YOUR FAVORITE ARTISTS,
        LEARN ABOUT THEIR EVENTS AND FOLLOW THEM SO YOU CAN ATTEND YOUR BEST VIEWS
      </p>

    </section>
  );
}
