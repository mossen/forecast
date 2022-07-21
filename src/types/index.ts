export type Coord = {
  lat: number;
  lon: number;
};

type Weather = {
  main: string;
  description: string;
}

export type City = {
  id: number;
  name: string;
  coord: Coord;
  main: {
    temp: number;
  };
  weather: Weather[];
};

export type CityWeather = {
  current: any;
  daily: {
    temp: {
      max: number;
      min: number;
    };
    weather: Weather[];
  }[];
};
