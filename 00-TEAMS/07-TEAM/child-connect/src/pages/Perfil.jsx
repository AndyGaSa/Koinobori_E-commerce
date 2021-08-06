/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../redux/actions';
import './Perfil.css';
/* import EventList from './EventList'; */

export default function Perfil() {
  const currentUsers = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <>
      <div className="profile-container">
        <div className="profile-upper-block">
          <div className="profile-photo-block">
            <img src="https://i.ibb.co/6vnFxPd/Layer-1.png" alt="profilepic" className="profilepic" />
            <img src="https://i.ibb.co/xYHTgG6/Rectangle-1.png" alt="rectangle" className="rectangle" />
          </div>

          <div className="profile-data-block">
            <h2 className="profile-username">{currentUsers[2]?.name}</h2>
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
                  <p className="profile-data__text"> de 8 años</p>
                </div>

              </div>
              <div className="hobbies-info">
                <p className="profile-data-details__headline">Intereses de mis hijos:</p>
                <div className="children-info__age">
                  <img src="https://i.ibb.co/GvX1g1D/Hobby-icon.png" alt="" className="hobbies-info__img" />
                  <p className="profile-data__text"> Fútbol</p>
                </div>
                <div className="children-info__age">
                  <img src="https://i.ibb.co/GvX1g1D/Hobby-icon.png" alt="" className="hobbies-info__img" />
                  <p className="profile-data__text"> Natación</p>
                </div>
                <div className="children-info__age">
                  <img src="https://i.ibb.co/GvX1g1D/Hobby-icon.png" alt="" className="hobbies-info__img" />
                  <p className="profile-data__text"> Lectura</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-rating-block">
            <img src="https://i.ibb.co/Cv61Tmy/Rating-icon.png" alt="rating-circle" />
          </div>
        </div>
        <div className="profile-lower-block">
          <h3>Información personal:</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC, making it over
            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in classical literature,
            discovered the undoubtable source

          </p>

        </div>
      </div>
    </>

  );
}
