import Main_Api from "../Auth_Interceptor/Main_Api";

export const PublisherLogin = (request) => {
  return Main_Api.post("auth/login", request);
};

export const PublisherRegister = (request) => {
  return Main_Api.post("auth/register", request);
};

export const Upload_book = (request) => {
  return Main_Api.post("files/upload_book", request);
};

export const Add_Category = (request) => {
  return Main_Api.post("category/add_category", request);
};

export const Get_Category = () => {
  return Main_Api.get("category/get_categories");
};

export const GetBook_by_Category = (id) => {
  return Main_Api.get("category/get_categories/" + id);
};

export const GetBook_by_id = (id) => {
  return Main_Api.get("book/get_book/" + id);
};

export const deleteBook = (id) => {
  return Main_Api.get("book/delete_book/" + id);
};
