import axios from "axios";

export const getAllProducts = () => {
    return axios.get('https://be-shop-jolv.onrender.com/product');
};
