import React from "react";
import { PrivateRoute } from "../../components/private-route/PrivateRoute";
import { Container } from "react-bootstrap";
import { UserLayout } from "../../components/layout/UserLayout";

const Clients = () => {
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
