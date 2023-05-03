import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "../rating/Rating";

export const ReviewTable = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { reviews } = useSelector((state) => state.books);
  console.log(reviews);

  const rate = reviews?.length
    ? reviews.reduce((acc, { ratings }) => acc + +ratings, 0) / reviews.length
    : 5;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Book-Title</th>
          <th>user</th>
          <th>feedback</th>

          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map((item) => (
          <tr key={item.id}>
            <td>{item.bookName}</td>
            <td>{item.userName}</td>
            <td>{item.feedback}</td>

            <td>
              <Rating rate={item.ratings} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
