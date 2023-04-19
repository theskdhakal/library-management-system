import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Rating } from "./rating/Rating";

export const CustomCard = ({ name, year, title, id, url, rating }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <h5>
            {name}-{year}
          </h5>

          <Rating rate={4.5} />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
