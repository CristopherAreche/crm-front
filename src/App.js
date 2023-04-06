import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import ClientDetail from "./views/dashboard/ClientDetails";
import Clients from "./views/dashboard/Clients";
import Summary from "./views/dashboard/Summary";
import Sellers from "./views/dashboard/Sellers";
import AllClients from "./views/dashboard/AllClients";
import Home from "./views/Home";
import Inventory from "./views/dashboard/Inventory";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/dashboard" element={<Summary />} />
      <Route exact path="/dashboard/client/:id" element={<ClientDetail />} />
      <Route path="/dashboard/inventory" element={<Inventory />} />

      <Route exact path="/dashboard/sellers" element={<Sellers />}>
        <Route path="/dashboard/sellers/clients" element={<Clients />} />
      </Route>

      <Route path="/dashboard/all_clients" element={<AllClients />} />

      {/* Rutas de Registracion y Login */}
      <Route exact path="/authentication" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="/authentication/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
