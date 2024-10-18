import Home from "./components/Home";
import Login from "./components/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Home />
    </UserContextProvider>
  );
}

export default App;
