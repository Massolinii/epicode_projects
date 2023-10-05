import { Container, Row, Col } from "react-bootstrap";
import MainHome from "./MainHome";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import FavButton from "./FavButton";

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

      <Row>
        <Col className="col-12 w-100 mx-auto">
          <Link to="/your-cities" id="home-link">
            <FavButton />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default MyHome;
