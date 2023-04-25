import React, { useState } from "react";
import { PrivateRoute } from "../private-route/PrivateRoute";
import { Button, Container, Form } from "react-bootstrap";
import { UserLayout } from "../layout/UserLayout";
import { Link } from "react-router-dom";
import { CustomInpute } from "../custom-inpute/CustomInpute";
import { useDispatch } from "react-redux";
import { addNewBookAction } from "../../pages/book/bookSlice";

export const EditBook = ({ selectedBook }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // dispatch(addNewBookAction(form));
  };

  const inputs = [
    {
      label: "Book Title",
      name: "title",
      type: "text",
      placeholder: "Clean code",
      required: true,
      value: selectedBook?.title,
    },
    {
      label: "Auther Name",
      name: "name",
      type: "text",
      placeholder: "Sam smith",
      required: true,
    },
    {
      label: "Published Year",
      name: "year",
      type: "number",
      required: true,
      placeholder: "2020",
    },

    {
      label: "Image Url",
      name: "url",
      type: "url",
      placeholder: "http://imge-url.com",
      required: true,
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      rows: "5",
      required: true,
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
          {inputs.map((item, i) => (
            <CustomInpute key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Update Book
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
};
