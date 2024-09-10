import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div
      className="w-full h-screen p-8 duration-500"
      style={{ textAlign: "center", backgroundColor: color }}
    >
      <h1 className="text-violet-450 font-semibold pb-8 ">
        Select a Background Picker
      </h1>
      <div className="bg-white rounded-lg w-3/5 flex flex-wrap justify-around p-2.5 m-auto ">
        <button
          className="bg-red-500 outline-none p-2 rounded-lg text-white"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-green-500 outline-none p-2 rounded-lg text-white"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="bg-yellow-500 outline-none p-2 rounded-lg text-white"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-blue-500 outline-none p-2 rounded-lg text-white"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="bg-orange-500 outline-none p-2 rounded-lg text-white"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
      </div>
    </div>
  );
}

export default App;
