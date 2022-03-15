import { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";

export const Cards = ({ img }) => {
  const [imagen, setImagen] = useState("https://placekitten.com/200/200");
  const [bucle, setBucle] = useState(true);

  if (img !== undefined && bucle) {
    setImagen(img);
    setBucle(false);
  }

  return (
    <Col xs="12" sm="6" md="4" lg="3">
      <Card>
        <Card.Img variant="top" src={imagen} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
