export const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchSuggestions = async (town) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${town}&limit=5&appid=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchWeatherData = async (townName) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${townName}&appid=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch weather data");
  }
};

export const fetchTownForecast = async (townName) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${townName}&appid=${API_KEY}`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch forecast data");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch forecast data");
  }
};
