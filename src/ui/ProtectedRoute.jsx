import useUser from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import Loader from "./Loader";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1.Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 2. if there is no auhtenticated user,redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },

    [isAuthenticated, isLoading, navigate]
  );

  // 3.While loading, show spinner
  if (isLoading)
    return (
      <Fullpage>
        <Loader />
      </Fullpage>
    );

  //4.if there is a user,render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
