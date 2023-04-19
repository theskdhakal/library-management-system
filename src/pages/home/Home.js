import React, { useEffect } from "react";
import { MainLayout } from "../../components/layout/MainLayout";
import { HomeCarousel } from "../../components/carousel/HomeCarousel";
import { Col, Container, Row } from "react-bootstrap";
import { CustomCard } from "../../components/custom-card/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooksActions } from "../book/bookAction";
import { CustomInpute } from "../../components/custom-inpute/CustomInpute";

const Home = () => {
  const { book } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    !book.length && dispatch(getAllBooksActions());
  }, [dispatch, book.length]);
  return (
    <MainLayout>
      <HomeCarousel />

      <Container className="mt-4">
        <Row>
          <Col>
            <h1>Explore the library</h1>
            <div className="d-flex justify-content-between flex-wrap gap-2">
              <div>{book.length}Books found!</div>
              <CustomInpute placeholder="search book by title" className="" />
            </div>
            <hr />
            {book.map((item) => (
              <CustomCard key={item.id} {...item} />
            ))}
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Home;
