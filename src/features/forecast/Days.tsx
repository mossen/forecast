import Icon from "./searchBox/Icon";
import { getMaxMinTemp, getDayByOffset } from "../../helpers";
import { useContext } from "../../hooks/contextProvider";

const Days: React.FC = () => {
  const { state } = useContext();

  return (
    <div className="xs:w-full w-1/2 max-w-xl flex flex-col items-center">
      {state.weather
        ? state.weather?.daily.map((day, index: number) => (
            <div className="m-1 w-full px-4 py-2 bg-white rounded shadow-lg flex items-center justify-between">
              <p className="w-28">{getDayByOffset(index)}</p>
              <p className="mx-2 text-sm">
                {getMaxMinTemp(day.temp.max, day.temp.min)}
              </p>
              <Icon name={day.weather[0].main} />
              <p className="w-32 text-gray-400 text-sm text-right">{day.weather[0].description}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Days;
