import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import VendedorDetallesCliente from "./views/VendedorDetallesCliente";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./views/auth/LoginPage";
import RegisterPage from "./views/auth/RegisterPage";
import SellerLayout from "./layouts/SellerLayout";
import VendedorResumen from "./views/VendedorResumen";
import VendedorCliente from './views/VendedorCliente.jsx'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route
        exact
        path="/cliente/:id"
        element={<VendedorDetallesCliente />}
      />
      <Route exact path="/vendedor" element={<SellerLayout />}>
        <Route index element={<VendedorResumen />} />
        <Route path="clientes" element={<VendedorCliente />}/>
      </Route>
      <Route exact path="/auth" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
