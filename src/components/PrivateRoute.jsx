/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const profile = false;

  if (!profile) 
    return <Navigate to="/signin" />;

  return (
    children
  );
};

export default PrivateRoute;
