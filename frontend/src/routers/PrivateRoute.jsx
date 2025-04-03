import React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from "../context/AuthContext";
import { Navigate } from 'react-router';
// he path based on your project structure


const PrivateRoute = ({ children }) => {



  const { currentUser, loading } = useAuth(); // 

  if (loading) {
    return <div className='container mx-auto p-6'>Loading...</div>; // Show loading state while checking authentication
  }

  if (currentUser) {
    return children
  }
  return <Navigate to="/login" /> // Redirect to login page if not authenticated
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute