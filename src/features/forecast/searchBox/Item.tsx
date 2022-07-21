import { City } from "../../../types";
import api from "../../../services/api";
import Icon from "./Icon";
import { kelvinToCelsius } from "../../../helpers";
import { forecastEndpoint } from "../../../services/endpoints";
import { ACTIONS, useContext } from "../../../hooks/contextProvider";

type Props = {
  item: City;
};

const CityItem: React.FC<Props> = ({ item }) => {
  const { dispatch } = useContext();

  const handleOnClick = () => {
    api(forecastEndpoint(item.coord.lat, item.coord.lon), "GET")
      .then((res) => {
        dispatch({
          type: ACTIONS.SET_CITY,
          payload: { weather: res.data, city: item },
        });
      })
      .catch((err) => {
        // TODO:handle errors
        console.error("🚀 ~ api ~ err", { ...err });
      });
  };

  return (
    <div
      onClick={handleOnClick}
      test-dataid="item"
      className="w-full h-12 flex justify-between items-center px-4 py-3 hover:bg-gray-200 cursor-pointer"
    >
      <p className="text-sm">{item.name}</p>
      <p className="text-sm">{kelvinToCelsius(item.main.temp)}°C</p>
      <Icon name={item.weather[0].main} />
      <p className="text-xs text-gray-400">
        {item.coord.lat},{item.coord.lon}
      </p>
    </div>
  );
};

export default CityItem;
