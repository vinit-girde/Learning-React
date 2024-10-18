import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) return <div>please login</div>;

  return <div style={{ textAlign: "center" }}>Welcome {user.username}</div>;
};

export default Home;
