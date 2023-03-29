import "./App.css";
import { Route, Routes } from "react-router-dom";

// Views
import LandingPage from "./views/LandingPage";
import VendedorCliente from "./views/VendedorCliente";
import VendedorDetallesCliente from "./views/VendedorDetallesCliente";
import LoginPage from "./views/auth/LoginPage";
import AuthLayout from "./layouts/AuthLayout";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/vendedor_cliente" element={<VendedorCliente />} />
        <Route exact path="/auth" element={<AuthLayout/>}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route
          exact
          path="/vendedor_detalles_cliente"
          element={<VendedorDetallesCliente />}
        />
      </Routes>
    </div>
  );
}

export default App;
