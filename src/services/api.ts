import axios, { AxiosPromise, Method } from "axios";

const api = (
  url: string,
  method: Method,
  data:any = null,
  headers = { headers: { "Content-Type": "application/json" } }
): AxiosPromise => {
  // axios expects params for get parameters
  let dataKey = "data";
  if (method === "GET") {
    dataKey = "params";
  }

  const options = {
    method,
    [dataKey]: data,
    url,
    ...headers
  };

  return axios(options);
};

export default api;
