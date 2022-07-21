import * as React from "react";
import { City, CityWeather } from "../types";

export enum ACTIONS {
  SET_CITIES,
  SET_CITY,
}

export interface State {
  weather: CityWeather | null;
  cities: City[] | null;
  city: City | null;
}

type Actions =
  | { type: ACTIONS.SET_CITIES; payload: City[] }
  | { type: ACTIONS.SET_CITY; payload: { city: City; weather: CityWeather } };

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case ACTIONS.SET_CITIES:
      return { ...state, cities: action.payload };
    case ACTIONS.SET_CITY:
      return {
        ...state,
        cities: null,
        city: action.payload.city,
        weather: action.payload.weather,
      };

    default: {
      return state;
    }
  }
};

// above can be moved to a separate file.

const Context = React.createContext({ state: null });

export const ContextProvider = <State extends unknown, Action extends unknown>({
  children,
  reducer,
  initialState,
}: {
  children: React.ReactNode;
  initialState: State;
  reducer: (state: State, action: Action) => any;
}): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useContext = (): {
  state: State;
  dispatch: React.Dispatch<Actions>;
} => {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error("context must be used within a CountProvider");
  }

  return context as unknown as {
    state: State;
    dispatch: React.Dispatch<Actions>;
  };
};
