import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInpute } from "../custom-inpute/CustomInpute";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserAction,
  updateUserAction,
} from "../../pages/signup-signin/userAction";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../config/firbease-config";

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
    setForm(user);
  }, [user]);

  // useEffect(() => {
  //   dispatch(getUserAction());
  // }, [dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { email, role, uid, ...rest } = form;
    if (window.confirm("Are you sure, you want to update your profile?")) {
      const obj = {
        id: uid,
        ...rest,
      };
      console.log(obj);
      dispatch(updateUserAction(obj));
    }
  };

  const handleOnPasswordReset = () => {
    try {
      if (window.confirm("sure?")) {
        //firebase sends emails with pwd reset link

        sendPasswordResetEmail(auth, form.email)
          .then((resp) => {
            console.log(resp);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const inputs = [
    {
      label: "user role",
      name: "role",
      type: "text",
      required: true,
      value: form.role,
      disabled: true,
    },
    {
      label: "first Name",
      name: "fName",
      type: "text",
      placeholder: "Sam smith",
      required: true,
      value: form?.fName,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Sam smith",
      required: true,
      value: form?.lName,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Samsmith@email.com",
      required: true,
      value: form?.email,
      disabled: true,
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
            <CustomInpute key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              update details
            </Button>
          </div>
        </div>
      </Form>

      <div className="d-grid mt-4">
        <Button variant="danger" type="submit">
          Request reset password reset email
        </Button>
      </div>
    </Container>
  );
};
