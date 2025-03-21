import { useEffect } from "react";
import "./App.css";
import { getData } from "./services/testApi";
import Joke from "./components/Joke";

function App() {
  // Function to get products details
  const getProductsData = async () => {
    // Calling the getData which returns the get API response
    let data = await getData();
    // console.log("Data", data.data);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <>
      <h2>Axios Tutorial</h2>
      <Joke />
    </>
  );
}

export default App;
