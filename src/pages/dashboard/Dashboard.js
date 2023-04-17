import React from "react";
import { PrivateRoute } from "../../components/private-route/PrivateRoute";
import { UserLayout } from "../../components/layout/UserLayout";
import { Container } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>Dashboard</h3>
          <hr />
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};
