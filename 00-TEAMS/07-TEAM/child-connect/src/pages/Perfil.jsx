/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import './Perfil.css';
/* import EventList from './EventList'; */

export default function Perfil() {
  const currentUsers = useSelector(({ users }) => users);

  console.log(currentUsers);
  return (
    <>
      <div className="profile-container">
        <div className="profile-upper-block">
          <div className="profile-photo-block">
            <img src="https://i.ibb.co/6vnFxPd/Layer-1.png" alt="profilepic" className="profilepic" />
            <img src="https://i.ibb.co/xYHTgG6/Rectangle-1.png" alt="rectangle" />
            <div className="photo-deco-circle" />
          </div>
          <div className="profile-data-block">
            <h2 className="profile-username">Sandra González</h2>
            <div className="user-location">
              <img src="https://i.ibb.co/ckmfDWW/pin-1.png" alt="" className="location_icon" />
              <p className="user-city-name">Barcelona, Sants</p>

            </div>
            <div className="profile-data-details">
              <div className="children-info">
                <p className="profile-data-details__headline">Tengo:</p>
                <div className="children-info__age">
                  <img src="https://i.ibb.co/VJ5Nkv9/boy.png" alt="" className="children-info__img" />
                  <p className="profile-data__text"> de 5 años</p>
                </div>
                <div className="children-info__age">
                  <img src="https://i.ibb.co/TMfrrNS/girl.png" alt="" className="children-info__img" />
                  <p className="profile-data__text"> de 5 años</p>
                </div>

              </div>
              <div className="hobbies-info">
                <p className="profile-data-details__headline">Intereses de mis hijos:</p>
                <div className="children-info__age">
                  <img src="https://i.ibb.co/Ytk8bjz/Hobby-icon.png" alt="" className="hobbies-info__img" />
                  <p className="profile-data__text"> Fútbol</p>
                </div>
                <div className="children-info__age">
                  <img src="https://i.ibb.co/Ytk8bjz/Hobby-icon.png" alt="" className="hobbies-info__img" />
                  <p className="profile-data__text"> Natación</p>
                </div>
                <div className="children-info__age">
                  <img src="https://i.ibb.co/Ytk8bjz/Hobby-icon.png" alt="" className="hobbies-info__img" />
                  <p className="profile-data__text"> Lectura</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-rating-block" />
        </div>
        <div className="profile-lower-block" />

      </div>

      <p>{currentUsers[0]?.name}</p>

    </>

  );
}
