import React, { useEffect } from "react";
import { PrivateRoute } from "../../components/private-route/PrivateRoute";
import { Container } from "react-bootstrap";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAction } from "../signup-signin/userAction";

const Clients = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [dispatch]);

  if (user.role !== "admin") {
    return (
      <PrivateRoute>
        <UserLayout>
          <h1>Unauthrize access</h1>
        </UserLayout>
      </PrivateRoute>
    );
  }
  return (
    <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>Clients</h3>

          <hr />
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};

export default Clients;
