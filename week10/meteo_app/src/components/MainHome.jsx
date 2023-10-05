import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchWeatherData } from "../api/api";
import { tempConverter } from "../utils/utils";

const MainHome = ({ cityName }) => {
  const [cityData, setCityData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchWeatherData(cityName);
        setCityData(data);
        setIsLoading(false);
      } catch (err) {
        setError("An error occurred");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [cityName]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mx-auto mt-3 mx-auto textLeft mainCards">
            <Card.Body>
              <Link className="linkTitle" to={`/town/${cityData?.name}`}>
                <Card.Title className="mainCardTitle">
                  {cityData.name}
                </Card.Title>
              </Link>
              <Row>
                <Col className="d-flex col-3 align-items-center">
                  <Card.Text>
                    Temperature: <br />
                    {`${tempConverter(cityData.main.temp)}°C`}
                  </Card.Text>
                </Col>
                <Col className="d-flex col-3 align-items-center">
                  <Card.Text className="mainCardHumidity">
                    Humidity: <br />
                    {`${cityData.main.humidity}%`}
                  </Card.Text>
                </Col>
                <Col className="d-flex col-3 align-items-center">
                  <Card.Text className="mainCardWeather">
                    Weather: <br />
                    {cityData.weather[0].description.charAt(0).toUpperCase() +
                      cityData.weather[0].description.slice(1).toLowerCase()}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainHome;
