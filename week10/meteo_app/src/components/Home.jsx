import { Container, Row, Col } from "react-bootstrap";
import MainHome from "./MainHome";
import Searchbar from "./Searchbar";

const cities = ["Milano", "Roma", "Napoli"];

const MyHome = () => {
  return (
    <Container fluid>
      <Row>
        <Searchbar />
      </Row>
      <Row>
        {cities.map((city, index) => (
          <MainHome key={index} cityName={city} />
        ))}
      </Row>
    </Container>
  );
};

export default MyHome;
