import "./App.css";
import Ejemplo from "./components/Ejemplo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Ejemplo />} />
      </Routes>
    </div>
  );
}

export default App;
