import { Cards } from "./Cards";
import { Col, Row, Container } from "react-bootstrap";

export const ContainerCats = () => {
  return (
    <Container>
      <Row className="d-flex">
        <Cards img="https://cdn.pixabay.com/photo/2012/12/05/15/24/shoe-68770_1280.jpg" />
        <Cards />
        <Cards />
        <Cards img="https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122_1280.jpg" />
        <Cards />
        <Cards />
        <Cards />
        <Cards img="https://cdn.pixabay.com/photo/2012/12/05/15/24/shoe-68770_1280.jpg" />
      </Row>
    </Container>
  );
};
