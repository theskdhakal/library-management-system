import React, { useEffect, useState } from "react";
import { PrivateRoute } from "../../components/private-route/PrivateRoute";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInpute } from "../../components/custom-inpute/CustomInpute";
import { getUserAction, updateUserAction } from "./userAction";
import { EditProfile } from "../../components/edit-profile/EditProfile";

const Profile = () => {
  const [form, setForm] = useState();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction());
  };

  return (
    <PrivateRoute>
      <UserLayout>
        <Container className="mt-5">
          <h3>Profile</h3>

          <hr />

          <EditProfile />
        </Container>
      </UserLayout>
    </PrivateRoute>
  );
};

export default Profile;
