import React, { useEffect } from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Rating } from "../../components/custom-card/rating/Rating";
import { Review } from "../../components/review/Review";

export const BookLanding = () => {
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

  const { id, title, name, year, summary, url } = selectedBook;

  const handleOnBurrow = () => {
    if (!user.uid) {
      return alert("please login to burrow the book");
    }
  };

  console.log(selectedBook);
  return (
    <MainLayout>
      <Container>
        <Row>
          <Col>
            <img src={url} width="100%" alt="" />
          </Col>
          <Col>
            <h1>title</h1>
            <p>
              {name}-{year}
              <Rating />
            </p>
            <p>
              <Button onClick={handleOnBurrow}>Burrow Now!</Button>
            </p>
            <p>Summary:{summary}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4>Reviews</h4>

            <div className="review-List">
              <Review />
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};
