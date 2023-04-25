import React, { useState } from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInpute } from "../../components/custom-inpute/CustomInpute";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firbease-config";
import { doc, setDoc } from "firebase/firestore";
const SignUp = () => {
  const [frm, setFrm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrm({ ...frm, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      const { confirmPassword, password, ...rest } = frm;
      if (confirmPassword !== password)
        return toast.error("password Do   not match");

      //register
      const pendingUser = createUserWithEmailAndPassword(
        auth,
        rest.email,
        password
      );
      toast.promise(pendingUser, {
        pending: "please wait",
      });

      const { user } = await pendingUser;
      if (user?.uid) {
        await setDoc(doc(db, "users", user.uid), { rest });

        return toast.success("your acccound has been registered.");
      }
      return toast.error("error, please try again later");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Sam smith",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Sam smith",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Samsmith@email.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "xxxxxxxxxx",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "xxxxxxxxxx",
      required: true,
    },
  ];

  return (
    <MainLayout>
      <Container className="mt-5">
        <Form
          onSubmit={handleOnSubmit}
          className="border p-5 shadow-lg rounded m-auto bg-light  mb-3"
          style={{ width: "400px" }}
        >
          <h3 className="text-primary fw-bolder mb-3">Join Library Comunity</h3>

          <Form.Text>
            Anyone can create admin or user account for experiment purpose.
            <br />
            <br />
            Once you are regustered, you will be redirected to Dashboard
            automatically.
          </Form.Text>
          <div className="mt-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Account Type</Form.Label>
              <Form.Select name="role" onChange={handleOnChange}>
                <option value="">-- Select user --</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Form.Select>
            </Form.Group>

            {inputs.map((item, i) => (
              <CustomInpute key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Register Now!
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </MainLayout>
  );
};

export default SignUp;
