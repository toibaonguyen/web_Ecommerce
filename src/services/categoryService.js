import axios from "axios";

export const getAllCategorys = () => {
  return axios.get("https://se-347.onrender.com/getListCategories");
};
