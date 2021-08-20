import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProtectedRoute({ path, component, exact }) {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

  return isAuthenticated
    ? <Route path={path} exact={exact} component={component} />
    : <Redirect to="/login" />;
}

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool
};

ProtectedRoute.defaultProps = {
  exact: false
};
