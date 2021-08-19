import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

import { useSelector } from 'react-redux';

function ProtectedRoute({ path, component }) {
  const loggedUser = useSelector(({ user }) => user);

  return (
    <main>
      {Object.keys(loggedUser)?.length
        ? <Route path={path} component={component} />
        : <Redirect to="/login" />}
    </main>
  );
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  path: propTypes.string.isRequired,
  component: propTypes.func.isRequired
};
