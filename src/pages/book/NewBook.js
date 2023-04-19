import React, { useDebugValue, useState } from "react";
import { PrivateRoute } from "../../components/private-route/PrivateRoute";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { CustomInpute } from "../../components/custom-inpute/CustomInpute";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewBookAction } from "./bookAction";

export const NewBook = () => {
  const dispatch = useDispatch();
  const [frm, setFrm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrm({ ...frm, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(addNewBookAction(frm));
  };

  const inputs = [
    {
      label: "Book Title",
      name: "title",
      type: "text",
      placeholder: "Clean Code",
      required: true,
    },
    {
      label: "Author Name",
      name: "name",
      type: "text",
      placeholder: "Sam smith",
      required: true,
    },
    {
      label: "Published Date",
      name: "year",
      type: "number",
      placeholder: 2020,
      required: true,
    },

    {
      label: "Image Url",
      name: "url",
      type: "url",
      placeholder: "http:/image-url.com",
      required: true,
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      required: true,
    },
  ];

  return (
    <PrivateRoute>
      <UserLayout>
        <Container>
          <h3>NewBook</h3>

          <Link to="/books">
            <Button variant="secondary">&lt; Back</Button>
          </Link>
          <hr />

          <Form
            onSubmit={handleOnSubmit}
            className="border p-5 shadow-lg rounded m-auto bg-light  mb-3"
            style={{ width: "400px" }}
          >
            <h3 className="text-primary fw-bolder mb-3">Add New Book</h3>

            <div className="mt-5">
              {inputs.map((item, i) => (
                <CustomInpute key={i} {...item} onChange={handleOnChange} />
              ))}

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Add Book
                </Button>
              </div>
            </div>
          </Form>
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};
