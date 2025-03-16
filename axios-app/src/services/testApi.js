import axios from "axios";

const BASE_URL = "https://www.course-api.com/react-store-products";

const getData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response;
  } catch (error) {
    return error;
  }
};

export { getData };
