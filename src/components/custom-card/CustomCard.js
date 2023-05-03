import Card from "react-bootstrap/Card";
import { Rating } from "../rating/Rating";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const CustomCard = ({ name, year, title, id, url, rating }) => {
  const { reviews } = useSelector((state) => state.books);

  const allBook = reviews.filter((item) => item.bookId === id);
  console.log(allBook + "ronish");

  const rate = allBook?.length
    ? allBook.reduce((acc, { ratings }) => acc + +ratings, 0) / allBook.length
    : 5;
  return (
    <Link to={`/book/${id}`} className="nav-link">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text>
            <h5>
              {name} - {year}
            </h5>

            <Rating rate={rate} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
