import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "src/context/UserContext";
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({ element }) => {
  const { user,logout } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  

const token = user.token;
  if (token) {

    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (decodedToken.exp < currentTime) {
        // Token has expired, log the user out
        logout();
        return <Navigate to="/login" />;
      }
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }
return element;
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PrivateRoute;
