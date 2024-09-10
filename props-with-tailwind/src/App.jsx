import "./App.css";
import Card from "./components/Card";
import { data } from "./data";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-yellow-100 text-black mb-4">
        This is an example of Props
      </h1>
      {/* To loop card component from data array */}
      <div className="flex gap-4">
        {data.map((item, index) => {
          return <Card key={index} title={item.title} content={item.content} />;
        })}
        {/* If we don't pass props then we have add default values at props destructuring */}
        <Card />
      </div>
    </>
  );
}

export default App;
