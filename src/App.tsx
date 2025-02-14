import "./App.scss";
import GridBox from "./components/GridBox";

function App() {
  return <div className="flex items-center justify-center h-screen flex-col bg-[#1f1f1f]">
    <h1 className="text-4xl font-bold mb-6 text-white">The Grid (3x3)</h1>
    <GridBox />
  </div>;
}

export default App;
