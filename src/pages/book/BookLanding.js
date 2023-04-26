import React, { useEffect } from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Rating } from "../../components/rating/Rating";
import { Revies } from "../../components/review/Revies";
import { createNewBurrowBookAction } from "./bookAction";

const BookLanding = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { book } = useSelector((state) => state.books);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!book.length) {
      navigate("/");
    }
  });

  const selectedBook = book.find((item) => item.id === bookId) || {};

  const { id, title, name, year, summary, url, isAvailable } = selectedBook;

  const handleOnBurrow = () => {
    const { uid, fName } = user;
    if (user.uid) {
      // create burrowhistory table and add following object
      const defaultBurrowDay = 14;
      const obj = {
        bookId,
        bookName: title,
        userName: fName,
        userId: uid,
        burrowingAt: Date.now(),
        returnAt: Date.now() + defaultBurrowDay * 24 * 60 * 60 * 1000,
        hasReturned: false,
      };

      dispatch(createNewBurrowBookAction(obj));
      return;
    }
    alert("Please login to burrow the book");
  };

  return (
    <MainLayout>
      <Link to="/">
        <Button variant="secondary">&lt; Back</Button>
      </Link>
      <Container className="mt-5 pt-5">
        <Row>
          <Col md="4">
            <img src={url} width="100%" alt="" />
          </Col>
          <Col>
            <h1>{title}</h1>
            <p>
              {name} - {year}
              <Rating />
            </p>
            <p>
              {!user?.uid ? (
                <Button disabled={true}>Login to burrow</Button>
              ) : isAvailable ? (
                <Button onClick={handleOnBurrow}>Burrow Now</Button>
              ) : (
                <Button variant="info" disabled>
                  Available From: 10/5/2023
                </Button>
              )}
            </p>
            <div className="mt-3">Summary: {summary}</div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h4>Reviews</h4>
            <div className="review-list">
              <Revies />
              <Revies />
              <Revies />
              <Revies />
              <Revies />
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default BookLanding;
