import axios from "axios";

export const getAddressById = (userId) => {
  return axios.get(
    `http://localhost:5000/api/Address/getByUserId?userId=${userId}`
  );
};
