import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/regionalbloc/",
});

export default axiosInstance;
