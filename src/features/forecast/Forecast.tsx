import React from "react";

import Days from "./Days";
import SearchBox from "./searchBox/SearchBox";
import { ContextProvider, reducer } from "../../hooks/contextProvider";

const Forecast: React.FC = () => {
  return (
    <ContextProvider
      reducer={reducer}
      initialState={{ city: null, cities: null, weather: null }}
    >
      <div className="flex flex-col items-center">
        <div className="mb-4 mt-4 w-full sm:max-w-md px-5">
          <SearchBox label="Search a city" />
        </div>
        <Days />
      </div>
    </ContextProvider>
  );
};

export default Forecast;
