import { useState, useMemo } from "react";

import List from "./List";
import api from "../../../services/api";
import Loading from "../../../components/loading/Loading";
import useDebounce from "../../../hooks/useDebounce";
import { findCitiesEndpoint } from "../../../services/endpoints";
import { ACTIONS, useContext } from "../../../hooks/contextProvider";

type Props = {
  label: string;
};

const SearchBox: React.FC<Props> = ({ label }) => {
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext();

  const handler = () => {
    if (!keyword) {
      return;
    }
    setIsLoading(true);

    api(findCitiesEndpoint(keyword), "GET", { params: keyword })
      .then((res) => {
        dispatch({type: ACTIONS.SET_CITIES, payload: res.data.list})
      })
      .catch((err) => {
        // TODO:handle errors
        console.error("🚀 ~ api ~ esrr", { ...err });
      })
      .finally(() => setIsLoading(false));
  };

  useDebounce<string>(keyword, handler);

  const memoizedElements = useMemo(() => {
    return (
      <div className="relative">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="search">
          {label}
        </label>
        <div className="relative">
          <input
            className="shadow-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            id="search"
            data-testid="search-input"
            type="text"
            value={keyword}
            onChange={(event): void => setKeyword(event.target.value)}
          />
          <Loading className="absolute right-0 top-0" show={isLoading} />
        </div>
        <List />
      </div>
    );
  }, [keyword, label, isLoading]);

  return memoizedElements;
};

export default SearchBox;
