import axios from "axios";

export const getCartProducts = (userId) => {
  return axios.get(
    `https://be-shop-jolv.onrender.com/cartItem/findCartItemsByUserId/?userId=${userId}`
  );
};
