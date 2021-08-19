import React from 'react';
import { UseSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Protected({ path, component, exact }) {
  const isAuthenticated = UseSelector(({ auth }) => auth.isAuthenticated);

  return isAuthenticated
    ? <Route path={path} exact={exact} component={component} />
    : <Redirect to="/login" />;
}

Protected.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

Protected.defaultProps = {
  exact: false,
};
