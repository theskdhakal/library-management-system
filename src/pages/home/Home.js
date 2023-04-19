import React, { useEffect, useState } from "react";
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

  //create loacl display state and adding book to it, initially

  const [display, setDisplay] = useState([]);

  useEffect(() => {
    !display.length && dispatch(getAllBooksActions());
    setDisplay(book);
  }, [dispatch, book]);

  //on handle change, get typed value

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filteredItem = book.filter((item) =>
      item.title.tolowerCase().includes(value.tolowerCase())
    );
    setDisplay(filteredItem);
  };
  //use filter to fiter book based on typed value
  //override display state
  //use display state to loop through

  return (
    <MainLayout>
      <HomeCarousel />

      <Container className="mt-4">
        <Row>
          <Col>
            <h1>Explore the library</h1>
            <div className="d-flex justify-content-between flex-wrap gap-2">
              <div>{display.length}Books found!</div>
              <CustomInpute
                placeholder="search book by title"
                className=""
                onChange={handleOnSearch}
              />
            </div>
            <hr />
            {display.map((item) => (
              <CustomCard key={item.id} {...item} />
            ))}
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Home;
