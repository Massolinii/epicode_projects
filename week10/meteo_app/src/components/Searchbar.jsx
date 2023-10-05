import React, { useState } from "react";
import { ListGroup, Dropdown, InputGroup, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GeoIcon from "./GeoIcon";
import { fetchWeatherData, fetchSuggestions } from "../api/api";

const Searchbar = () => {
  const [town, setTown] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const fetchedSuggestions = await fetchSuggestions(town);
    setSuggestions(fetchedSuggestions);
  };

  const onSelectTown = async (townName, country) => {
    setTown(`${townName}, ${country}`);
    setSuggestions([]);
    try {
      const data = await fetchWeatherData(townName);
      setWeatherData([data]);
      setError(null);
    } catch (error) {
      setError("Oops! Something went wrong. Please try again.");
    }
  };

  function tempConverter(kelvin) {
    const celsius = kelvin - 273.15;
    return Math.floor(celsius * 100) / 100;
  }

  return (
    <>
      <Form onSubmit={handleSearch}>
        <InputGroup id="basic-addon1" className="d-flex w-75 mx-auto pt-2">
          <InputGroup.Text id="basic-addon1">
            <GeoIcon />
          </InputGroup.Text>
          <Form.Control
            type="search"
            placeholder="Search for any City..."
            aria-label="Search"
            value={town}
            onChange={(e) => setTown(e.target.value)}
          />
          <Button variant="dark" type="submit">
            Search
          </Button>
        </InputGroup>
      </Form>
      {suggestions.length > 0 && (
        <Dropdown.Menu show>
          {suggestions.map((suggestion, i) => (
            <Dropdown.Item
              key={i}
              onClick={() => onSelectTown(suggestion.name, suggestion.country)}
            >
              {suggestion.name}, {suggestion.country}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      )}
      {error && <p>{error}</p>}
      {weatherData.length > 0 && (
        <ListGroup>
          {weatherData.map((data, i) => (
            <ListGroup.Item key={data.name + i} className="searchCard">
              <h2>{data.name}</h2>
              <h3 className="fs-1">
                {data.main && data.main.temp
                  ? Math.round(tempConverter(data.main.temp)) + "°C"
                  : "N/A"}
              </h3>
              <p>
                Weather:{" "}
                {data.weather && data.weather[0] && data.weather[0].description
                  ? data.weather[0].description.charAt(0).toUpperCase() +
                    data.weather[0].description.slice(1)
                  : "N/A"}
              </p>
              <Link to={"/town/" + data.name}>
                <Button className="bg-white text-primary px-4 border border-2 border-primary">
                  See More
                </Button>
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default Searchbar;
