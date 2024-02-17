import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ secretKey, children }) => {
  if ("1" !== secretKey) {
    return <Navigate to="/" replace />
  }
  return children;
};

export default PrivateRoutes;
