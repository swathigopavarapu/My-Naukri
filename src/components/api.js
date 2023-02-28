import axios from "axios";
import { toast } from "react-toastify";

const getToken = () => {
  let access_token = window.localStorage.getItem("access_token");
  return access_token;
};
const getTenantId = () => {
  let tenant_id = window.localStorage.getItem("tenant_id");
  return tenant_id;
};
const getClientId = () => {
  let client_id = window.localStorage.getItem("client_id");
  return client_id;
};
const getAppId = () => {
  let app_id = window.localStorage.getItem("app_id");
  return app_id;
};
const logout = () => {
  localStorage.clear();
  return (window.location.href = "/auth/login");
};

const getClient = () => {
  let origin = window.location.origin;
  if (origin.includes("localhost")) return process.env.REACT_APP_BASE_URL;
  else return origin;
};

const Api = axios.create({
  baseURL: getClient(),
  timeout: 60000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
export const nonAuthApi = axios.create({
  baseURL: getClient(),
  timeout: 60000,
  headers: {
    Authorization:
      "Basic ZWRnZS0tZGV2LS10ZHAtY2UtLXVzci0wMTo5N2JmZTJiZGY1ZWJmZTQ3OWYzNzdiMTRiYTg4NmY5OA==",
  },
});
export const apprApi = axios.create({
  baseURL: getClient(),
  timeout: 60000,
  headers: {
    "TENANT-ID": "pathfinder-hcl",
  },
});

// interceptor for all the requests
Api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers["USER-ACCESS-TOKEN"] = getToken();
    config.headers["TENANT-ID"] = getTenantId();
    config.headers["CLIENT-ID"] = getClientId();
    config.headers["APP-ID"] = getAppId();
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// interceptor for all the responses
Api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  function (error) {
    if (error?.response) {
      switch (error?.response?.status) {
        case 401:
          toast.error(
            error?.response?.data?.code + ": " + error?.response?.data?.message
          );
          logout();
          break;
        case 400:
          toast.warn(
            error?.response?.data?.message
          );
          break;
        default:
          // toast.error("Sorry, something went wrong");
          return Promise.reject(error);
      }
    } else {
    }
  }
);

nonAuthApi.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    //toast.error(error.response.data.message);
    return Promise.reject(error);
  }
);

export default Api;