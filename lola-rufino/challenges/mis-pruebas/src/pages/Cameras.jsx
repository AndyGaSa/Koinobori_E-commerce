import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { deleteCamera, createCamera } from '../redux/actions/action.creators';

export default function Cameras() {
  const cameras = useSelector((store) => store.cameras);
  const [name, setName] = useState('');
  const [foundCameras, setFoundCameras] = useState(cameras);
  const dispatch = useDispatch();

  function create() {
    if (!name.trim()) return;
    dispatch(createCamera(name));
    setName('');
  }

  function deleteFn() {
    dispatch(deleteCamera(name));
  }

  function filterButton(event) {
    const keyword = event.target.value;

    if (keyword !== '') {
      const results = cameras.filter(
        (camera) => camera.name.toLowerCase().startsWith(keyword.toLowerCase())
      );
      setFoundCameras(results);
    } else {
      setFoundCameras(cameras);
    }
    setName(keyword);
  }

  return (
    <>
      <Header />
      <h1>Cameras</h1>
      <input
        value={name}
        onChange={filterButton}
      />
      <button type="button" onClick={create}>Add new camera</button>
      <section>
        {foundCameras && foundCameras.length > 0 ? (
          foundCameras.map((camera) => (
            <div className="cameras__container">
              <img className="cameras__icon" src="https://i.ibb.co/26nqm9h/camera.png" alt="camera icon" />
              <Link className="cameras__link" to={`details/${camera.id}`}><span>{camera.name}</span></Link>
              <button type="button" onClick={deleteFn}>X</button>
            </div>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </section>
      <Footer />
    </>
  );
}
