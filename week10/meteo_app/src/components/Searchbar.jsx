import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ListGroup, Dropdown } from "react-bootstrap";

const API_KEY = "6cbf0b3cb080c11f09fe6ba72bb563b5";

const Searchbar = function () {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city.length > 2) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [city]);

  const fetchSuggestions = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&appid=${API_KEY}`
      );
      const data = await response.json();
      setSuggestions(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      setError("City not found");
      setWeatherData([]);
    }
  };

  const onSelectCity = (cityName) => {
    setCity(cityName);
    setSuggestions([]);
  };

  return (
    <>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
      {suggestions.length > 0 && (
        <Dropdown.Menu show>
          {suggestions.map((suggestion) => (
            <Dropdown.Item
              key={suggestion.id}
              onClick={() => onSelectCity(suggestion.name)}
            >
              {suggestion.name}, {suggestion.country}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      )}
      {error && <p>{error}</p>}
      {weatherData.length > 0 && (
        <ListGroup>
          {weatherData.map((data) => (
            <ListGroup.Item key={data.id}>
              <h2>{data.name}</h2>
              <p>Temperature: {data.main.temp}</p>
              <p>Humidity: {data.main.humidity}</p>
              <p>Description: {data.weather[0].description}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default Searchbar;
