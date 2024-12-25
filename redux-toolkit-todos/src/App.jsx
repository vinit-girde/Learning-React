import "./App.css";
import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="text-center">
      <h1>Learn about React Redux with Todo App</h1>
      <AddTodos />
      <Todos />
    </div>
  );
}

export default App;
