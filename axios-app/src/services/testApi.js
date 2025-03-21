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
// Function to call joke API with headers
const getJoke = async () => {
  let url = `https://icanhazdadjoke.com/`;
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // Handle the error appropriately.
    console.error("Error fetching joke:", error);
    // Rethrow the error to be caught in the component
    throw error;
  }
};
export { getData, getJoke };
