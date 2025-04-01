import React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from "../context/AuthContext";
import { Navigate } from 'react-router';
// he path based on your project structure


const PrivateRoute = ({children}) => {



  const {currentUser} = useAuth(); // 

  if(currentUser) {
    return children
  }
  return  <Navigate to="/login" /> // Redirect to login page if not authenticated
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute