import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ListGroup, Dropdown } from "react-bootstrap";

const API_KEY = "6cbf0b3cb080c11f09fe6ba72bb563b5";

const Searchbar = function () {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  const fetchSuggestions = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchSuggestions();
  };

  const onSelectCity = async (cityName, country) => {
    setCity(`${cityName}, ${country}`);
    setSuggestions([]);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData([data]);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("City not found");
      setWeatherData([]);
    }
  };

  return (
    <>
      <Form className="d-flex" onSubmit={handleSearch}>
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
              onClick={() => onSelectCity(suggestion.name, suggestion.country)}
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
              <p>
                Temperature:{" "}
                {data.main && data.main.temp ? data.main.temp : "N/A"}
              </p>
              <p>
                Humidity:{" "}
                {data.main && data.main.humidity ? data.main.humidity : "N/A"}
              </p>
              <p>
                Description:{" "}
                {data.weather && data.weather[0] && data.weather[0].description
                  ? data.weather[0].description
                  : "N/A"}
              </p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default Searchbar;
