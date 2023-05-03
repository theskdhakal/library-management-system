import React from "react";
import { PrivateRoute } from "../../components/private-route/PrivateRoute";
import { Container } from "react-bootstrap";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { ReviewTable } from "../../components/review-table/ReviewTable";

const Reviews = () => {
  const { user } = useSelector((state) => state.user);
  const { reviews } = useSelector((state) => state.books);
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
          <h3>Reviews</h3>

          <hr />

          <ReviewTable />
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};

export default Reviews;
