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
import axios from "axios";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  const urls=["/dashboard","/dashboard/client/:id","/dashboard/inventory","/dashboard/sellers","/dashboard/all_clients","/dashboard/perfil"]
  const validateToken = async () => {
    const validate= await axios.post("https://crm.up.railway.app/api/validation", document.cookie);
    console.log(validate);
      }
      for(let i=0;i<urls.length;i++){
        if(location.pathname===urls[i]){
          console.log(urls[i]);
          validateToken();
          }
}
  return (
    <div className="page-container">
       {/* {location.pathname === "/dashboard" ? validateToken() && (<Summary />) : (<Home />)} */}
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
