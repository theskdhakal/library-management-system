import React, { useEffect, useState } from "react";
import { PrivateRoute } from "../private-route/PrivateRoute";
import { Button, Container, Form } from "react-bootstrap";
import { UserLayout } from "../layout/UserLayout";
import { Link, useParams } from "react-router-dom";
import { CustomInpute } from "../custom-inpute/CustomInpute";
import { useDispatch, useSelector } from "react-redux";
import {
  addReviewsAction,
  getAllBooksActions,
} from "../../pages/book/bookAction";

export const GiveReview = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const { bookId } = useParams();

  const { user } = useSelector((state) => state.user);
  const { book } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getAllBooksActions()); // dispatch action to fetch book data from API
  }, [dispatch]);

  const returnedBook = book.find((item) => item.id === bookId) || {};
  const { id, title, name, year } = returnedBook;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      ...form,
      userId: user.uid,
      bookId: book.id,
    };

    dispatch(addReviewsAction(obj));
  };

  // const handleOnDelete = () => {
  //   if (window.confirm("Are you sure, you want to delte this review?")) {
  //     alert("this is also working");
  //   }
  // };

  const inputs = [
    {
      label: "Write Your feedback",
      name: "detail",
      type: "text",
      as: "textarea",
      rows: "5",
      required: true,
      value: form?.detail,
    },
  ];

  return (
    <Container>
      <Form
        onSubmit={handleOnSubmit}
        className="  m-auto b g-light  mb-3"
        style={{ width: "500px" }}
      >
        <div className="mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Rating</Form.Label>
            <Form.Select name="rating" onChange={handleOnChange}>
              <option value="">-- Select Rating --</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </Form.Select>
          </Form.Group>

          {inputs.map((item, i) => (
            <CustomInpute key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Submit Review
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
};
