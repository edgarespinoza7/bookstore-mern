import React from 'react'
import { Navigate, Outlet } from 'react-router';
import PropTypes from 'prop-types';

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return <Navigate to="/admin" /> // 
  }
  return children ? children : <Outlet /> // Redirect to admin page if not authenticated
}
AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute
