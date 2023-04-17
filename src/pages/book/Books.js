import React from "react";
import { PrivateRoute } from "../../components/private-route/PrivateRoute";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BookTable } from "../../components/book-table/BookTable";

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

            <div className="mt-3">
              <BookTable />
            </div>
          </div>
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};
