import Main_Api from "../Auth_Interceptor/Main_Api";

export const UserLogin = (request) => {
  return Main_Api.post("auth/reader/login", request);
};

export const UserRegister = (request) => {
  return Main_Api.post("auth/reader/register", request);
};
