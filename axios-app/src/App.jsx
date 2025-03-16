import { useState, useEffect } from "react";
import "./App.css";
import { getData } from "./services/testApi";

function App() {
  const getProductsData = async () => {
    let data = await getData();
    console.log("Data", data.data);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <>
      <h2>Axios Tutorial</h2>
    </>
  );
}

export default App;
