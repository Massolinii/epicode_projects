import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

function tempConverter(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.round(celsius);
}

function MainHome({ cityName }) {
  const API_KEY = "6cbf0b3cb080c11f09fe6ba72bb563b5";
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        );
        if (response.ok) {
          let details = await response.json();
          setCityData(details);
        } else {
          console.log("error happened with the request");
        }
      } catch (error) {
        console.log("generic error happened", error);
      }
    };

    fetchCityData();
  }, [cityName]);

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mx-auto mt-3 mx-auto textLeft mainCards">
            <Card.Body>
              <Row>
                <Col className="col-4">
                  <Card.Title className="mainCardTitle">
                    {cityData ? cityData.name : "Loading..."}
                  </Card.Title>
                </Col>
                <Col className="d-flex col-2 align-items-center">
                  <Card.Text>
                    Temperature: <br />
                    {cityData
                      ? `${tempConverter(cityData.main.temp)}°C`
                      : "Loading..."}
                  </Card.Text>
                </Col>
                <Col className="d-flex col-2 align-items-center">
                  <Card.Text className="mainCardHumidity">
                    Humidity: <br />
                    {cityData ? `${cityData.main.humidity}%` : "Loading..."}
                  </Card.Text>
                </Col>
                <Col className="d-flex col-4 align-items-center">
                  <Card.Text className="mainCardWeather">
                    Weather: <br />
                    {cityData && cityData.weather && cityData.weather[0]
                      ? cityData.weather[0].description
                          .charAt(0)
                          .toUpperCase() +
                        cityData.weather[0].description.slice(1).toLowerCase()
                      : "Loading..."}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MainHome;
