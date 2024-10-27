import { useState, useEffect } from "react";
import { TodoProvider } from "./context";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  // This method takes new todo as parameter and adds in original arr
  const addTodo = (todo) => {
    console.log("11111", todo);
    // Takes new todo and add it in original todos array
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  };

  // This method takes id and new todo for updating selected todo and then updates it
  const updateTodo = (id, todo) => {
    // checks if id matches the todos id and then updates the todo
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // This method takes id of todo and deletes it from original todos array
  const deleteTodo = (id) => {
    // checks for passed id and then removes it from array
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    console.log(id);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  console.log({ todos });
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
