import { Cards } from "./Cards";
import { Col, Row, Container } from "react-bootstrap";

export const ContainerCats = () => {
  return (
    <div className="gatos container border shadow p-3 mb-5 bg-body rounded mt-5">
      <Cards img="https://cdn.pixabay.com/photo/2012/12/05/15/24/shoe-68770_1280.jpg" />
      <Cards />
      <Cards />
      <Cards img="https://cdn.pixabay.com/photo/2022/02/15/00/40/lemonade-7014122_1280.jpg" />
      <Cards />
      <Cards />
      <Cards />
      <Cards img="https://cdn.pixabay.com/photo/2012/12/05/15/24/shoe-68770_1280.jpg" />
    </div>
  );
};
