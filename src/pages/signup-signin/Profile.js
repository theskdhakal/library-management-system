import React, { useState } from "react";
import { PrivateRoute } from "../../components/private-route/PrivateRoute";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInpute } from "../../components/custom-inpute/CustomInpute";

const Profile = () => {
  const [form, setForm] = useState({});

  const { user } = useSelector((state) => state.user);
  console.log(user.fName);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Sam smith",
      required: true,
      value: user?.fName,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Sam smith",
      required: true,
      value: user?.lName,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Samsmith@email.com",
      required: true,
      value: user?.email,
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
    <PrivateRoute>
      <UserLayout>
        <Container className="mt-5">
          <h3>Profile</h3>

          <hr />

          <Form
            // onSubmit={handleOnSubmit}
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
      </UserLayout>
    </PrivateRoute>
  );
};

export default Profile;
