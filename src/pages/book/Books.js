import React from "react";
import { PrivateRoute } from "../../components/private-route/PrivateRoute";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Books = () => {
  return (
    <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>Books</h3>
          <hr />

          <div className="text-end">
            <Link to="/newBook">
              <Button variant="primary">Add New Books</Button>
            </Link>
          </div>
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};
