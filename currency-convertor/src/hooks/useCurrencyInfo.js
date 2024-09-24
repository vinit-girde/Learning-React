import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error fetching data: ${res.statusText}`);
        }

        return res.json(); // Return JSON response
      })
      .then((data) => {
        setData(data[currency]); // Set the currency data in state
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        setError(error.message); // Optional: Set error message in state
      });
  }, [currency]);
  return data;
};

export default useCurrencyInfo;
