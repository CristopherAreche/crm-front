import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import VendedorCliente from "./views/VendedorCliente";
import VendedorDetallesCliente from "./views/VendedorDetallesCliente";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./views/auth/LoginPage";
import RegisterPage from "./views/auth/RegisterPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route
        exact
        path="/vendedor_detalles_cliente/:id"
        element={<VendedorDetallesCliente />}
      />
      <Route exact path="/vendedor_cliente" element={<VendedorCliente />} />
      <Route exact path="/auth" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
