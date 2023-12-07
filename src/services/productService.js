import axios from "axios";

export const getAllProducts = () => {
  return axios.get("https://se-347.onrender.com/getListProductHomepage");
};
