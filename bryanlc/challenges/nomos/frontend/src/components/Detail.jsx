/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import loadGnomos from '../redux/accions/actionCreator';

export default function Detail() {
  const allGnomos = useSelector(({ gnomos }) => gnomos);
  const { gnomoId } = useParams();
  const dispatch = useDispatch();

  const gnomos = allGnomos?.filter((e) => e._id === gnomoId);

  useEffect(() => {
    if (gnomoId) {
      dispatch(loadGnomos());
    }
  }, []);

  return (
    <main>

      <CssBaseline />
      <Container maxWidth="sm">

        <p>

          <img src={gnomos[0].image} alt="" />

        </p>
        <p>
          {' '}
          {gnomos[0]?.name}
        </p>

        <p>
          {' '}
          {gnomos[0]?.about}
        </p>
      </Container>

    </main>

  );
}
