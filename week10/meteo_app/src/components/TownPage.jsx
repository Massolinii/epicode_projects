import { Container, Card, Row, Col } from "react-bootstrap";
import TownCard from "./TownCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWeatherData, fetchTownForecast } from "../api/api";
import { averageTemperatures, tempConverter } from "../utils/utils";

const TownPage = () => {
  const params = useParams();
  const [town, setTown] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [nextDaysForecast, setNextDaysForecast] = useState([]);
  const nextDaysAverages = averageTemperatures(nextDaysForecast);

  const getTownDetails = async () => {
    try {
      const details = await fetchWeatherData(params.name);
      setTown(details);
    } catch (error) {
      console.log("generic error happened", error);
    }
  };

  const getTownForecast = async () => {
    try {
      const details = await fetchTownForecast(params.name);
      const now = new Date();
      const firstDayForecast = details.list.filter((item) => {
        const itemDate = new Date(item.dt * 1000);
        const hoursDiff = (itemDate - now) / 1000 / 60 / 60;
        return hoursDiff >= 0 && hoursDiff <= 24;
      });
      setForecast(firstDayForecast);

      const nextDaysForecast = details.list.filter((item) => {
        const itemDate = new Date(item.dt * 1000);
        const hoursDiff = (itemDate - now) / 1000 / 60 / 60;
        return hoursDiff > 24 && hoursDiff <= 24 * 5;
      });
      setNextDaysForecast(nextDaysForecast);
    } catch (error) {
      console.log("generic error happened", error);
    }
  };

  useEffect(() => {
    if (params.name) {
      getTownDetails();
      getTownForecast();
    }
  }, [params.name]);

  return (
    <Container className="main-container">
      {town !== null && (
        <TownCard town={town} currentTemp={tempConverter(town.main.temp)} />
      )}
      {forecast.length > 0 && (
        <div>
          <Row>
            <Col className="col-12 my-2 bg-white rounded showCase">
              <h3>
                Watch {town.name}'s weather forecast for the next 24 hours:
              </h3>
            </Col>
          </Row>
          <Row xs={1} sm={2} md={3} className="g-2 justify-content-md-center">
            {forecast.map((item, index) => (
              <Col key={index}>
                <Card className="mx-auto small-card">
                  <Card.Body>
                    <Card.Title>
                      {
                        new Date(item.dt * 1000)
                          .toLocaleTimeString()
                          .split(":")[0]
                      }
                      :00
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {Math.round(tempConverter(item.main.temp))}°C
                    </Card.Subtitle>
                    <Card.Text>
                      Weather:{" "}
                      {item.weather &&
                      item.weather[0] &&
                      item.weather[0].description
                        ? item.weather[0].description.charAt(0).toUpperCase() +
                          item.weather[0].description.slice(1)
                        : "N/A"}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
      <h2 className="my-2 bg-white rounded showCase">
        Watch the weather forecast for the next 5 days
      </h2>
      {nextDaysAverages.length > 0 && (
        <Row xs={1} sm={2} md={3} className="g-2 justify-content-center">
          {nextDaysAverages.map((item, index) => (
            <Col key={index}>
              <Card className="mx-auto small-card">
                <Card.Body>
                  <Card.Title>{item.date}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {Math.round(tempConverter(item.avgTemp))}°C
                  </Card.Subtitle>
                  <Card.Text>Daily Temperature </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default TownPage;
