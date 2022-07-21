export const findCitiesEndpoint = (keyword: string): string =>
  `${process.env.REACT_APP_OPEN_WEATHER_MAP_URL}/find?q=${keyword}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_APP_ID}&units=standard`;
export const forecastEndpoint = (lat: number, lon: number): string =>
  `${process.env.REACT_APP_OPEN_WEATHER_MAP_URL}/onecall?lat=${lat}&lon=${lon}&units=standard&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_APP_ID}`;
