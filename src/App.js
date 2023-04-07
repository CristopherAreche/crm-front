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
      <Route exact path="crm-front/" element={<Home />} />
      <Route path="crm-front/dashboard" element={<Summary />} />
      <Route
        exact
        path="crm-front/dashboard/client/:id"
        element={<ClientDetail />}
      />
      <Route path="crm-front/dashboard/inventory" element={<Inventory />} />

      <Route exact path="crm-front/dashboard/sellers" element={<Sellers />}>
        <Route
          path="crm-front/dashboard/sellers/clients"
          element={<Clients />}
        />
      </Route>

      <Route path="crm-front/dashboard/all_clients" element={<AllClients />} />

  

      {/* Rutas de Registracion y Login */}
      <Route exact path="crm-front/authentication" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route
          path="crm-front/authentication/register"
          element={<Register />}
        />
      </Route>
    </Routes>
  );
}

export default App;
