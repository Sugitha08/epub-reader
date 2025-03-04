import axios from "axios";
import { Base_Url } from "../Environment/Base_Url";

const Main_Api = axios.create({
  baseURL: Base_Url,
});

const AuthHeader = (config) => {
  const token = localStorage.getItem("Auth_Token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

Main_Api.interceptors.request.use(AuthHeader);

export default Main_Api;
