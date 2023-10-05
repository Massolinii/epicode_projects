export function tempConverter(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.round(celsius);
}

export function averageTemperatures(forecast) {
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
