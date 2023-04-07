import { Container, Button, Carousel, Card, Row, Col } from "react-bootstrap";
import TownCard from "./TownCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

function tempConverter(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.floor(celsius * 100) / 100;
}

function averageTemperatures(forecast) {
  const dailyTemps = {};
  forecast.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const dateString = date.toISOString().split("T")[0];
    if (!dailyTemps[dateString]) {
      dailyTemps[dateString] = {
        temps: [],
      };
    }
    dailyTemps[dateString].temps.push(item.main.temp);
  });

  const dailyAverages = [];
  for (const date in dailyTemps) {
    const temps = dailyTemps[date].temps;
    const avgTemp = temps.reduce((a, b) => a + b) / temps.length;
    dailyAverages.push({ date, avgTemp });
  }

  return dailyAverages;
}

function TownPage() {
  const API_KEY = "6cbf0b3cb080c11f09fe6ba72bb563b5";
  const params = useParams();
  console.log(params);
  const [town, setTown] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [nextDaysForecast, setNextDaysForecast] = useState([]);
  const nextDaysAverages = averageTemperatures(nextDaysForecast);

  const getTownDetails = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params.name}&appid=${API_KEY}`
      );
      if (response.ok) {
        let details = await response.json();
        setTown(details);
        console.log(details);
      } else {
        console.log("error happened with the request");
      }
    } catch (error) {
      console.log("generic error happened", error);
    }
  };

  const getTownForecast = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${params.name}&appid=${API_KEY}`
      );
      if (response.ok) {
        let details = await response.json();
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
      } else {
        console.log("error happened with the request");
      }
    } catch (error) {
      console.log("generic error happened", error);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getTownDetails();
    getTownForecast();
  }, []);

  return (
    <Container>
      <Button
        color="danger"
        onClick={() => {
          dispatch({
            type: "ADD_TO_FAV",
            payload: params.name,
          });
        }}
      >
        Add to your Favourites
      </Button>
      {town !== null && <TownCard town={town} />}
      {forecast.length > 0 && (
        <Row xs={1} sm={2} md={3} className="g-4">
          {forecast.map((item, index) => (
            <Col key={index}>
              <Card className="mx-auto">
                <Card.Body>
                  <Card.Title>
                    {new Date(item.dt * 1000).toLocaleString()}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {Math.round(tempConverter(item.main.temp))}°C
                  </Card.Subtitle>
                  <Card.Text>
                    Weather:{" "}
                    {item.weather &&
                    item.weather[0] &&
                    item.weather[0].description
                      ? item.weather[0].description
                      : "N/A"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {nextDaysAverages.length > 0 && (
        <Row xs={1} sm={2} md={3} className="g-4">
          {nextDaysAverages.map((item, index) => (
            <Col key={index}>
              <Card className="mx-auto">
                <Card.Body>
                  <Card.Title>{item.date}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {Math.round(tempConverter(item.avgTemp))}°C
                  </Card.Subtitle>
                  <Card.Text>Temperature media giornaliera</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default TownPage;
