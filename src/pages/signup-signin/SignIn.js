import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInpute } from "../../components/custom-inpute/CustomInpute";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firbease-config";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./userAction";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const dispatch = useDispatch();
  const [frm, setFrm] = useState({});
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    user?.uid && navigate("/Dashboard");
  }, [user]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrm({ ...frm, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(frm);

    dispatch(loginUser(frm));
  };

  const inputs = [
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
  ];

  return (
    <MainLayout>
      <Container className="mt-5">
        <Form
          onSubmit={handleOnSubmit}
          className="border p-5 shadow-lg rounded m-auto bg-light  mb-3"
          style={{ width: "400px" }}
        >
          <h3 className="text-primary fw-bolder mb-3">Welcome back!!</h3>

          <div className="mt-5">
            {inputs.map((item, i) => (
              <CustomInpute key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Login!
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </MainLayout>
  );
};

export default SignIn;
