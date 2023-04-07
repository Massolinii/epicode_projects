import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const API_KEY = "6cbf0b3cb080c11f09fe6ba72bb563b5";

function tempConverter(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.floor(celsius * 100) / 100;
}

const FavTowns = () => {
  const dispatch = useDispatch();
  const favContent = useSelector((state) => state.favourite.content);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const fetchedData = [];
      for (const town of favContent) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${API_KEY}`
          );
          const data = await response.json();
          fetchedData.push(data);
        } catch (error) {
          console.error(error);
        }
      }
      setWeatherData(fetchedData);
    };

    fetchWeatherData();
  }, [favContent]);

  return (
    <div>
      <h2>Your Favourite Towns :D</h2>
      <div className="d-flex flex-wrap justify-content-around">
        {weatherData.map((data, i) => {
          return (
            <Card
              key={data.name + i}
              style={{ width: "18rem", marginBottom: "1rem" }}
            >
              <Card.Body>
                <Card.Title>
                  <Link to={`/${data.name}`}>{data.name}</Link>
                  <span className="ms-3">
                    {data.main && data.main.temp
                      ? Math.round(tempConverter(data.main.temp)) + "°C"
                      : "N/A"}
                  </span>
                </Card.Title>
                <Button
                  className="m-2"
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAV",
                      payload: data.name,
                    });
                  }}
                >
                  remove from fav 💔
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <Link to="/" id="home-link">
        <Button className="m-4">Home</Button>
      </Link>
    </div>
  );
};

export default FavTowns;
