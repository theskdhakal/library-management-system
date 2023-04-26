import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBooksActions,
  getBurrowHistoryAction,
} from "../../pages/book/bookAction";
import { Button } from "react-bootstrap";

export const HistoryTable = () => {
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state.books);
  const { user } = useSelector((state) => state.user);

  const { burrowHistory } = useSelector((state) => state.books);
  //   console.log(user);
  useEffect(() => {
    dispatch(getBurrowHistoryAction(user.uid));
  }, [dispatch, user]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Books</th>
            <th>Borrow Date</th>
            <th>Return Date</th>
            <th>Available Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {burrowHistory.map((item) => (
            <tr>
              <td>{item.bookName}</td>
              <td>{new Date(item.burrowingAt).toDateString}</td>
              <td>{new Date(item.returnAt).toDateString}</td>
              <td>{item.hasReturned}</td>
              <td>
                <Button variant="primary">Return book</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
