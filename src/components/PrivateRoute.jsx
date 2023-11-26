/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ProfileContext } from "../context/profile-context";
import { Container, Loader } from "rsuite";

const PrivateRoute = ({ children }) => {
  const {profile, isLoading} = useContext(ProfileContext)

  if(isLoading && !profile){
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    )
  }

  if (!profile && !isLoading) 
    return <Navigate to="/signin" />;

  return (
    children
  );
};

export default PrivateRoute;
