import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  getBurrowBookAction,
  returnBookAction,
} from "../../pages/book/bookAction";
import { Button } from "react-bootstrap";

export const HistoryTable = () => {
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state.books);
  const { user } = useSelector((state) => state.user);

  const { burrowHistory } = useSelector((state) => state.books);
  //   console.log(user);
  useEffect(() => {
    dispatch(getBurrowBookAction(user.uid));
  }, [dispatch, user]);

  const handleOnReturn = ({ id, bookId, userId }) => {
    if (window.confirm("Are you sure want to return the book")) {
      dispatch(returnBookAction(bookId, id, userId));
    }
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Books</th>
            <th>Borrow Date</th>
            <th>Return Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {burrowHistory.map((item) => (
            <tr>
              <td>{item.bookName}</td>
              <td>{new Date(item.burrowingAt).toLocaleDateString()}</td>
              <td>{new Date(item.returnAt).toLocaleDateString()}</td>
              <td>
                {item.hasReturned ? (
                  <Button variant="warning">Give Review</Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => handleOnReturn(item)}
                  >
                    Return book
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
