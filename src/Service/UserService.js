import Main_Api from "../Auth_Interceptor/Main_Api";

export const UserLogin = (request) => {
  return Main_Api.post("auth/reader/login", request);
};

export const UserRegister = (request) => {
  return Main_Api.post("auth/reader/register", request);
};

export const Purchase_book = (request) => {
  console.log(request);
  return Main_Api.post("book/reader/purchase_book", request);
};

export const Get_Purchasedbook = () => {
  return Main_Api.get("book/reader/get_purchased_books");
};

export const Add_to_Cart = (request) => {
  return Main_Api.post("book/reader/add_cart", request);
};

export const Get_CartItem = () => {
  return Main_Api.get("book/reader/get_cart");
};

export const Remove_from_Cart = (request) => {
  return Main_Api.delete("book/reader/delete_cart/" + request);
};

export const Add_to_Wishlist = (request) => {
  return Main_Api.post("book/reader/add_wishlist", request);
};

export const Get_WishlistItem = () => {
  return Main_Api.get("book/reader/get_wishlist");
};

export const Remove_from_Wishlist = (request) => {
  return Main_Api.delete("book/reader/delete_wishlist/" + request);
};

export const Get_user_Book = (request) => {
  // return Main_Api.delete("book/reader/delete_wishlist/" + request);
};

export const Get_user_BookbyId = (request) => {
  return Main_Api.get("book/reader/get_book/" + request);
};
