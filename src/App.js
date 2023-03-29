import "./App.css";
import Ejemplo from "./components/Ejemplo";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Ejemplo />} />
        <Route path="/seller" element={<Header />}/>
      </Routes>
    </div>
  );
}

export default App;
