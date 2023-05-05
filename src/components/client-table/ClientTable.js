import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export const ClientTable = () => {
  const dispatch = useDispatch();
  const { clients } = useSelector((state) => state.user);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>fName</th>
          <th>lName</th>
          <th>E-mail</th>

          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((item) => (
          <tr key={item.id}>
            <td>{item.fName}</td>
            <td>{item.lName}</td>
            <td>{item.email}</td>

            <td>{item.role}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
