import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import ClientDetail from "./views/dashboard/ClientDetails";
import Summary from "./views/dashboard/Summary";
import Sellers from "./views/dashboard/Sellers";
import AllClients from "./views/dashboard/AllClients";
import Home from "./views/Home";
import Inventory from "./views/dashboard/Inventory";
import Perfil from "./views/dashboard/Perfil";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {login} from "../src/services/authServices";

function App() {

  return (
    <div className="page-container">
      <Routes>
        <Route exact path="/" element={<Home />} />
 
        <Route exact path="/dashboard" element={<Summary />} />
        <Route path="/dashboard/client/:id" element={<ClientDetail />} />
        <Route path="/dashboard/inventory" element={<Inventory />} />
        <Route path="/dashboard/sellers" element={<Sellers />}/>
        <Route path="/dashboard/all_clients" element={<AllClients />} />
        <Route path="/dashboard/perfil" element={<Perfil />} />
        
        {/* Rutas de Registracion y Login */}
        <Route exact path="/authentication" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="/authentication/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
