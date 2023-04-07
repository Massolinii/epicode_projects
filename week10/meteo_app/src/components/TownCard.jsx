import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

function TownCard() {
  return (
    <Container>
      <Row className="textLeft">
        <Col className="col-12">
          <Card className="mx-auto mt-3">
            <Card.Body>
              <Card.Title>City Title</Card.Title>
              <Card.Text> Gradi Centigradi </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TownCard;
