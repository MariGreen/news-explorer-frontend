import React, { useEffect } from 'react';
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ component: Component, onRouteClick, ...props }) => {
  useEffect(() => {
    if (!props.isLoggedIn) return () => onRouteClick();
    return null;
  }, [onRouteClick, props.isLoggedIn]
  );

  return (
    <Route>
      {
        () => props.isLoggedIn ? <Component {...props} /> : <Redirect to="./" />
      }
    </Route>
  )
}

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onRouteClick: PropTypes.func.isRequired,
}

export default ProtectedRoute;