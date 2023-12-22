import axios from "axios";

export const getCartProducts = (userId) => {
  return axios.get(
    `http://localhost:5000/api/Cart/getCartByUserId?userId=${userId}`
  );
};
