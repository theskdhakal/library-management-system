import React from "react";
import { PrivateRoute } from "../../components/private-route/PrivateRoute";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NewBook = () => {
  return (
    <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>NEwBook</h3>

          <Link to="/books">
            <Button variant="secondary">&lt; Back</Button>
          </Link>
          <hr />
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};
