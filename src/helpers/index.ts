export const getMaxMinTemp = (min: number, max: number, unit: string = "C") =>
  `${Math.round(min)}º${unit} / ${Math.round(max)}º${unit}`;

export const getDayByOffset = (offset: number): string => {
  const date = new Date();

  return new Date(date.setDate(date.getDate() + offset)).toLocaleString("en", {
    weekday: "long",
  });
};

export const kelvinToCelsius = (kelvin: number) => {
  return Math.round((kelvin - 273.15))
}