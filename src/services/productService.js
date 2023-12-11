import axios from "axios";

export const getAllProducts = () => {
  return axios.get("https://se-347.onrender.com/getListProductHomepage");
};

export const getProductsByCategory = (categoryId) => {
  return axios.get(
    `https://se-347.onrender.com/getListByCategoryId?categoryId=${categoryId}`
  );
};

export const getProductsById = (productId) => {
  return axios.get(
    `https://se-347.onrender.com/getProductDetail?product_id=${productId}`
  );
};
