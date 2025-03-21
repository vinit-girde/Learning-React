import { useState } from "react";
import { getJoke } from "../services/testApi";

const Joke = () => {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handler function to get data from getJoke()
  const getJokesData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getJoke();
      setLoading(false);
      count++;
      setJoke(data.joke);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <button className="btn" onClick={getJokesData}>
        Random joke
      </button>
      <p style={{ marginTop: "2rem" }}>
        {loading ? (
          <div>Loading....</div>
        ) : error ? (
          <div>Error: {error.message || "An error occurred."}</div>
        ) : joke ? (
          <div>{joke}</div>
        ) : (
          ""
        )}
      </p>
    </>
  );
};

export default Joke;
