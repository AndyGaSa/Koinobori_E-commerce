import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Details() {
  const cameras = useSelector((store) => store.cameras);
  const { cameraId } = useParams();
  const [camera, setCamera] = useState();

  useEffect(() => {
    if (cameraId) {
      const foundCamera = cameras.find((currentCamera) => currentCamera.id === cameraId);
      setCamera(foundCamera);
    }
  },
  [cameraId]);

  return (
    <>
      <Header />
      <h1>{camera?.name}</h1>
      <p>
        Megapixels:
        {' '}
        {`${camera?.megapixels}`}
      </p>
      <p>
        Video:
        {' '}
        {`${camera?.video}`}
      </p>
      <p>
        Category:
        {' '}
        {`${camera?.category}`}
      </p>
      <Footer />
    </>
  );
}
