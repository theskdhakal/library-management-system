import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInpute } from "../custom-inpute/CustomInpute";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserAction,
  updateUserAction,
} from "../../pages/signup-signin/userAction";

export const EditProfile = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const { user } = useSelector((state) => state.user);
  const { clients } = useSelector((state) => state.user);
  console.log(clients);
  console.log(user);

  const currentUser = clients.find((client) => client.id === user.uid);
  console.log(currentUser);

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure, you want to update your profile?")) {
      dispatch(updateUserAction(form));
    }
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Sam smith",
      required: true,
      value: currentUser?.fName,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Sam smith",
      required: true,
      value: currentUser?.lName,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Samsmith@email.com",
      required: true,
      value: currentUser?.email,
    },
    {
      label: "New Password",
      name: "password",
      type: "password",
      placeholder: "xxxxxxxxxx",
      required: true,
    },
    {
      label: "Confirm New Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "xxxxxxxxxx",
      required: true,
    },
  ];

  return (
    <Container>
      <Form
        onSubmit={handleOnSubmit}
        className="border p-5 shadow-lg rounded m-auto bg-light  mb-3"
        style={{ width: "400px" }}
      >
        <h3 className="text-primary fw-bolder mb-3">Update My Profile</h3>

        <Form.Text>update your profile in the form given below</Form.Text>
        <div className="mt-5">
          {inputs.map((item, i) => (
            <CustomInpute key={i} {...item} OnChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              update details
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
};
