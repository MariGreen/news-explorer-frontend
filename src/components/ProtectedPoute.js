import React, { useEffect } from 'react';
import { Route, Redirect } from "react-router-dom";

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

export default ProtectedRoute;