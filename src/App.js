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
import Redireccion from "./views/auth/Redireccion";
import FeedbackView from "./views/FeedbackView";
import SuccessPayment from "./views/SuccessPayment";
import ChangePass from "./views/auth/ChangePass";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
function App() {
  return (
    <div className="page-container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/authentication/redireccion" element={<Redireccion />} />
        {/* Rutas de Dashboard */}
        <Route path="/dashboard/*" element={<ProtectedRoutes />}>
          <Route index element={<Summary />} />
          <Route path="client/:id" element={<ClientDetail />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="all_clients" element={<AllClients />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>

        <Route path="/feedback/:salesmanId" element={<FeedbackView />} />
        <Route path="/success" element={<SuccessPayment />} />

        <Route path="/changepass/:role/:id" element={<ChangePass />} />

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
